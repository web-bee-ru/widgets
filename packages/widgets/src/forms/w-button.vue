<template>
  <button
    :type="type"
    class="btn" :class="classes"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
  import { classesWithPrefix } from '../utils';

  export default {
    props: {
      variation: { type: [Array, String, Object], default: 'primary' },
      type: { type: String, default: 'button' },
    },
    computed: {
      classes() {
        return classesWithPrefix('btn-', this.variation);
      },
    },
  };
</script>
