<template>
  <div class="w-query-builder">
    <w-qb-group :value="value" :fnMakeRule="fnMakeRule" root>
      <template slot-scope="scp">
        <slot v-bind="scp" />
      </template>
    </w-qb-group>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
        required: true,
      },
      fnMakeRule: {
        type: Function,
        default() { return () => {}; }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .w-query-builder {
  }
</style>
