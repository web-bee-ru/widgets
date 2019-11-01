<template>
  <div class="w-spinner">
    <div class="spinner-group">
      <i class="fa fa-circle-o-notch fa-spin" ></i>
      <span class="title">{{title}}...</span>
    </div>
    
  </div>
</template>

<script>
  export default {
    props: {
      title: { type: String, default: 'Загрузка' }
    }
  }
</script>

<style lang="scss" scoped>
  .w-spinner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, .8);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  } 
  .fa-spin, .title {
    font-size: 35px;
  }
</style>
