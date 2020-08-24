<template>
  <w-form-group :label="label" :v="v">
    <template v-slot:default="params">
      <div class="input-group">
        <w-input-addon place="prepend" v-if="shouldShowPrependAddon">
          <slot name="addon-prepend"></slot>
        </w-input-addon>
        <w-textarea v-bind="$attrs" :value="value" :maxlength="maxLength" @input="$emit('input', $event)" @blur="v && v.$touch()"></w-textarea>
        <w-input-addon place="append" v-if="shouldShowAppendAddon">
          <slot name="addon-append"></slot>
        </w-input-addon>
      </div>
      <label v-if="displayValueLength" :for="params.id">{{ value.length + "/" + maxLengthLabel }}</label>
    </template>
    <template v-slot:after>
      <slot name="after"></slot>
    </template>
  </w-form-group>
</template>

<script>
  import WFormGroup from './../w-form-group';
  import WTextarea from '../simple-controls/w-textarea';
  export default {
    components: { WFormGroup, WTextarea },
    props: {
      label: { type: String, default: null },
      // eslint-disable-next-line vue/require-prop-types
      value: { required: true },
      v: { type: Object, default: null },
      displayValueLength: { type: Boolean, default: false },
      maxLength: { type: Number, default: 3000 },
    },
    computed: {
      maxLengthLabel() {
        if (this.v) {
          return this.v.$params.maxLength ? this.v.$params.maxLength.max : this.maxLength;
        }
        else {
          return this.maxLength;
        }
      },
    },
    methods: {
      shouldShowPrependAddon() {
        return this.$slots['addon-prepend'] || this.$scopedSlots['addon-prepend'];
      },
      shouldShowAppendAddon() {
        return this.$slots['addon-append'] || this.$scopedSlots['addon-append'];
      },
    },
  };
</script>
