<template>
  <div :class="`input-group-${place}`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      place: { Type: String, required: false },
    },
  };
</script>
