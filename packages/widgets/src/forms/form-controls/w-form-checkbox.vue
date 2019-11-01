<template>
  <w-form-group :label="label" :v="v">
    <template slot-scope="params">
      <w-checkbox :input-id="params.id" :class="{ 'is-invalid': true || params.hasError }" v-bind="$attrs" :model="model" @input="$emit('input', $event)" @change.native="v && v.$touch()">
        <slot></slot>
      </w-checkbox>
    </template>
    <slot name="after" slot="after"></slot>
  </w-form-group>
</template>

<script>
  import WFormGroup from './../w-form-group';
  import WCheckbox from './../simple-controls/w-checkbox';
  export default {
    components: { WFormGroup, WCheckbox },
    model: {
      prop: 'model',
      event: 'input',
    },
    props: {
      label: { type: String, default: null },
      // eslint-disable-next-line vue/require-prop-types
      model: { required: true },
      v: { type: Object, default: null },
    },
  };
</script>
