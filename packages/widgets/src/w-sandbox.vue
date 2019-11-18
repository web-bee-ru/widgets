<template>
  <div>
    <h1>Sandbox for <code>@web-bee-ru/widgets</code></h1>

    <h4>w-button</h4>
    <p>
      <w-button>primary (default)</w-button>
      <w-button variation="secondary">secondary</w-button>
      <w-button variation="success">success</w-button>
      <w-button variation="warning">warning</w-button>
      <w-button variation="danger">danger</w-button>
    </p>
    <p>
      <w-button variation="outline-primary">outline-primary</w-button>
      <w-button variation="outline-secondary">outline-secondary</w-button>
      <w-button variation="outline-success">outline-success</w-button>
      <w-button variation="outline-warning">outline-warning</w-button>
      <w-button variation="outline-danger">outline-danger</w-button>
    </p>

    <h4>w-input</h4>
    <w-input v-model="value" placeholder="w-input" />
    <hr>
    <w-form-input label="Label" v-model="value" placeholder="w-form-input" />

    <h4>w-checkbox</h4>
    <w-checkbox v-model="checkedBool">Single checkbox</w-checkbox>
    <hr>
    <w-form-group label="Multiple checkboxes">
      <w-checkbox v-for="option in options" :key="`a/${option.id}`" v-model="checkedList" :value="option.id">{{ option.name }}</w-checkbox>
    </w-form-group>

    <h4>w-popover</h4>
    <w-form-group>
      <w-button :id="$id('popover-target')" @click="popoverShown = true">Open popover</w-button>
      <w-popover v-if="popoverShown" :target="`#${$id('popover-target')}`" @close="popoverShown = false">
        <div>Popover content</div>
      </w-popover>
    </w-form-group>

    <h4>w-calendar</h4>
    <w-form-group>
      <w-calendar v-model="calendar" />
      <pre>{{ { calendar } }}</pre>
    </w-form-group>

    <h4>w-date-calendar</h4>
    <w-date-calendar/>
    <h4>w-time-calendar</h4>
    <w-time-calendar/>
    <h4>w-daterange-calendar</h4>

    <h4>w-date</h4>
    <w-time-input/>
    <w-time-input/>

    <h4>w-daterange</h4>
    <h4>w-form-date</h4>

    <recycle-scroller
      style="height: 300px"
      :items="items"
      :item-size="32"
      key-field="id"
      v-slot="{ item }"
      >
      <div class="user">
        {{ item.name }}
      </div>
    </recycle-scroller>
  </div>
</template>

<script>
  import mx from './mixin';
  import { RecycleScroller } from 'vue-virtual-scroller';
  import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

  export default {
    mixins: [mx],
    components: { RecycleScroller },
    data() {
      let items = [];
      for (let i = 0; i < 10000; i++) {
        items.push({ id: i, name: `#${i}` });
      }
      return {
        items,
        value: '',
        text: '',
        checkedBool: false,
        options: [{ id: 1, name: 'Banana' }, { id: 2, name: 'Apple' }],
        checkedList: [],
        popoverShown: false,
        calendar: null,
        date: null,
        time: null,
      };
    },
  };
</script>
