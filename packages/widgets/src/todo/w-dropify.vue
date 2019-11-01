<template>
  <div>
    <label class="font-w-600" v-if="label">{{ label }}</label>
    <input @input="uploadFile($event)" type="file" class="dropify" :data-default-file="value ? `/files/${value}` : ''"/>
    <button
      class="btn-blue px-2 scanDoc"
      :class="[isLoading ? 'btn-loading' : null]"
      v-if="value"
      @click="getFileLink">Скачать файл</button>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: null,
      },
      fileName: {
        type: String,
        default: null,
      },
      label: {
        type: String,
        default: null
      },
    },
    data() {
      return {
        isLoading: false,
      }
    },
    methods: {
      async uploadFile(event) {
        try {
          var formData = new FormData();
          formData.append("file", event.target.files[0]);
          let resp = await this.$axios.$post('/files/whole', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          this.$emit('input', resp);
        } catch (err) {
          this.$notify('Ошибка', `${_.get(err, 'response.data.error', 'Необработанная ошибка')}`, 'error');
        }
      },
      async getFileLink() {
        if (!this.value) {
          return;
        }
        try {
          this.isLoading = true; //старт Загрузки
          let token = await this.$axios.$post(`/files/${this.value}/gen`);
          this.isLoading = false;
          window.open(`/api/files/download/${token}`);
        } catch (err) {
          this.$notify('Ошибка', `${_.get(err, 'response.data.error', 'Не удалось загрузить файл')}`, 'error');
        }
      },
    },
    async mounted() {
      var dropify = $('.dropify').dropify({
        messages: {
          default: 'Добавить файл',
          replace: 'Нажмите, чтобы заменить файл',
          remove: 'Удалить',
          error: 'Упс, что-то пошло не так'
        }
      });
      dropify.on('dropify.beforeClear', (event, element) => {
        this.$emit('input', null);
      });

    },
  }
</script>

<style lang='scss' scoped>

</style>
