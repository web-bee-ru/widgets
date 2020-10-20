<template>
  <w-form-group :label="label" :v="v">
    <template v-slot:default="params">
      <w-input :id="params.id" :is-invalid="params.hasError" v-bind="$attrs" :value="value" @input="$emit('input', $event)" @blur="v && v.$touch()">
        <template v-slot:addon-prepend>
          <slot name="addon-prepend"></slot>
        </template>
        <template v-slot:addon-append>
          <slot name="addon-append"></slot>
        </template>
      </w-input>
    </template>
    <template v-slot:after>
      <slot name="after"></slot>
    </template>
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
