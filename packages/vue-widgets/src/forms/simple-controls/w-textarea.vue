<template>
  <div class="input-group">
    <w-input-addon place="prepend" v-if="shouldShowPrependAddon">
      <slot name="addon-prepend"></slot>
    </w-input-addon>
    <textarea class="form-control" :class="{ 'is-invalid': isInvalid }" v-bind="$attrs" :value="value" @input="$emit('input', $event.target.value)" />
    <w-input-addon place="append" v-if="shouldShowAppendAddon">
      <slot name="addon-append"></slot>
    </w-input-addon>
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

    methods: {
      shouldShowPrependAddon() {
        return this.$slots['addon-prepend'] || this.$scopedSlots['addon-prepend'];
      },
      shouldShowAppendAddon() {
        return this.$slots['addon-append'] || this.$scopedSlots['addon-append'];
      },
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
