<template>
  <w-form-group
    v-bind="$attrs">
    <label class="font-w-600" v-if="label">{{ label }}</label>
    <w-radio
      v-for="(option, idx) in options" :key="idx"
      v-model="innerModel"
      :value="option[idField]"
      :label="option[nameField]"
      />
  </w-form-group>
</template>

<script>
  export default {
    props: {
      value: { },
      //
      options: { type: Array, required: true },
      idField: { type: String, default: 'id' },
      nameField: { type: String, default: 'name' },
      label: { type: String, default: '' },
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

<style lang="scss" scoped>
  .btn-blue.active {
    background-color: darken(#3A8EED, 15%) !important;
  }
</style>
