<template>
  <textarea class="form-control" :class="{ 'is-invalid': isInvalid }" v-bind="$attrs" :value="value" @input="$emit('input', $event.target.value)" />
</template>

<script>
  export default {
    props: {
      isInvalid: { type: Boolean, default: false },
      value: { required: true },
    },
  };
</script>
