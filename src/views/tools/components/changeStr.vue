<template>
  <div class="tools-index">
    <el-form label-width="120px" label-suffix="：">
      <el-form-item label="转换符号">
        <el-select v-model="currentStr" @change="handleChangeSymbol">
          <el-option
            v-for="item in strList"
            :key="item.symbol"
            :label="`${item.label}${item.symbol}`"
            :value="item.symbol"
          ></el-option>
        </el-select>
        <el-button
          class="add-str-btn"
          icon="el-icon-plus"
          @click="handleClickShowAddStr"
        ></el-button>
      </el-form-item>

      <el-form-item label="添加转换条件" v-show="isShowAddStr"
        ><el-input placeholder="转换符号" v-model="changeSymbol"></el-input
        ><el-input placeholder="转换中文提示" v-model="changeTips"></el-input
        ><el-button
          class="add-str-btn"
          icon="el-icon-plus"
          @click="handleClickAddStr"
        ></el-button
      ></el-form-item>

      <el-form-item label="转换前"
        ><el-input v-model="beforeConversion" @input="handleInputStr"></el-input
      ></el-form-item>
      <el-form-item label="转换后"
        ><el-input v-model="afterConversion">
          <el-button
            slot="append"
            icon="el-icon-document-copy"
            @click="handleClickCopy"
          ></el-button></el-input
      ></el-form-item>
    </el-form>

    <div class="code-editor">
      <codemirror :code="code" />
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      codemirror: () => import("@/components/codemirror/index.vue"),
    },
    data() {
      return {
        strList: [
          { symbol: "-", label: "横杠" },
          { symbol: "~", label: "波浪线" },
          { symbol: "_", label: "底杠" },
        ],
        currentStr: "_",
        beforeConversion: "", //转换前
        afterConversion: "", //转换后
        isShowAddStr: false,

        changeSymbol: "", //转换符号
        changeTips: "", //转换符号
        code: `changeStr(str, type) {
        let s1 = str.split(type);
        let res = "";
        for (let i = 1; i < s1.length; i++) {
          res += s1[i].substring(0, 1).toUpperCase() + s1[i].substring(1);
        }
        return s1[0] + res;
      },`,
      };
    },
    methods: {
      handleChangeSymbol(type) {
        if (this.beforeConversion) {
          this.handleInputStr(this.beforeConversion, type);
        }
      },
      //转换str
      changeStr(str, type) {
        let s1 = str.split(type);
        let res = "";
        for (let i = 1; i < s1.length; i++) {
          res += s1[i].substring(0, 1).toUpperCase() + s1[i].substring(1);
        }
        return s1[0] + res;
      },

      //输入事件
      handleInputStr(val) {
        this.afterConversion = this.changeStr(val, this.currentStr);
      },
      //复制功能
      handleClickCopy() {
        this.copy(this.afterConversion);
      },
      //新增转换条件的展示
      handleClickShowAddStr() {
        this.changeSymbol = "";
        this.changeTips = "";
        this.isShowAddStr = !this.isShowAddStr;
      },
      //新增转换条件
      handleClickAddStr() {
        let symbol = this.changeSymbol;
        let label = this.changeTips;
        if (!(symbol && label)) {
          this.$message.info("新增的符号或提示不能为空");
          return;
        }
        let params = { symbol, label };
        this.strList.push(params);
        this.$message.success("添加成功");
        this.currentStr = symbol;
        this.isShowAddStr = false;
      },
      copy(content) {
        if (!content) {
          this.$message.error("复制的内容不能为空");
          return;
        }
        // 创建输入框元素
        const input = document.createElement("input"); //不会保留文本格式
        //如果要保留文本格式，比如保留换行符，或者多行文本，可以使用  textarea 标签，再配和模板字符串 ` `
        //const input = document.createElement('textarea')
        // 将想要复制的值
        input.value = content;
        // 页面底部追加输入框
        document.body.appendChild(input);
        // 选中输入框
        input.select();
        // 执行浏览器复制命令
        document.execCommand("Copy");
        // 弹出复制成功信息
        //this.$message.success('复制成功');
        // 复制后移除输入框
        input.remove();
        this.$message.success("复制成功");
      },
    },
  };
</script>

<style lang="scss" scoped>
  .tools-index {
    display: flex;
  }

  .el-form {
    flex: 1;
    margin-right: 10px;
  }

  .code-editor {
    flex: 1;
  }

  .el-select,
  .el-input {
    // width: 25%;
  }

  .add-str-btn {
    margin-left: 20px;
  }
</style>
