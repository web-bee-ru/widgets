<template>
  <div class="w-query-builder-group w-100">
    <div class="row">
      <div class="btn-group andor" v-if="value.rules && value.rules.length">
        <button @click="value.matchType = 'and'" class="btn btn-blue btn-sm btn-default" :class="{active: value.matchType === 'and'}">И</button>
        <button @click="value.matchType = 'or'" class="btn btn-blue btn-sm btn-default" :class="{active: value.matchType === 'or'}">ИЛИ</button>
      </div>
      <div v-else>
        Добавьте правила
      </div>
      <div class="col"></div>
      <template v-if="!root">
        <button class="btn btn-blue btn-sm mr-1 d-flex" @click="value.rules.push(makeRule())"><i class="fa fa-plus mr-1"></i> правило</button>
        <button class="btn btn-blue btn-sm mr-1 d-flex" @click="value.rules.push(makeGroup())"><i class="fa fa-plus mr-1"></i> группу</button>
        <button class="btn btn-light-blue btn-sm d-flex" @click="$emit('removeGroup')" @mouseenter="removeIsHovered = true" @mouseleave="removeIsHovered = false"><i class="fa fa-trash mr-1"></i> группу правил</button>
      </template>
      <template v-else>
        <button class="btn btn-blue btn-sm mr-1 d-flex" @click="value.rules.push(makeRule())"><i class="fa fa-plus mr-1"></i> правило</button>
        <button class="btn btn-blue btn-sm mr-1 d-flex" @click="value.rules.push(makeGroup())"><i class="fa fa-plus mr-1"></i> группу</button>
        <button class="btn btn-light-blue btn-sm" @click="value.rules = []" @mouseenter="removeIsHovered = true" @mouseleave="removeIsHovered = false">Очистить</button>
      </template>
    </div>
    <div class="w-query-builder-rules-list" :class="{'for-removing': removeIsHovered}">
      <div v-for="(item, idx) in value.rules" :key="item.id">
        <!---->
        <template v-if="item.type === 'group'">
          <w-qb-group :value="item" :fnMakeRule="fnMakeRule" @removeGroup="removeGroup(idx)">
            <template slot-scope="scp">
              <slot v-bind="scp" />
            </template>
          </w-qb-group>
        </template>
        <!---->
        <div v-else-if="item.type === 'rule'" class="w-query-builder-rule" :class="{'for-removing': hoveredRuleIdx === idx}">
          <slot :item="item.rule" />
          <button class="btn btn-light-blue btn-sm remove-rule d-flex" @click="removeGroup(idx)" @mouseenter="hoveredRuleIdx = idx" @mouseleave="hoveredRuleIdx = null"><i class="fa fa-trash mr-1"></i> правило</button>
        </div>
        <!---->
        <div class="error" v-else>Unsupported type of item!</div>
        <!---->
      </div>
    </div>
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
        required: true,
      },
      root: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        hoveredRuleIdx: null,
        removeIsHovered: false,
      };
    },

    methods: {
      makeRule() {
        return {
          type: 'rule',
          rule: this.fnMakeRule(),
        };
      },
      makeGroup() {
        return {
          type: 'group',
          matchType: 'and',
          rules: [],
        };
      },
      removeGroup(idx) {
        this.value.rules.splice(idx, 1);
      },
    },
  };
</script>

<style lang="scss" scoped>
  button {
    z-index: 999;
  }
  .w-query-builder-group {
    border: solid 1px transparent;
    padding: 10px;
    padding-right: 45px;
    margin-left: 30px;
    margin-right: -30px;

    .w-query-builder-rule {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      border-bottom: solid 1px #ccc;
      padding: 10px;
      margin-left: 30px;
      margin-right: 30px;
      position: relative;
      .remove-rule {
        position: absolute;
        top: 5px;
        right: 0px;
      }
    }

    .error {
      color: red;
      font-weight: bold;
    }

    .w-query-builder-rules-list {
      position: relative;

      &::before {
        content: ' ';
        height: 100%;
        width: 10px;
        border-left: dotted 1px #ccc;
        border-bottom: dotted 1px #ccc;
        display: inline-block;
        position: absolute;
        top: 0px;
        left: 0px;
      }

      &::after {
        content: ' ';
        height: 100%;
        width: 10px;
        border-right: dotted 1px #ccc;
        border-bottom: dotted 1px #ccc;
        display: inline-block;
        position: absolute;
        top: 0px;
        right: 0px;
      }

      &.for-removing {
        opacity: 0.5;
        &::after, &::before, .w-query-builder-rule:last-child {
          border-color: red;
        }
      }
    }
    .for-removing {
      opacity: .5;
      border-color: red;
    }
    .andor {
      .btn:not(.active) {
        opacity: 0.5;
      }
    }
  }
</style>
