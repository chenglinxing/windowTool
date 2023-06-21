<template>
  <div class="menu">
    <div class="menu-header">XXX</div>
    <div class="menu-list">
      <div
        :class="{ 'menu-item': true, 'is-active': index === activeIndex }"
        v-for="(item, index) in menuList"
        :key="index"
        @click="handleClickMenuItem(item, index)"
      >
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuList: [
          {
            label: "首页",
            icon: "el-icon-s-home",
            route: "/home",
            hasChild: false,
          },
          {
            label: "工具",
            icon: "el-icon-s-tools",
            route: "/tools",
            hasChild: true,
          },
        ],
        activeIndex: 0,
      };
    },
    watch: {
      $route(to, from, next) {
        console.log(to, from, next);
        if (to?.path) {
          this.activeIndex = this.menuList.findIndex(
            (i) => i.route === to.path
          );
        }
      },
    },
    methods: {
      handleClickMenuItem(item, index) {
        this.activeIndex = index;
        this.$router.push(item.route);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .menu {
    height: 100%;
    overflow: auto;

    .menu-header {
      height: 60px;
    }

    .menu-list {
      padding-left: 8px;
    }

    .menu-item {
      box-sizing: border-box;
      position: relative;
      padding: 0 20px;
      height: 56px;
      color: #303133;
      border-left: 6px solid transparent;
      display: flex;
      // justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      margin-bottom: 0.5px;

      cursor: pointer;
      span {
        margin-left: 12px;
      }

      &:hover {
        background: #ecf5ff;
        border-left: 6px solid #409eff;
        color: #409eff !important;
      }
    }
  }

  .is-active {
    background: #ecf5ff;
    border-left: 6px solid #409eff !important;
    color: #409eff !important;
  }
</style>
