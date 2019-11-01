let nextUid = 1;

const runtimeUid = Symbol();
export default {
  created() {
    this[runtimeUid] = nextUid++;
  },
  methods: {
    // @DOC: Метод для генерации уникальных id для DOM элементов
    $id(name) {
      return `vue-${name}-${this[runtimeUid]}`;
    },
  },
};
