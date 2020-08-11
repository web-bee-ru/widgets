<template>
  <input :value="displayValue" ref="picker" v-bind="$attrs" @blur="blur">
</template>

<script>
  export default {

    props: {
      value: { required: true }, // eslint-disable-line vue/require-prop-types
      min: {}, // eslint-disable-line vue/require-prop-types, vue/require-default-prop
      max: {}, // eslint-disable-line vue/require-prop-types, vue/require-default-prop
      withTime: { type: Boolean, default: false },
      valueFormat: { type: String, default: null },
      displayFormat: { type: String, default: null },
      parentElSelector: { type: String, default: 'body' },
    },

    computed: {
      apparentValueFormat() {
        return this.valueFormat || (this.withTime ? 'YYYY-MM-DDTHH:mm:ssZ' : 'YYYY-MM-DD');
      },
      apparentDisplayFormat() {
        return this.displayFormat || (this.withTime ? 'DD.MM.YYYY HH:mm:ss' : 'DD.MM.YYYY');
      },
      shouldBeMounted() {
        return !this.$attrs.disabled && !this.$attrs.readonly;
      },
      displayValue() {
        // @NOTE: value -> display
        return this.value
          ? moment(this.value).format(this.apparentDisplayFormat)
          : '';
      },
    },

    methods: {
      blur(ev) {
        // @NOTE: display -> value
        const mvalue = moment(ev.target.value, this.apparentDisplayFormat);
        const value = mvalue.isValid() ? mvalue.format(this.apparentValueFormat) : null;
        if (!_.isEqual(this.value, value)) {
          this.$emit('input', value);
        }

        // @NOTE: Форсим текущее значение в инпуте, если настоящее значение не изменилось, но отображаемое расходится
        if (this.value === value && this.displayValue !== ev.target.value) {
          ev.target.value = this.displayValue;
        }
      },
      mountPicker() {
        const picker = $(this.$refs.picker)
          .daterangepicker({
            timePicker: this.withTime,
            minDate: this.min,
            maxDate: this.max,
            singleDatePicker: true,
            autoUpdateInput: false,
            parentEl: document.querySelector(this.parentElSelector),
            locale: {
              cancelLabel: 'Отмена',
              applyLabel: 'Применить',
            },
          }, mvalue => {
            // @NOTE: picker -> value
            const value = mvalue.format(this.apparentValueFormat);
            if (!_.isEqual(this.value, value)) {
              this.$emit('input', value);
            }
          })
          .data('daterangepicker');

        const unwatchValue = this.$watch('value', value => {
          // @NOTE: value -> picker
          let mvalue = moment(value);
          mvalue = mvalue.isValid() ? mvalue : moment();
          picker.setStartDate(mvalue);
          picker.setEndDate(mvalue);
        }, { immediate: true });

        const unwatchMin = this.$watch('min', min => {
          if (min != null) {
            picker.minDate = moment(min);
          }
          else {
            picker.minDate = null;
          }
        }, { immediate: true });

        const unwatchMax = this.$watch('max', max => {
          if (max != null) {
            picker.maxDate = moment(max);
          }
          else {
            picker.maxDate = null;
          }
        }, { immediate: true });

        return function() {
          unwatchValue();
          unwatchMin();
          unwatchMax();
          picker.remove();
        };
      },
    },

    mounted() {
      let unmountPicker;
      this.$watch('shouldBeMounted', (shouldBeMounted) => {
        if (unmountPicker) {
          unmountPicker();
        }
        if (shouldBeMounted) {
          unmountPicker = this.mountPicker();
        }
      }, { immediate: true });
    },
  };
</script>

<style lang="scss">
  .daterangepicker {
    // @NOTE: Форсим выпадашки поверх модалек
    z-index: 2000;
  }
</style>
