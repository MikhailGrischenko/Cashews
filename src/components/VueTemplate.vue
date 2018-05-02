<template lang="html">
  <div class="component-name">
    <!-- ... -->
  </div>
</template>

<script type="text/javascript">
export default {
  // обязательно не забываем имя к.
  name: 'ComponentName',
  // можем использовать композицию уже существующих к.
  extends: {},
  // перечисление свойств и переменных
  props: {
    bar: {}, // еще лучше если по-алфавиту
    foo: {},
    fooBar: {},
    roomId: {
      type: String,
      dafault () { return '0' }
    },
    theacherId: {
      type: String,
      dafault () { return 'АК' }
    }
  },
  data() {},
  // вычисляемые свойства, вычисляются отн раз и результат кешируется. Вычисляются при старте компонента.
  computed: {},
  // когда внутри используются другие к.
  components: {},
  // события
  watch: {},
  // методы
  methods: {
    oneMethodName {
      // тело метода
    return // результат возвращаемый методом
  },
    twoMethodName {
      // тело метода
    return // результат возвращаемый методом
  }
  },
  // методы жизненного цикла к.
  beforeCreate() {},
  mounted() {},
};
</script>

<style scoped>
  .Ranger__Wrapper { /* ... */ }
</style>