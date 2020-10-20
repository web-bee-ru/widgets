<template>
  <div class="input-group">
    <slot name="addon-prepend"></slot>
    <textarea class="form-control" :class="{ 'is-invalid': isInvalid }" v-bind="$attrs" :value="value" @input="$emit('input', $event.target.value)" @focus="$emit('focus')" @blur="$emit('blur')"/>
    <slot name="addon-append"></slot>
  </div>
</template>

<script>
  export default {
    props: {
      isInvalid: { type: Boolean, default: false },
      value: { required: true },
    },

    data() {
      return {
        innerModel: this.value,
      };
    },

    watch: {
      value() {
        if (this.innerModel !== this.value) {
          this.innerModel = this.value;
        }
      },
      innerModel() {
        if (this.innerModel !== this.value) {
          this.$emit('input', this.innerModel);
        }
      },
    },
  };
</script>
