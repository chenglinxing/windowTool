<template>
  <div class="layout-index">
    <el-container class="el-container-div">
      <!-- <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <el-container>
          <el-main><router-view /></el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container> -->

      <el-aside width="200px"> <Menu /></el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    components: {
      Menu: () => import("./menu.vue"),
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>
  .layout-index {
    min-height: 100vh;
    // margin: 10px 20px;
    // padding: 0 10px;
    // box-shadow: 3px 3px 5px #aaaaaa;
    // border-radius: 20px;
  }
  .el-main {
    background: #f4f7fe;
  }

  .el-container-div {
    min-height: 100vh;
  }
  
</style>
