<template>
  <w-form-group :label="label" :v="v">
    <template slot-scope="params">
      <w-date :id="params.id" class="form-control" :class="{ 'is-invalid': params.hasError }" v-bind="$attrs" :value="value" @input="$emit('input', $event)" @blur.native="v && v.$touch()" />
    </template>
    <slot name="after" slot="after"></slot>
  </w-form-group>
</template>

<script>
  export default {
    props: {
      label: { type: String, default: null },
      // eslint-disable-next-line vue/require-prop-types
      value: { required: true },
      v: { type: Object, default: null },
    },
  };
</script>
