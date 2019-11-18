<template>
  <div class="w-calendar">
    <pre>{{ { actualResolution, dateView, dateViewPage } }}</pre>
    <div class="k-widget k-calendar k-calendar-infinite">
      <!-- @WIP: k-calendar-yearview -->
      <div kendo-calendar-viewlist class="k-calendar-view k-calendar-monthview">
        <div kendo-calendar-header class="k-calendar-header">
          <span class="k-button k-bare k-title">{{ dateViewPage }}</span>
          <span class="k-today">TODAY</span>
        </div>
        <table v-if="dateViewHeaders.length > 0" class="k-calendar-weekdays" style="table-layout: auto;">
          <thead>
            <tr>
              <th v-for="(header, headerIdx) in dateViewHeaders" :style="{ width: `${100.0 / dateViewHeaders.length}%` }" :key="headerIdx">
                {{ header }}
              </th>
            </tr>
          </thead>
        </table>
        <div class="k-content k-scrollable">
          <table style="transform: translateY(0px);">
            <tbody v-for="(group, groupIdx) in dateViewItemGroups" :key="groupIdx">
              <tr>
                <!-- @WIP: Человеческий текст -->
                <th :colspan="dateViewHeaders.length">{{ group.dateViewPage }}</th>
              </tr>
              <tr v-for="(row, rowIdx) in group.rows" :key="rowIdx">
                <!-- @WIP: k-weekend, k-empty, data-cell-index="0:1" -->
                <!-- @WIP: Человеческий title -->
                <td v-for="(cell, cellIdx) in row" :key="cellIdx" class="k-weekend" title="Sunday, September 1, 2019">
                  <span v-if="cell.day" class="k-link">{{ cell.value }}</span>
                </td>
              </tr>
              <tr>
                <td v-for="idx in dateViewHeaders.length" class="k-empty" :key="idx"></td>
              </tr>
            </tbody>
          </table>
          <div class="k-scrollable-placeholder" style="height: 0px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dayjs from 'dayjs';
  if (typeof window != 'undefined') {
    window.dayjs = dayjs; // @DEBUG
  }

  const dateViewOptionsLut = {
    century: {
      instantToPage: instant => String(Math.floor(instant.get('year') / 100)),
    },
    decade: {
      instantToPage: instant => String(Math.floor(instant.get('year') / 10)),
    },
    year: {
      instantToPage: instant => String(instant.get('year')),
    },
    month: {
      instantToPage: instant => instant.format('YYYY-MM'),
    },
  };

  const resolutionOptionsLut = {
    year: {
      baseValueFormat: 'YYYY',
      dateViews: ['century', 'decade'],
      timeViews: [],
    },
    month: {
      baseValueFormat: 'YYYY-MM',
      dateViews: ['century', 'decade', 'year'],
      timeViews: [],
    },
    date: {
      baseValueFormat: 'YYYY-MM-DD',
      dateViews: ['century', 'decade', 'year', 'month'],
      timeViews: [],
    },
    hour: {
      baseValueFormat: 'YYYY-MM-DDThh',
      dateViews: ['century', 'decade', 'year', 'month'],
      timeViews: ['hour'],
    },
    minute: {
      baseValueFormat: 'YYYY-MM-DDThh:mm',
      dateViews: ['century', 'decade', 'year', 'month'],
      timeViews: ['hour', 'minute'],
    },
    second: {
      baseValueFormat: 'YYYY-MM-DDThh:mm:ss',
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

  export default {
    props: {
      value: { type: String, default: null },
      // @DOC: Whether the new value will be emitted immediately,
      lazy: { type: Boolean, default: false },
      //
      // @DOC: Will affect display format, defaults to browser settings when not given
      locale: {
        type: String,
        default: null,
      },
      // @DOC: Will affect value format, defaults to browser setting when not given
      timezone: {
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
      let actualResolution = getActualResolution(this.resolution);
      let resolutionOptions = resolutionOptionsLut[actualResolution];

      const mostPreciseDateView = resolutionOptions.dateViews[resolutionOptions.dateViews.length - 1];
      const dateView = mostPreciseDateView;
      const dateViewOptions = dateViewOptionsLut[dateView];

      const now = dayjs(); // @WIP: Брать из текущего value используя формат
      const dateViewPage = dateViewOptions.instantToPage(now);

      return {
        dateView,
        dateViewPage,
      };
    },
    computed: {
      actualResolution() {
        return getActualResolution(this.resolution);
      },
      resolutionOptions() {
        return resolutionOptionsLut[this.actualResolution];
      },
      actualValueFormat() {
        return this.resolutionOptions.baseValueFormat + (this.civil ? '' : 'Z');
      },
      mostPreciseDateView() {
        const dateViews = this.resolutionOptions.dateViews;
        return dateViews[dateViews.length - 1];
      },
      dateViewOptions() {
        return dateViewOptionsLut[this.dateView];
      },
      navigationItemGroups() {
        return [
          {
            // @WIP
          },
        ];
      },
      dateViewHeaders() {
        return [
          'Su',
          'Mo',
          'Tu',
          'We',
          'Th',
          'Fr',
          'Sa',
        ];
      },
      dateViewItemGroups() {
        const mainPage = this.dateViewPage;
        return [
          {
            dateViewPage: mainPage,
            rows: [
              [
                {
                  day: false,
                  value: null,
                },
                {
                  day: false,
                  value: null,
                },
                {
                  day: false,
                  value: null,
                },
                {
                  day: false,
                  value: null,
                },
                {
                  day: false,
                  value: null,
                },
                {
                  day: true,
                  value: '1',
                },
                {
                  day: true,
                  value: '2',
                },
              ],
              [
                {
                  day: true,
                  value: '3',
                },
                {
                  day: true,
                  value: '4',
                },
                {
                  day: true,
                  value: '5',
                },
                {
                  day: true,
                  value: '6',
                },
                {
                  day: true,
                  value: '7',
                },
                {
                  day: true,
                  value: '8',
                },
                {
                  day: true,
                  value: '9',
                },
              ],
            ],
          },
        ];
      },
    },
  };
</script>

<style>
  @import './datetime.scss';
</style>
