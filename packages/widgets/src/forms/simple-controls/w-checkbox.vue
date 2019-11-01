<template>
  <div class="form-check">
    <input :key="counterKey" type="checkbox" :id="id" class="form-check-input" :value="value" v-bind="$attrs" v-model="innerModel" :indeterminate.prop="indeterminate">
    <label v-if="$slots.default" class="form-check-label" :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script>
  import mx from './../../mixin';
  export default {
    mixins: [mx],
    model: {
      prop: 'model',
      event: 'input',
    },
    props: {
      // eslint-disable-next-line vue/require-prop-types
      model: { required: true },
      indeterminate: { type: Boolean, default: false },
      // eslint-disable-next-line vue/require-prop-types
      value: { default: null },
      inputId: { type: String, default: null },
    },
    data() {
      return {
        innerModel: this.model,
        counterKey: 0,
      };
    },
    computed: {
      id() {
        return this.inputId || this.$id('checkbox');
      },
    },
    watch: {
      model() {
        this.innerModel = this.model;
      },
      async innerModel() {
        if (this.innerModel !== this.model) {
          this.$emit('input', this.innerModel);
          this.counterKey++;
          // @NOTE: Сбрасываем значение, т.к. не хотим сами им управлять
          await this.$nextTick();
          this.innerModel = this.model;
        }
      },
    },
  };
</script>
