<template>
  <div class="in-recent-month">
    <el-form label-width="120px" label-suffix="：">
      <el-form-item label="示例">
        <el-input v-model="exampleArr"></el-input>
        <el-select v-model="exampleSelect" @change="handleChange">
          <el-option
            v-for="item in 12"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
        <el-input v-model="exampleResult"></el-input>
        <el-button @click="handleClick">点击</el-button>
      </el-form-item>
    </el-form>

    <div class="code-editor">
      <codemirror :code="code" />
    </div>
  </div>
</template>

<script>
  import { dialog, ipcMain, ipcRenderer, BrowserWindow } from "electron";
  export default {
    components: {
      codemirror: () => import("@/components/codemirror/index.vue"),
    },
    data() {
      return {
        exampleArr: `["一","二","三","四","五","六","七","八","九","十","十一","十二"]`,
        exampleResult: "",
        exampleSelect: 4,
        code: `formatMonth(currentMonth, num = 4) {
        let data = [
          "一",
          "二",
          "三",
          "四",
          "五",
          "六",
          "七",
          "八",
          "九",
          "十",
          "十一",
          "十二",
        ];

        let res = [];
        for (let i = 0; i < num; i++) {
          let month = currentMonth - i;
          if (month <= 0) {
            month += 12;
          }
          res.push(data[month - 1]);
        }

        return res.reverse();
      },`,
      };
    },
    methods: {
      formatMonth(currentMonth, num = 4) {
        let data = [
          "一",
          "二",
          "三",
          "四",
          "五",
          "六",
          "七",
          "八",
          "九",
          "十",
          "十一",
          "十二",
        ];

        let res = [];
        for (let i = 0; i < num; i++) {
          let month = currentMonth - i;
          if (month <= 0) {
            month += 12;
          }
          res.push(data[month - 1]);
        }

        return res.reverse();
      },
      //示例 下拉框事件
      handleChange(val) {
        let currentMonth = new Date().getMonth() + 1;
        let res = this.formatMonth(currentMonth, val);
        this.exampleResult = `${res}`;
      },

      handleClick() {
        console.log(__dirname,'__dirname')
        // ipcRenderer.send("show-message-box", "这是一个消息框弹窗。");
        ipcRenderer.send("create-popup-window", {
          windowWidth: 400,
          windowHeight: 500,
          position: { x: 100, y: 100 },
          // 其他选项...
        });
      },
    },
    created() {
      this.handleChange(this.exampleSelect);
    },
  };
</script>

<style lang="scss" scoped>
  .in-recent-month {
    height: 100%;
    display: flex;
  }

  .el-form {
    flex: 1;
    margin-right: 10px;
  }
  ::v-deep .el-form-item__content {
    display: flex;
    flex-direction: column;
    .el-select {
      margin: 10px 0px;
    }
  }

  .code-editor {
    flex: 1;
  }
</style>
