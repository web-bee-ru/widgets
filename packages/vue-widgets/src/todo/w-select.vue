<template>
  <multiselect
    class="w-select" :class="{ 'is-invalid': isInvalid }"
    :id="id"
    :multiple="multiple"
    :options="options"
    :label="nameField"
    :track-by="idField"

    :value="mappedValue"
    @input="mapInput($event)"

    v-bind="attrs"
    v-on="listeners"
    >
    <!-- @NOTE: Прокидываю слоты: https://stackoverflow.com/questions/50891858/vue-how-to-pass-down-slots-inside-wrapper-component -->
    <template v-for="(x, slot) of $scopedSlots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
    <template v-slot:noOptions>
      Нет данных
    </template>
    <template v-slot:noResult>
      Не найдено
    </template>
  </multiselect>
</template>

<script>
  import Multiselect from 'vue-multiselect';

  export default {
    components: { Multiselect },
    props: {
      isInvalid: { type: Boolean, default: false },
      idField: { type: String, default: 'id' },
      nameField: { type: String, default: 'name' },

      // @NOTE: Все пропы: https://vue-multiselect.js.org/
      id: { type: String, default: null },
      multiple: { type: Boolean, default: false },
      options: { type: Array, required: true },
      // eslint-disable-next-line vue/require-prop-types
      value: { required: true },
    },
    data() {
      return {
        defaultAttrs: {
          placeholder: '',
          selectedLabel: 'Выбран',
          selectLabel: 'Enter - Выбрать',
          selectGroupLabel: 'Enter - Выбрать',
          deselectLabel: 'Enter - Снять',
          deselectGroupLabel: 'Enter - Снять',
        },
      };
    },
    computed: {
      mappedValue() {
        if (this.multiple) {
          return _.compact(_.map(this.value, item => _.find(this.options, { [this.idField]: item })));
        }
        else {
          return _.find(this.options, { [this.idField]: this.value });
        }
      },
      attrs() {
        return _.assign({}, this.defaultAttrs, _.omit(this.$attrs, ['label', 'track-by']));
      },
      listeners() {
        return _.omit(this.$listeners, 'input');
      },
    },
    methods: {
      mapInput($event) {
        if (this.multiple) {
          this.$emit('input', _.map($event, item => item[this.idField]));
        }
        else {
          this.$emit('input', $event == null ? null : $event[this.idField]);
        }
      },
    },
  };
</script>

<!--<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>-->

<!--<style scoped lang="scss">-->
<!--  .multiselect {-->
<!--    padding: 0;-->
<!--    font-size: inherit;-->

<!--    &.is-invalid {-->
<!--      /deep/ .multiselect__tags {-->
<!--        border-color: red;-->
<!--      }-->
<!--    }-->

<!--    /deep/ {-->
<!--      .multiselect__input, .multiselect__single {-->
<!--        font-size: inherit;-->
<!--      }-->
<!--      .multiselect__input {-->
<!--        margin: 3px 0 0;-->
<!--      }-->
<!--      .multiselect__placeholder {-->
<!--        margin: 0 5px;-->
<!--      }-->
<!--      .multiselect__tags {-->
<!--        border-color: #ddd;-->
<!--        border-radius: 0.1875rem;-->
<!--      }-->
<!--      .multiselect__tag {-->
<!--        background: #2F80ED;-->
<!--        vertical-align: middle;-->

<!--        .multiselect__tag-icon {-->
<!--          &:after {-->
<!--            color: #FFF;-->
<!--          }-->

<!--          &:hover {-->
<!--            background: #2f64ed;-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--      // highlight-->
<!--      .multiselect__option&#45;&#45;highlight {-->
<!--        background: #2F80ED;-->

<!--        &:after {-->
<!--          background: #2F80ED;-->
<!--        }-->
<!--      }-->
<!--      // selected-->
<!--      .multiselect__option&#45;&#45;selected {-->
<!--        // remove-->
<!--        &.multiselect__option&#45;&#45;highlight:after {-->
<!--          background: #2f64ed;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</style>-->
