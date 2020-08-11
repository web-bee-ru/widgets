<!-- @DOC: Маска поверх содержимого слота -->

<template>
  <div class="w-mask-area">
    <template v-if="masked && text">{{ text }}</template>
    <template v-if="lazy ? !masked : true">
      <slot />
    </template>
    <transition name="fade">
      <div class="mask" v-if="masked"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      masked: { type: Boolean, default: false },
      text: { type: String, default: '' },
      lazy: { type: Boolean, default: false }, // "ленивая" - значит не рендерим слот, пока грузится.
    },
  };
</script>

<style lang="scss" scoped>
  .w-mask-area {
    position: relative;
  }

  .mask {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: rgba(127, 127, 127, 0.5);
    z-index: 2;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
