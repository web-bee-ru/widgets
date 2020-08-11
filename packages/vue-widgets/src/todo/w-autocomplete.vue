<template>
  <w-form-group
    class="w-autocomplete"
    v-bind="$attrs"
    >
    <label class="font-w-600" v-if="label" :for="$id('autocomplete')">{{ label }}</label>
    <v-combobox
      :value="innerModel"
      :searchInput="si"
      @input="si = $event; innerModel = $event"
      @blur="innerModel = si; $emit('blur')"
      @update:searchInput="si = $event"
      @focus="$emit('focus')"
      solo
      hide-details
      hide-selected
      hide-no-data
      append-icon=""
      :type="type"
      :disabled="readonly"
      :id="$id('autocomplete')"
      class="form-control"
      :items="items"
      :menu-props="menuProps"
      @hook:mounted="onComboMounted()"
      />
  </w-form-group>
</template>

<script>
  export default {
    props: {
      // eslint-disable-next-line vue/require-prop-types,vue/require-default-prop
      value: { },
      type: { type: String, default: null },
      step: { type: String, default: null }, // for number-inputs
      label: { type: String, default: null },
      readonly: { type: Boolean, default: false },
      items: { type: Array, default: () => [] },
    },

    data() {
      return {
        si: null,
        innerModel: this.value,
        menuProps: {
          // closeOnClick: true,
          // closeOnContentClick: true,
          // openOnClick: true,
          maxHeight: 300,
        },
      };
    },
    watch: {
      value() {
        let newInnerModel = _.toString(this.value);
        if (this.innerModel !== newInnerModel) {
          this.innerModel = newInnerModel;
        }
      },
      innerModel() {
        let newValue;
        if (this.type === 'number') {
          newValue = this.innerModel ? _.toNumber(this.innerModel) : null;
        }
        else {
          newValue = this.innerModel;
        }
        if (this.value !== newValue) {
          this.$emit('input', newValue);
        }
      },
      si() {
        this.innerModel = this.si;
      },
    },

    methods: {
      onComboMounted() {
        if (this.type !== 'number') {
          return;
        }
        if (!this.step) {
          return;
        }
        let input = this.$el.querySelector("[id^='vue-autocomplete']");
        if (!input) {
          console.warn('target input not found!');
        }
        input.step = parseFloat(this.step);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .w-autocomplete {
    /deep/ {
      .v-text-field.v-text-field--solo .v-input__control {
        min-height: auto;
      }
      .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot {
        box-shadow: none;
      }
    }
  }
</style>
