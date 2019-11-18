<!--
@FIXME: Есть известный баг: когда происходит hot-reload, если при этом был открыт поповер, то будут проблемы.
-->

<template>
  <div class="w-popover-placeholder" v-on-clickaway="away" />
</template>

<script>
  import Popper from 'popper.js';
  import { mixin as clickaway } from 'vue-clickaway';

  export default {

    mixins: [clickaway],

    props: {
      title: { type: String, default: null },
      target: { type: String, required: true },
    },

    methods: {
      away(ev) {
        const path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);

        const targetEl = this.targetEl;
        const clickedTarget = path ? path.indexOf(targetEl) !== -1 : targetEl.contains(ev.target);

        const bodyEl = this.childVm.$el;
        const clickedBody = path ? path.indexOf(bodyEl) !== -1 : bodyEl.contains(ev.target);

        const keepOpen = clickedTarget || clickedBody;
        if (!keepOpen) {
          this.$emit('close');
        }
      },
    },

    mounted() {
      const Vue = this.$parent.constructor;
      const parentVm = this;

      // @NOTE: Целевой элемент, относительно которого будет позицинироваться поповер
      this.targetEl = document.querySelector(`${this.target}`);

      // @NOTE: Создаем содержимое поповера
      this.childVm = new Vue({
        el: this.childEl,
        parent: parentVm,
        render(h) {
          const children = [
            parentVm.title ? h('div', { class: 'popover-header' }, parentVm.title) : null,
            h('div', { class: 'popover-body' }, parentVm.$slots.default),
          ].filter(child => child != null);
          return h('div', { class: 'popover' }, children);
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
            boundariesElement: 'window',
          },
        },
      });
    },

    updated() {
      if (this.childVm) {
        this.childVm.$forceUpdate();
      }
    },

    beforeDestroy() {
      if (this.popper) {
        this.popper.destroy();
        this.popper = null;
      }
      if (this.childVm) {
        document.querySelector('body').removeChild(this.childVm.$el);
        this.childVm.$destroy();
        this.childVm = null;
      }
    },

  };
</script>

<style>
  .w-popover-placeholder {
    display: none;
  }
  .popover {
    max-width: none;
  }
</style>
