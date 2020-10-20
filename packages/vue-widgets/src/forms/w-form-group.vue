<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{ label }}<span v-if="labelRequired" class="text-danger">&nbsp;*</span></label>
    <slot :id="id" :hasError="hasError" />
    <template v-if="v && v.$pending">
      <div class="help-block text-warning">Идет проверка</div>
    </template>
    <template v-else-if="v && v.$error">
      <!-- @TODO: Extract errors -->
      <div class="form-text text-danger">Значение некорректно</div>
    </template>
    <slot name="after"></slot>
  </div>
</template>

<script>
  import mx from './../mixin';
  export default {
    mixins: [mx],
    props: {
      label: { type: String, default: null },
      v: { type: Object, default: null },
    },

    computed: {
      hasError() {
        return this.v && this.v.$error;
      },
      labelRequired() {
        return this.v && this.v.$params.required != null;
      },
      id() {
        return this.$id('field');
      },
    },
  };
</script>
