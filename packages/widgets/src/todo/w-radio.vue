<template>
  <label class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" v-model="innerModel" :value="value" v-bind="$attrs">
    <span class="custom-control-label">{{ label }}</span>
  </label>
</template>

<script>
  export default {

    model: {
      prop: 'checked',
      event: 'change',
    },

    props: {
      label: { type: String, default: null },

      checked: { },
      value: { },
    },

    data() {
      return {
        innerModel: this.checked,
      };
    },

    watch: {
      checked() {
        if (this.innerModel !== this.checked) {
          this.innerModel = this.checked;
        }
      },
      innerModel() {
        if (this.innerModel !== this.checked) {
          this.$emit('change', this.innerModel);
        }
      },
    },

  };
</script>
