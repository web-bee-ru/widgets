<template>
  <w-form-group :label="label" :v="v">
    <slot slot="addon-prepend" name="addon-prepend"></slot>
    <template slot-scope="params">
      <w-input :id="params.id" :is-invalid="params.hasError" v-bind="$attrs" :value="value" @input="$emit('input', $event)" @blur="v && v.$touch()" />
    </template>
    <slot slot="addon-append" name="addon-append"></slot>
    <slot name="after" slot="after"></slot>
  </w-form-group>
</template>

<script>
  import WFormGroup from './../w-form-group';
  import WInput from './../simple-controls/w-input';
  export default {
    components: { WFormGroup, WInput },
    props: {
      label: { type: String, default: null },
      // eslint-disable-next-line vue/require-prop-types
      value: { required: true },
      v: { type: Object, default: null },
    },
  };
</script>
