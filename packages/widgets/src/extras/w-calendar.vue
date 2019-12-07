<template>
  <div class="k-widget k-calendar k-calendar-infinite">
    <div kendo-calendar-viewlist class="k-calendar-view" :class="dateView === 'month' ? 'k-calendar-monthview' : 'k-calendar-yearview'">
      <div kendo-calendar-header class="k-calendar-header">
        <button type="button" class="k-button k-flat k-title" :disabled="!canZoomOut()" :class="{ 'k-state-disabled': !canZoomOut() }" @click="zoomOut()">{{ dateViewPage }}</button>
        <span>
          <span class="k-link k-today" @click="setTodayFromDateView()">TODAY</span>
          &nbsp;
          <span class="k-link" @click="clear()">CLEAR</span>
        </span>
      </div>
      <table v-if="dateViewOptions.displayColumns && dateViewOptions.columns.length > 0" class="k-calendar-weekdays" style="table-layout: auto;">
        <thead>
          <tr>
            <th v-for="(header, headerIdx) in dateViewOptions.columns" :style="{ width: `${100.0 / dateViewOptions.columns.length}%` }" :key="headerIdx">
              {{ header }}
            </th>
          </tr>
        </thead>
      </table>
      <div class="k-content k-scrollable">
        <table style="transform: translateY(0px);">
          <tbody v-for="(group, groupIdx) in dateViewItemGroups" :key="groupIdx">
<!--              <tr>-->
<!--                &lt;!&ndash; @WIP: Human text &ndash;&gt;-->
<!--                <th :colspan="dateViewOptions.columns.length">{{ group.dateViewPage }}</th>-->
<!--              </tr>-->
            <tr v-for="(row, rowIdx) in group.rows" :key="rowIdx">
              <!-- @WIP: Human title -->
              <td v-for="(cell, cellIdx) in row" :key="cellIdx"
                :class="{
                  'k-state-selected': cell.civilDate === innerValueCivilDate,
                  'k-today': cell.civilDate === nowCivilDate,
                  'k-empty': !cell.physical,
                  'k-weekend': cell.weekend,
                }"
                :title="cell.civilDate"
                >
                <template v-if="cell.physical">
                  <span class="k-link" @click="selectFromDateView(cell.civilDate)">{{ cell.name }}</span>
                </template>
                <template v-else>
                  &nbsp;
                </template>
              </td>
            </tr>
<!--              <tr>-->
<!--                <td v-for="idx in dateViewOptions.columns.length" class="k-empty" :key="idx"></td>-->
<!--              </tr>-->
          </tbody>
        </table>
        <div class="k-scrollable-placeholder" style="height: 0px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import dayjs from 'dayjs';
  if (typeof window != 'undefined') {
    window.dayjs = dayjs; // @DEBUG
  }

  const resolutionOptionsLut = {
    century: {
      baseValueFormat: 'YYYY',
      baseDateFormat: 'YYYY',
      interval: [100, 'years'],
      dateViews: [],
      timeViews: [],
    },
    decade: {
      baseValueFormat: 'YYYY',
      baseDateFormat: 'YYYY',
      interval: [10, 'years'],
      dateViews: ['century'],
      timeViews: [],
    },
    year: {
      baseValueFormat: 'YYYY',
      baseDateFormat: 'YYYY',
      interval: [1, 'year'],
      dateViews: ['century', 'decade'],
      timeViews: [],
    },
    month: {
      baseValueFormat: 'YYYY-MM',
      baseDateFormat: 'YYYY-MM',
      interval: [1, 'month'],
      dateViews: ['century', 'decade', 'year'],
      timeViews: [],
    },
    date: {
      baseValueFormat: 'YYYY-MM-DD',
      baseDateFormat: 'YYYY-MM-DD',
      interval: [1, 'day'],
      dateViews: ['century', 'decade', 'year', 'month'],
      timeViews: [],
    },
    hour: {
      baseValueFormat: 'YYYY-MM-DDThh',
      baseDateFormat: 'YYYY-MM-DD',
      interval: [1, 'hour'],
      dateViews: ['century', 'decade', 'year', 'month'],
      timeViews: ['hour'],
    },
    minute: {
      baseValueFormat: 'YYYY-MM-DDThh:mm',
      baseDateFormat: 'YYYY-MM-DD',
      interval: [1, 'minute'],
      dateViews: ['century', 'decade', 'year', 'month'],
      timeViews: ['hour', 'minute'],
    },
    second: {
      baseValueFormat: 'YYYY-MM-DDThh:mm:ss',
      baseDateFormat: 'YYYY-MM-DD',
      interval: [1, 'second'],
      dateViews: ['century', 'decade', 'year', 'month'],
      timeViews: ['hour', 'minute', 'second'],
    },
  };

  const resolutions = Object.keys(resolutionOptionsLut);
  const defaultResolution = 'date';

  function getActualResolution(resolution) {
    if (resolution == null || resolutions.indexOf(resolution) === -1) return defaultResolution;
    return resolution;
  }

  function getActualValueFormat(resolution, civil) {
    const resolutionOptions = resolutionOptionsLut[resolution];
    return resolutionOptions.baseValueFormat + (civil ? '' : 'Z');
  }

  //

  const dateViewOptionsLut = {
    century: {
      resolution: resolutionOptionsLut.decade,
      cellDisplayFormat: 'YYYY',
      displayColumns: false,
      columns: ['50n', '50n+10', '50n+20', '50n+30', '50n+40'],
      instantToPage: instant => String(Math.floor(instant.year() / 100)),
      pageToStartInstant: page => dayjs(page + '00').startOf('year'),
      pageToEndInstant: page => dayjs(page + '99').endOf('year'),
      instantToColumnIdx: instant => Math.floor(instant.year() / 10 % 5), // @NOTE: [...] -> [0..4]
    },
    decade: {
      resolution: resolutionOptionsLut.year,
      cellDisplayFormat: 'YYYY',
      displayColumns: false,
      columns: ['5n', '5n+1', '5n+2', '5n+3', '5n+4'],
      instantToPage: instant => String(Math.floor(instant.year() / 10)),
      pageToStartInstant: page => dayjs(page + '0').startOf('year'),
      pageToEndInstant: page => dayjs(page + '9').endOf('year'),
      instantToColumnIdx: instant => Math.floor(instant.year() % 5), // @NOTE: [...] -> [0..4]
    },
    year: {
      resolution: resolutionOptionsLut.month,
      cellDisplayFormat: 'MMM',
      displayColumns: false,
      columns: ['5n', '5n+1', '5n+2', '5n+3', '5n+4'], // @WIP: Make 4 instead of 5?
      instantToPage: instant => String(instant.year()),
      pageToStartInstant: page => dayjs(page).startOf('year'),
      pageToEndInstant: page => dayjs(page).endOf('year'),
      instantToColumnIdx: instant => instant.month() % 5, // @NOTE: [0..11] -> [0..4]
    },
    month: {
      resolution: resolutionOptionsLut.date,
      cellDisplayFormat: 'D',
      displayColumns: true,
      columns: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ], // @WIP: Pick from locale
      instantToPage: instant => instant.format('YYYY-MM'),
      pageToStartInstant: page => dayjs(page).startOf('month'),
      pageToEndInstant: page => dayjs(page).endOf('month'),
      instantToColumnIdx: instant => instant.day(), // @NOTE: [0..6], works transparently with different locales
    },
  };

  const dateViews = Object.keys(dateViewOptionsLut);

  function getDeepestDateView(resolution) {
    const resolutionOptions = resolutionOptionsLut[resolution];
    return resolutionOptions.dateViews[resolutionOptions.dateViews.length - 1];
  }

  function getRelativeDateView(resolution, dateView, step) {
    const resolutionOptions = resolutionOptionsLut[resolution];
    const io = resolutionOptions.dateViews.indexOf(dateView);
    if (io === -1) return null;
    const nextIo = io + step;
    if (nextIo < 0) return null;
    if (nextIo > resolutionOptions.dateViews.length - 1) return null;
    return resolutionOptions.dateViews[nextIo];
  }

  //

  const timeViewOptions = {
    hour: {},
    minute: {},
    second: {},
  };

  //

  export default {
    props: {
      // @DOC: Selected instant in ISO 8601 format
      value: {
        type: String,
        default: null,
      },
      // @DOC: Whether the new value will be emitted immediately,
      lazy: { type: Boolean, default: false },
      //
      // @DOC: Will affect display format, defaults to browser settings when not given
      locale: { // @WIP
        type: String,
        default: null,
      },
      // @DOC: Will affect value format, defaults to browser setting when not given
      timezone: { // @WIP
        type: String,
        default: null,
      },
      // @DOC: Will affect value format and display format
      resolution: {
        type: String,
        default: null,
        validator: resolution => resolution == null || resolutions.indexOf(resolution) !== -1,
      },
      // @DOC: Whether the value is an absolute time or a civil time. Will affect value format.
      //       Absolute time is global, representing a specific instant in time, and will include UTC offset. Example:
      //         A call is scheduled by a person from Paris, France (CEST = UTC+02)
      //         for 2019-10-17T07:00+02:00 (absolute time).
      //         In Moscow, Russia (MSK = UTC+03) call will happen at 2019-10-17T09:00 (civil time).
      //         In Los Angeles, USA (PDT = UTC-07) call will happen at 2019-10-16T23:00 (civil time).
      //       Civil time is local, relative to the timezone, and will not include UTC offset. Example:
      //         A game is scheduled to release just two hours before the new year, at 2019-12-31T22:00 (civil time).
      //         A person from Melbourne, Australia (AEDT = UTC+11) will be able to play the game
      //         19 hours earlier than a person from Los Angeles, USA (PST = UTC-08).
      // @REFERENCE: Read more at https://github.com/google/cctz
      civil: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      const actualResolution = getActualResolution(this.resolution);
      const dateView = getDeepestDateView(actualResolution);
      const dateViewOptions = dateViewOptionsLut[dateView];
      const actualValueFormat = getActualValueFormat(actualResolution, this.civil);

      const createdAt = dayjs(); // @WIP: Timezone
      const initialValue = this.value ? dayjs(this.value) : null; // @WIP: Timezone
      const dateViewPage = dateViewOptions.instantToPage(initialValue || createdAt);

      return {
        createdAt: createdAt.format(),
        innerValue: initialValue ? initialValue.format(actualValueFormat) : null,
        dateView,
        dateViewPage,
      };
    },
    computed: {
      actualResolution() {
        return getActualResolution(this.resolution);
      },
      actualValueFormat() {
        return getActualValueFormat(this.actualResolution, this.civil);
      },
      //
      resolutionOptions() {
        return resolutionOptionsLut[this.actualResolution];
      },
      dateViewOptions() {
        return dateViewOptionsLut[this.dateView];
      },
      //
      deeperDateView() {
        return getRelativeDateView(this.actualResolution, this.dateView, 1);
      },
      deepestDateView() {
        return getDeepestDateView(this.actualResolution);
      },
      shallowerDateView() {
        return getRelativeDateView(this.actualResolution, this.dateView, -1);
      },
      //
      nowCivilDate() {
        return dayjs(this.createdAt).format(this.resolutionOptions.baseDateFormat);
      },
      innerValueCivilDate() {
        return this.innerValue ? dayjs(this.innerValue).format(this.resolutionOptions.baseDateFormat) : null;
      },
      //
      navigationItemGroups() {
        return [
          {
            // @WIP
          },
        ];
      },
      dateViewItemGroups() {
        const mainPage = this.dateViewPage;

        const start = this.dateViewOptions.pageToStartInstant(mainPage);
        const end = this.dateViewOptions.pageToEndInstant(mainPage);
        const numColumns = this.dateViewOptions.columns.length;
        const cellDisplayFormat = this.dateViewOptions.cellDisplayFormat;
        const interval = this.dateViewOptions.resolution.interval;

        const startColumnIdx = this.dateViewOptions.instantToColumnIdx(start);

        const rows = [];
        let columnIdx = 0;
        let rowIdx = 0;
        let instant = start;
        let doneWithRealCells = false;

        // @WIP: Move generation to a utility function and cover with tests
        while (!doneWithRealCells) {
          const row = [];
          // @NOTE: Empty cells before physical cells
          while (rowIdx === 0 && columnIdx < startColumnIdx) {
            row.push({
              physical: false,
            });
            columnIdx++;
          }
          // @NOTE: Real cells
          while (!doneWithRealCells && columnIdx < numColumns) {
            row.push({
              physical: true,
              name: instant.format(cellDisplayFormat),
              civilDate: instant.format(this.dateViewOptions.resolution.baseDateFormat),
              weekend: true, // @WIP
            });
            columnIdx++;
            instant = instant.add(...interval);
            if (!instant.isBefore(end)) {
              doneWithRealCells = true;
            }
          }
          // @NOTE: Empty cells after physical cells
          while (doneWithRealCells && columnIdx < numColumns) {
            row.push({
              physical: false,
            });
            columnIdx++;
          }
          rows.push(row);
          rowIdx++;
          columnIdx = 0;
        }

        return [
          {
            dateViewPage: mainPage,
            rows,
          },
        ];
      },
    },
    watch: {
      value() {
        this.innerValue = this.value;
      },
      innerValue() {
        if (this.lazy) return;
        if (this.innerValue === this.value) return;
        this.$emit('input', this.innerValue);
      },
    },
    methods: {
      canZoomOut() {
        return this.shallowerDateView != null;
      },
      zoomOut() {
        const nextDateView = this.shallowerDateView;
        if (nextDateView != null) {
          const nextDateViewOptions = dateViewOptionsLut[nextDateView];
          const nextDateViewPage = nextDateViewOptions.instantToPage(this.dateViewOptions.pageToStartInstant(this.dateViewPage));

          this.dateView = nextDateView;
          this.dateViewPage = nextDateViewPage;
        }
      },
      selectFromDateView(civilDate) {
        const nextDateView = this.deeperDateView;
        if (nextDateView == null) {
          this.innerValue = dayjs(civilDate).format(this.actualValueFormat);
        }
        else {
          const nextDateViewOptions = dateViewOptionsLut[nextDateView];
          const nextDateViewPage = nextDateViewOptions.instantToPage(dayjs(civilDate)); // @WIP: Timezone

          this.dateView = nextDateView;
          this.dateViewPage = nextDateViewPage;
        }
      },
      setTodayFromDateView() {
        const nextDateView = this.deepestDateView;
        const nextDateViewOptions = dateViewOptionsLut[nextDateView];
        const nextDateViewPage = nextDateViewOptions.instantToPage(dayjs(this.nowCivilDate)); // @WIP: Timezone
        this.dateView = nextDateView;
        this.dateViewPage = nextDateViewPage;
        this.innerValue = dayjs(this.nowCivilDate).format(this.actualValueFormat); // @WIP: Timezone
      },
      clear() {
        this.innerValue = null;
      },
    },
  };
</script>

<style>
  @import './datetime.scss';
</style>
