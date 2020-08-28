<template>
  <div class="container">
    <h1>Buttons</h1>
    <w-button>Click</w-button>
    <hr>
    <w-input v-model="value" :isInvalid="true" />
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
    <hr>
    <w-textarea v-model="value" :isInvalid="false" />
    <hr>
    <w-input v-model="intValue" type="number" step="3" />
    <hr>
    <w-form-textarea v-model="value" label="Label for w-form-textarea" placeholder="Write here something"></w-form-textarea>
    <hr>
    <w-form-textarea v-model="value" :maxLength="5" label="Label for w-form-textarea" :displayValueLength="true" placeholder="Write here something" :rows="5"></w-form-textarea>

    <hr>
    <w-button @click="prependToggled = !prependToggled">Toggle prepend</w-button>
    <w-form-input v-model="value">
      <template v-if="prependToggled" v-slot:addon-prepend>
        <w-button variation="outline-secondary" @click="showAlert('Clicked')">Click me!</w-button>
        <w-button variation="outline-secondary">Button</w-button>
      </template>
      <template v-slot:addon-append>
        <w-input-addon place="append">
          <w-button variation="outline-secondary">Button</w-button>
          <w-button variation="outline-secondary">Button</w-button>
        </w-input-addon>
      </template>
    </w-form-input>

    <hr>
    <w-button @click="prependToggled = !prependToggled">Toggle prepend</w-button>
    <w-form-textarea v-model="value" :v="$v.value" label="Label for w-form-textarea" :displayValueLength="true">
      <template v-if="prependToggled" v-slot:addon-prepend>
        <w-button variation="outline-secondary" @click="showAlert('Clicked')">Click me!</w-button>
        <w-button variation="outline-secondary">Button</w-button>
      </template>
      <template v-slot:addon-append>
        <w-input-addon place="append">
          <w-button variation="outline-secondary">Button</w-button>
          <w-button variation="outline-secondary">Button</w-button>
        </w-input-addon>
      </template>
    </w-form-textarea>

    <hr>
    <w-button @click="prependToggled = !prependToggled">Toggle prepend</w-button>
    <w-input v-model="value">
      <template v-if="prependToggled" v-slot:addon-prepend>
        <w-button variation="outline-secondary" @click="showAlert('Clicked')">Click me!</w-button>
        <w-button variation="outline-secondary">Button</w-button>
      </template>
      <template v-slot:addon-append>
        <w-input-addon place="append">
          <w-button variation="outline-secondary">Button</w-button>
          <w-button variation="outline-secondary">Button</w-button>
        </w-input-addon>
      </template>
    </w-input>

  </div>
</template>

<script>
  export default {
      data() {
      return {
        prependToggled: true,
        value: '',
        intValue: 0,
        text: '',
        checkedBool: false,
        options: [{ id: 1, name: 'Banana' }, { id: 2, name: 'Apple' }],
        checkedList: [],
      };
    },

    methods: {
      showAlert(data) {
        alert(data);
      }
    },

    validations() {
      return {
        value: {
          maxLength: global.VuelidateValidators.maxLength(80),
        },
      };
    },
  };
</script>
