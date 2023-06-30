<template>
  <div class="codemirror-index">
    <div class="codemirror-header">
      <div class="icon-list">
        <div class="icon-item" @click="handleClickCopy">
          <copy-one theme="two-tone" size="16" :fill="['#409eff', '#409eff']" />
          <span>复制</span>
        </div>
      </div>
    </div>
    <codemirror
      ref="newCm"
      v-model="currrentCode"
      :options="cmOptions"
      @ready="onCmReady"
      @change="handleChange"
    >
    </codemirror>
  </div>
</template>

<script>
  import { CopyOne } from "@icon-park/vue";
  import { codemirror } from "vue-codemirror";
  // 主题css
  import "codemirror/theme/solarized.css";
  //高亮
  import "codemirror/mode/htmlmixed/htmlmixed"; // 引入需要的语言模式
  //
  import "codemirror/mode/javascript/javascript"; // 引入 JavaScript 语言模式
  import "codemirror/addon/hint/show-hint"; // 引入代码提示插件
  import "codemirror/addon/hint/show-hint.css"; // 引入代码提示插件样式
  import "codemirror/addon/tern/tern.css"; // 引入 Tern 代码提示样式
  import "codemirror/addon/tern/tern"; // 引入 Tern 代码提示插件

  import { copy } from "@/utils/commonUse.js";
  export default {
    components: {
      codemirror,
      CopyOne,
    },
    props: {
      code: {
        type: String,
        default: "const num = 1;",
      },
      cmOptions: {
        type: Object,
        default: () => {
          return {
            // codemirror options
            tabSize: 2,
            mode: "javascript",
            theme: "solarized",
            lineNumbers: true,
            line: true,
            lineWrapping: true, // 自动换行
            matchBrackets: true, // 光标匹配括号
            extraKeys: { Ctrl: "autocomplete" }, //自动提示配置
            maxHighlightLength: Infinity, // 显示长行的时候 这个值是不限制，如果要做限制的话，值是number类型
            gutters: ["CodeMirror-lint-markers"],
            readOnly: true, // 设置为只读true/false;也可设置为"nocursor"失去焦点
            extraKeys: {
              "Ctrl-Space": "autocomplete", // 如果需要手动触发代码提示，可以使用快捷键 Ctrl-Space
            },
            hintOptions: {
              completeSingle: false, //设置为false以确保显示完整的代码提示列表
            },
          };
        },
      },
    },

    data() {
      return {
        currrentCode: null,
      };
    },
    methods: {
      onCmReady(val) {
        console.log(val, "ready");
      },
      handleChange(val) {
        console.log(val, "change");
      },

      //复制
      handleClickCopy() {
        copy(this.currrentCode);
      },
    },
    created() {
      this.currrentCode = this.code;
    },
  };
</script>

<style lang="scss" scoped>
  .codemirror-index {
    height: 100%;
  }

  .vue-codemirror {
    height: 100%;
  }

  ::v-deep .CodeMirror {
    /* height: auto !important; */
    height: 100% !important;
    font-family: Arial, monospace;
    font-size: 16px;
    letter-spacing: 1.5px;
  }

  .codemirror-header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5px;
    .icon-list {
      .icon-item {
        cursor: pointer;
        span {
          color: #bbb;
        }
      }
    }
  }
</style>
