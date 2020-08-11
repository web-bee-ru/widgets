<template>
  <LTree
    class="w-tree"
    v-on="$listeners"
    v-bind="$attrs"
    ref="tree"
    @node:added="refreshHash()"
    @node:removed="refreshHash()"
    @node:expanded="refreshHash()"
    @node:collapsed="refreshHash()"
    @node:dragging:finish="refreshHash()"
    @tree:mounted="refreshHash()"
    @tree:data:received="refreshHash()"
    >
    <w-hook
      slot-scope="scp"
      @hook:mounted="onNodeMounted(scp.node)"
      >
      <div class="ui-node">
        <slot v-bind="scp" />
      </div>
    </w-hook>
  </LTree>
</template>

<script>
  import LTree from 'liquor-tree';
  export default {
    components: { LTree },

    data() {
      return {
        idxHash: {},
        nodesHash: {},
      };
    },

    mounted() {
      // this.$refs.tree.$watch('model', this.refreshHash);
    },

    watch: {
      idxHash: 'setNodesClasses',
      nodesHash: 'setNodesClasses',
    },

    methods: {
      getTree() {
        return this.$refs.tree;
      },

      delegateToTree(methodName, ...args) {
        return this.getTree()[methodName](...args);
      },

      findNode(node) {
        return this.delegateToTree('find', {data: node.data});
      },

      getData() {
        return this.delegateToTree('toJSON');
      },

      refreshHash() {
        let model = this.$refs.tree.model;
        let hash = {};
        let idx = 0;
        _.each(model, recurse);
        this.idxHash = hash;
        return;
        function recurse(node) {
          hash[node.id] = idx++;
          if (!node.states.expanded) {
            return;
          }
          _.each(node.children, recurse);
        }
      },

      onNodeMounted(node) {
        this.nodesHash[node.id] = node;
      },

      setNodesClasses: _.debounce(function() {
        _.each(this.nodesHash, node => {
          let el = node.vm.$el.children[0]; // если вешать на node.vm.$el - перетирается логикой либы
          if (this.idxHash[node.id] % 2) {
            el.classList.add('even');
            el.classList.remove('odd');
          }
          else {
            el.classList.add('odd');
            el.classList.remove('even');
          }
        });
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .w-tree /deep/ {
    .tree-node {
      &.selected .tree-content {background: #ddd !important;}
      .tree-content.even {background: #eee;}
      .tree-content.odd {background: transparent;}
    }
  }
</style>
