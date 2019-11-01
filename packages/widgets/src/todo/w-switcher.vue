<template>
  <div class="switcher">
    <label class="custom-switch"> {{ label }}
      <input
      class="custom-switch-input"
      type="checkbox"
      :checked="value"
      :name="name"
      :value="value"
      @input="$emit('input', $event)"
      :disabled="disabled"
      >
      <span class="custom-switch-indicator " :class="size"></span>
    </label>
  </div>
</template>

<script>
  export default {

    props: {
      label: {
        type: String,
        required: true,
      },
      value: {
        type: Boolean,
        required: true,
      },
      name: {
        type: String,
        default: '',
      },
      size: { /*  Можно указать маленький размер switch'a передав size="mini"  */
        type: String,
        delault: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .switcher {
    display: flex;
    span {
      margin-left: 5px;
    }
  }
</style>
