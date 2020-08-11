<template>
  <component :is="noPortal ? 'div' : 'portal'" :to="modalName">
    <div class="modal-backdrop show"></div>
    <div class="w-modal modal show" :class="[positionClass, additionalClass]" tabindex="-1" role="dialog">
      <div class="modal-dialog" :class="[ modalSize, position == 'center'? 'border-r-15' : '']" role="document">
        <div class="modal-content bg-light-grey">

          <!--Скрываем его так как он нам не нужен если надо показать уберите класс hide-->
          <div class="modal-header align-items-center" :class="{'header-reverse': reverseHeader}">
            <span v-if="!closeButton"></span>
            <w-button v-if="closeButton" type="button" class="btn-none mr-4" @click.prevent="$emit('close')">
              <c-icon-close-btn />
            </w-button>
            <h5 class="modal-title font-w-600">{{ title }}</h5>
            <slot name="header-actions"/>
          </div>

          <div class="modal-body" v-if="$slots.default">
            <slot></slot>
          </div>

          <div class="modal-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>

        </div>
      </div>
    </div>
  </component>
</template>

<script>
  export default {
    props: {
      additionalClass: { type: String, default: '' },
      title: { type: String, default: null },
      position: { type: String, default: 'center' }, // @DOC: Допустимные значения: left, center, right
      modalSize: { type: String, default: '' }, // @DOC: класс для размера модальки
      noPortal: { type: Boolean, default: false },
      closeButton: { type: Boolean, default: true },
    },
    computed: {
      positionClass() {
        switch (this.position) {
          case 'left':
            return 'left';
          case 'right':
            return 'right';
          case 'center': // @NOTE: По умолчанию и так будет по центру
          default:
            return null;
        }
      },
      modalName() {
        return `w-modal-${this._uid}`;
      },
      reverseHeader() {
        return this.position == 'center';
      },
    },
    created() {
      this.$store.commit('layout/addModal', this.modalName);
    },
    destroyed() {
      this.$store.commit('layout/removeModal', this.modalName);
    },
  };
</script>

<style lang="scss" scoped>
  .w-modal {
    display: block;
  }
  // @SECTION: Положение, размеры, скролл, и подобное

  .modal-dialog {
    box-shadow: 0 0 15px #8ACDFD;
    max-width: unset; // @NOTE: Отключаем потому что в шаблоне указана max-width: 500px не работает в IE
    width: min-content; // @NOTE: Заставляем модальку занимать как можно меньше места
  }
  .fixed-modal-width {
    width: 700px;
  }

  .modal-content {
    min-width: 500px; /* @TODO(ux): Responsive */
    max-height: 90vh; /* @TODO(ux): Responsive */
    max-width: 90vw; /* @TODO(ux): Responsive */
  }

  .modal.left, .modal.right {
    .modal-content {
      max-height: initial; // @NOTE: Боковая модалька не ограничена по высоте
    }
  }
  .custom-width-modal-lg {
    .modal-content.bg-light-grey {
      min-width: 1000px;
    }
  }
  .custom-width-modal-xl {
    .modal-content.bg-light-grey {
      min-width: 1500px;
    }
  }

  .modal-header, .modal-footer {
    flex-shrink: 0;
  }

  .modal-body {
    overflow-y: auto;
  }

  /* @NOTE: Делаем одинаковый z-index, чтобы можно было открывать несколько модалек */
  .modal-backdrop, .modal {
    z-index: 1060;
  }

  .modal.left, .modal.right {
    .modal-dialog {
      position: fixed;
      margin: auto;
      height: 100%;
      transform: translate3d(0%, 0, 0);
    }

    .modal-content {
      height: 100%;
    }
  }

  .modal.left .modal-dialog {
    left: 0;
  }

  .modal.right .modal-dialog {
    right: 0;
  }

  // @SECTION: Внешний вид

  .modal-content {
    border: none;
    border-radius: 0;
  }

  .modal-header {
    justify-content: flex-start;
    .close {
      margin: -1rem 0rem -1rem -1rem;
    }
  }

  .w-modal .modal-header.header-reverse {
    flex-direction: row-reverse;
    justify-content: space-between;
    /deep/ .btn {
      margin-right: 0 !important;
      margin-left: 15px;
    }
  }
</style>
