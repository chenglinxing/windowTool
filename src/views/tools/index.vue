<template>
  <div class="tools-index">
    <div class="tools-left">
      <div class="tools-left-header">
        <span>xxxxxxxxxxxxxx</span>
      </div>
      <div
        class="tools-item"
        v-for="(item, index) in toolsLeftTitleList"
        :key="index"
        :class="{ 'is-active': index === activeIndex }"
        @click="handleClickTitle(item, index)"
      >
        <div class="icon">
          <component :is="item.icon" size="16" fill="#17bd08"></component>
        </div>

        <div class="title">
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
    <div class="tools-right">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
  import { toolsLeftTitleList } from "./tools.config";
  export default {
    components: {
      ChangeStr: () => import("./components/changeStr.vue"),
      InRecentMonth: () => import("./components/inRecentMonth.vue"),
      ChatGPT: () => import("./components/chatGPT.vue"),
    },
    computed: {
      currentComponent() {
        return this.currentComponentName;
      },
    },
    data() {
      return {
        currentComponentName: "ChatGPT",
        toolsLeftTitleList,
        activeIndex: 2,
      };
    },
    methods: {
      handleClickTitle(item, index) {
        this.activeIndex = index;
        this.currentComponentName = item.componentName;
      },
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
      .tools-left-header {
        padding: 10px 0;
        margin-bottom: 10px;
      }
      .tools-item {
        display: flex;
        padding: 10px 5px;
        cursor: pointer;
        border-left: 5px solid transparent;
        .title{
          margin-left: 8px;
        }
      }
    }

    .tools-right {
      flex: 1;
      margin-left: 20px;
      background: $white;
      border-radius: 8px;
      padding: 10px;
    }
  }

  .is-active {
    background: #f2fbfa;
    border-left: 5px solid #409eff !important;
  }
</style>
