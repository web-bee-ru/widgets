<template>
  <div class="w-popover-placeholder" v-on-clickaway="away">
  </div>
</template>

<script>
  import Popper from 'popper.js';
  import { mixin as clickaway } from 'vue-clickaway';

  export default {

    mixins: [clickaway],

    props: {
      title: { type: String, default: null },
      targetId: { type: String, required: true },
      addClass: { type: String, default: '' },
    },

    methods: {
      away(ev) {
        let path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);

        let targetEl = this.targetEl;
        let clickedTarget = path ? path.indexOf(targetEl) !== -1 : targetEl.contains(ev.target);

        let bodyEl = this.childVm.$el;
        let clickedBody = path ? path.indexOf(bodyEl) !== -1 : bodyEl.contains(ev.target);

        let keepOpen = clickedTarget || clickedBody;
        if (!keepOpen) {
          this.$emit('close');
        }
      },
    },

    mounted() {
      let parentVm = this;

      // @NOTE: Целевой элемент, относительно которого будет позицинироваться поповер
      this.targetEl = document.querySelector('#' + this.targetId);

      if (!this.targetEl) {
        this.$emit('close');
        return;
      }

      // @NOTE: Создаем содержимое поповера
      this.childVm = new Vue({
        parent: parentVm,
        render(h) {
          return h('div', { class: `popover ${parentVm.addClass}` }, _.compact([
            parentVm.title ? h('div', { class: 'popover-header' }, parentVm.title) : null,
            h('div', { class: 'popover-body p-0 btn-menu' }, parentVm.$slots.default),
          ]));
        },
      });

      // @NOTE: Создаем DOM элемент поповера
      this.childVm.$mount();

      // @NOTE: Прикрепляем DOM элемент к дереву
      document.querySelector('body').appendChild(this.childVm.$el);

      // @NOTE: Привязываем поповер к целевому элементу
      this.popper = new Popper(this.targetEl, this.childVm.$el, {
        placement: 'bottom',
        modifiers: {
          computeStyle: {
            // @REFERENCE: https://github.com/twbs/bootstrap/issues/23590
            gpuAcceleration: !(window.devicePixelRatio < 1.5 && /Win/.test(navigator.platform)),
          },
          preventOverflow: {
            boundariesElement: 'window',// без кавычек не работает
          },
        },
      });
    },

    updated() {
      this.childVm.$forceUpdate();
    },

    beforeDestroy() {
      if (!this.popper) {
        return;
      }
      this.popper.destroy();
      document.querySelector('body').removeChild(this.childVm.$el);
      this.childVm.$destroy();
    },
  };
</script>

<style lang="scss" scoped>
  .w-popover-placeholder {
    display: none;
  }
</style>
