<template>
  <w-form-group :label="label" :v="v" @click-label="openSelect()">
    <template slot-scope="params">
      <w-select :id="params.id" :is-invalid="params.hasError" v-bind="$attrs" :value="value" @input="$emit('input', $event)" @blur="v && v.$touch()" />
    </template>
    <slot name="after" slot="after"></slot>
  </w-form-group>
</template>

<script>
  import WSelect from './w-select';
  import WFormGroup from '../forms/w-form-group';
  export default {
    components: { WSelect, WFormGroup },
    props: {
      label: { type: String, default: null },
      // eslint-disable-next-line vue/require-prop-types
      value: { required: true },
      v: { type: Object, default: null },
    },
    methods: {
      openSelect() {
        this.$el.focus();
      },
    },
  };
</script>
