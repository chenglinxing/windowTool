<template>
  <div class="tools-index">
    <div class="tools-left">
      <component :is="CheckOne"></component>
    </div>
    <div class="tools-right"></div>
  </div>
</template>

<script>
  import { CheckOne } from "@icon-park/vue";
  export default {
    
    data() {
      return {
        CheckOne:CheckOne
      };
    },
  };
</script>

<style lang="scss" scoped>
  $white: #ffffff;

  .tools-index {
    height: 100%;
    display: flex;
    .tools-left {
      width: 260px;
      background: $white;
      border-radius: 8px;
    }

    .tools-right {
      flex: 1;
      margin-left: 20px;
      background: $white;
      border-radius: 8px;
    }
  }
</style>
