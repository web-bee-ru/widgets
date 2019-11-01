<template>
  <div class="container">
    <h1>Buttons</h1>
    <w-button>Click</w-button>
    <hr>
    <w-input v-model="value" />
    <hr>
    <w-form-input label="Value" v-model="value" />
    <hr>
    <w-checkbox v-model="checkedBool">Hello</w-checkbox>
    <hr>
    <w-form-checkbox v-model="checkedBool" text="Checked">Hello</w-form-checkbox>
    <hr>
    <w-form-group label="Multiple checkboxes">
      <w-checkbox v-for="option in options" :key="`a/${option.id}`" v-model="checkedList" :value="option.id">{{ option.name }}</w-checkbox>
    </w-form-group>
    <hr>
    <w-form-checkbox v-for="option in options" :key="`b/${option.id}`" v-model="checkedList" :value="option.id">{{ option.name }}</w-form-checkbox>
  </div>
</template>

<script>
  export default {
      data() {
      return {
        value: '',
        text: '',
        checkedBool: false,
        options: [{ id: 1, name: 'Banana' }, { id: 2, name: 'Apple' }],
        checkedList: [],
      };
    },
  };
</script>
