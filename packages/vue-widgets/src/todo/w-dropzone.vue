<template>
  <div class="w-dropzone">
    <w-mask-area :masked="isLoading">
      <label v-if="label" class="font-w-600">{{ label }}</label>
      <dropzone
        v-if="dropzoneOptions"
        v-on="$listeners"
        useCustomSlot
        ref="dropzone"
        :id="$id('dropzone')"
        :options="dropzoneOptions"
        :class="{'visible-custom-title': visibleCustomTitle}"
        @vdropzone-mounted="DZ = $refs.dropzone"
        @vdropzone-queue-complete="onQueueComplete()"
        @vdropzone-files-added="refreshStatus()"
        @vdropzone-canceled="refreshStatus()"
        @vdropzone-error="refreshStatus()"
        @vdropzone-removed-file="refreshStatus()"
        >
        <div class="dropzone-custom-content">
          <h3 class="dropzone-custom-title">Перетащите или кликните, чтобы прикрепить файлы</h3>
          <div class="subtitle" v-if="dropzoneOptions.autoProcessQueue">...загрузка начнется автоматически</div>
          <div class="subtitle" v-else>...загрузка начнется после нажатия на кнопку "сохранить"</div>
        </div>
      </dropzone>
      <!---->
      <div ref="previewTemplate" v-show="false">
        <div class="dz-preview dz-file-preview">
          <div class="dz-details">
            <div class="dz-filename"><span data-dz-name></span></div>
            <!--<div class="dz-size" data-dz-size></div>-->
            <!--<img data-dz-thumbnail />-->
          </div>
          <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
          <div class="dz-success-mark"><span>✔</span></div>
          <div class="dz-error-mark"><span>✘</span></div>
          <div class="dz-error-message"><span data-dz-errormessage></span></div>
        </div>
        <!-- default was looks like:
          <div class="dz-preview dz-file-preview">
            <div class="dz-details">
              <div class="dz-filename"><span data-dz-name></span></div>
              <div class="dz-size" data-dz-size></div>
              <img data-dz-thumbnail />
            </div>
            <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
            <div class="dz-success-mark"><span>✔</span></div>
            <div class="dz-error-mark"><span>✘</span></div>
            <div class="dz-error-message"><span data-dz-errormessage></span></div>
          </div>
        -->
      </div>
    </w-mask-area>
  </div>
</template>

<script>
  import dropzone from 'vue2-dropzone';
  import 'vue2-dropzone/dist/vue2Dropzone.min.css';
  import downloadjs from 'downloadjs';
  export default {
    components: { dropzone },
    props: {
      value: { type: Array, default() { return []; } },
      label: { type: String, default: '' },
      config: { type: Object, default: null },
      visibleCustomTitle: { type: Boolean, default: true },
    },
    data() {
      return {
        DZ: null,
        isLoading: false,
        dropzoneOptions: null, // отложенно инициализируются, чтобы было проще работать с шаблоном.
        status: null,
        process: null,
      };
    },
    watch: {
      DZ: {
        immediate: true,
        handler() {
          if (!this.DZ) {
            return;
          }
          this.DZ.dropzone.on('addedfile', (file) => {
            if (!file.manuallyAdded) {
              return;
            }
            file.previewElement.classList.add('manually-added');
            file.previewElement.title = 'Скачать файл';
            file.previewElement.addEventListener('click', () => {
              // @NOTE: если понадобится открывать в новой вкладке
              // let win = window.open(this.makeFileLink(file), '_blank');
              // win.focus();
              this.isLoading = true;
              let token = this.$cookies.get('auth_token');
              let xhr = new XMLHttpRequest();
              xhr.open('GET', this.makeFileLink(file), true);
              xhr.setRequestHeader('Authorization', `Bearer ${token}`);
              xhr.responseType = 'blob';
              xhr.onload = () => {
                downloadjs(xhr.response, file.name);
                this.isLoading = false;
              };
              xhr.send();
            });
          });
          _.each(this.value, file => {
            this.DZ.manuallyAddFile(file, this.makeFileLink(file));
          });
        },
      },
    },
    methods: {
      makeFileLink(file) {
        return `/api/files/${file.id}`;
      },
      refreshStatus() {
        this.status = {
          uploading: this.DZ.getUploadingFiles(),
          accepted: this.DZ.getAcceptedFiles(),
          rejected: this.DZ.getRejectedFiles(),
          queued: this.DZ.getQueuedFiles(),
        };
      },
      onQueueComplete() {
        this.refreshStatus();
        if (this.process) {
          this.process.resolve(this.status);
        }
        this.$emit('filesUploaded', this.status);
      },
      async uploadFiles() {
        return new Promise((resolve, reject) => {
          this.process = {resolve, reject};
          this.refreshStatus();
          if (this.status.queued.length === 0) {
            return resolve(this.status);
          }
          return this.DZ.processQueue();
        })
        .finally(() => {this.process = null;});
      },
    },
    mounted() {
      let token = this.$cookies.get('auth_token');
      this.dropzoneOptions = _.extend({}, {
        autoProcessQueue: true,
        url: 'https://httpbin.org/post',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        previewTemplate: this.$refs.previewTemplate.innerHTML,
        addRemoveLinks: true,
        dictRemoveFile: '✘',
        dictRemoveFileConfirmation: 'Вы уверены что хотите удалить файл?',
        dictCancelUpload: '✘',
        dictCancelUploadConfirmation: 'Вы уверены что хотите отменить загрузку?',
        //  this.$refs.dropzone.$refs.dropzoneElement.dropzone.emit('addedfile', { name: 'Name Image', size: 12345, type: 'image/jpeg' })
        //  this.$refs.dropzone.addFile('addedfile', { name: 'Name Image', size: 12345, type: 'image/jpeg' })
      }, this.config);
    },
  }
</script>

<style lang='scss' scoped>
  .w-dropzone {
    .dz-clickable, .dz-started {
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      /deep/ .dz-preview:not(:last-child) {
        margin-bottom: 10px;
      }
      /deep/ .dz-preview {
        width: 100%;
        background: #d9dfe6;
        margin: 0;
        min-height: 50px;
        &.manually-added {
          transition: all .3s;
          &:hover {
            opacity: 0.7;
          }
          * {
            cursor: pointer;
          }
        }
        .dz-details {
          opacity: 1;
          position: relative;
          color: white;
          .dz-filename {
            display: flex;
            span {
              max-width: 275px;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
        }
        .dz-remove {
          opacity: 1;
          position: absolute;
          right: 10px;
          bottom: 15px;
          border: none;
          &:hover {
            text-decoration: none;
          }
        }
        .dz-progress {
          right: 50px;
          left: auto;
        }
      }
    }
    .visible-custom-title /deep/ .dz-message {
      display: block;
    }
  }
</style>
