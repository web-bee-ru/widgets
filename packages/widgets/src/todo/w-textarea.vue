<template>
  <w-form-group class="w-textarea" v-bind="$attrs" :validator="validator">
    <div class="my-class">
      <label v-if="label" class="font-w-600" :for="$id('textarea')">{{ label }}</label>
      <label v-if="displayLengthOfValue" :for="$id('textarea')">{{ 0+lengthOfvalue+"/"+maxLengthLable }}</label>
    </div>
    <textarea class="form-control" rows="5" :id="$id('textarea')" v-model="innerModel"></textarea>
  </w-form-group>
</template>

<script>
  export default {
    props: {
      value: { },
      label: { type: String, default: null },
      displayLengthOfValue: { type: Boolean, default: false },
      lengthOfvalue: { type: Number, default: 0 },
      validator: { type: Object, default: null },
      maxLength: { type: Number, default: 3000 },
    },

    data() {
      return {
        innerModel: this.value,
      };
    },

    computed: {
      hasError() {
        return _.get(this.validator, '$error') || false;
      },
      maxLengthLable() {
        if (this.validator) {
          return this.validator.$params.maxLength ? this.validator.$params.maxLength.max : this.maxLength;
        }
        else {
          return this.maxLength;
        }
      },
    },

    watch: {
      value() {
        if (this.innerModel !== this.value) {
          this.innerModel = this.value;
        }
      },
      innerModel() {
        if (this.innerModel !== this.value) {
          this.$emit('input', this.innerModel);
        }
      },
    },
  };
</script>
<style lang="scss" scoped>
  .my-class{
    display: flex;
    justify-content: space-between;
  }
</style>
