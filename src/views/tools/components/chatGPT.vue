<template>
  <div class="chatgpt-index">
    <!-- <el-form label-width="120px" label-suffix="：">
      <el-form-item label="Token">
        <el-input v-model="headers.token"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="handleClick">调用</el-button>
    <el-input v-model="question"></el-input>
    <el-input type="textarea" v-model="result"></el-input> -->

    <template v-if="allDialog.length">
      <div class="dialog" v-for="(item, index) in allDialog" :key="index">
        <div class="my-dialog-content">
          <div class="my-dialog-img">
            <img
              src="https://raw.githubusercontent.com/Chanzhaoyu/chatgpt-web/main/src/assets/avatar.jpg"
              alt=""
            />
          </div>

          <div class="dialog-content">
            <p>{{ item[0].currentDateTime }}</p>

            <div class="my-content">
              <div class="content">
                <div class="content-item">
                  {{ item[0].content }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="chat-dialog">
          <div class="my-dialog-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              width="1em"
              height="1em"
            >
              <path
                d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <div class="dialog-content">
            <p>{{ item[1].currentDateTime }}</p>

            <div class="my-content">
              <div class="content">
                <div class="content-item">
                  {{ item[1].content }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="dialog"></div>
    </template>

    <div class="search">
      <div class="left-btn">
        <div class="setup">
          <el-popover
            placement="top-start"
            trigger="hover"
            content="Setting"
          >
            <config
              slot="reference"
              @click="handleClickSetup"
              theme="two-tone"
              size="24"
              :fill="['#ecf5ff', '#409eff']"
            />
          </el-popover>
        </div>
      </div>
      <div class="search-input">
        <el-input v-model="question" :disabled="btnLoading"></el-input>
      </div>
      <div class="right-btn">
        <el-button @click="handleClickSendMsg" :loading="btnLoading"
          >发送</el-button
        >
      </div>
    </div>

    <!-- <iframe src="https://chenglinxing.cn/pages/328ca0/?p=2" style="height: 100%;" allowfullscreen frameborder="0"></iframe> -->
  </div>
</template>

<script>
  import axios from "axios";
  import { Config } from "@icon-park/vue";
  import dayjs from "dayjs";

  export default {
    components: {
      Config,
    },
    data() {
      return {
        allMsg: {
          model: "gpt-3.5-turbo",
          messages: [], //messages就是你发的消息是数组形式
        },
        headers: {
          token: "Bearer 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",
        },
        question: "上班的意义在哪儿",
        result: "",

        myDialog: [],
        chatDialog: [],
        allDialog: [],
        btnLoading: false,
      };
    },
    methods: {
      sendMsg(question) {
        this.btnLoading = true;
        let params = {
          role: "user",
          content: question,
        };
        this.allMsg.messages.push(params);
        let r = {
          id: Math.random() * Math.random(),
          type: "chat",
          content: "加载中",
          currentDateTime: this.getDateTime(),
        };
        //保存到chat对话当中
        //保存到所有的对话当中
        this.allDialog[this.allDialog.length - 1].push(r);
        //清空
        this.question = "";
        axios({
          url: "https://api.openai-proxy.com/v1/chat/completions",
          method: "POST",
          headers: {
            Authorization:
              "Bearer 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",
          },
          data: this.allMsg,
        })
          .then((res) => {
            console.log(res, "res");
            let resContent = res.data.choices[0].message.content;
            let resParams = {
              id: Math.random() * Math.random(),
              type: "chat",
              content: resContent,
              currentDateTime: this.getDateTime(),
            };
            //保存到chat对话当中
            this.chatDialog.push(resParams);
            //保存到所有的对话当中
            // this.allDialog[this.allDialog.length - 1][1] = resParams;
            this.$set(this.allDialog[this.allDialog.length - 1], 1, resParams);
            this.btnLoading = false;
          })
          .catch((err) => {
            console.log(err, "err");
            let resParams = {
              id: Math.random() * Math.random(),
              type: "chat",
              content: "连接失败~",
              currentDateTime: this.getDateTime(),
            };
            //保存到chat对话当中
            this.chatDialog.push(resParams);
            //保存到所有的对话当中
            this.allDialog[this.allDialog.length - 1][1] = resParams;
            this.btnLoading = false;
            this.question = "";
          });
      },

      //发送消息
      handleClickSendMsg() {
        let question = this.question;
        if (!question || !question.trim()) { 
          this.$message.info("输入内容不能为空！")
          return
        }
        let params = {
          id: Math.random() * Math.random(),
          type: "user",
          content: question,
          currentDateTime: this.getDateTime(),
        };

        //保存到我的对话当中
        this.myDialog.push(params);
        //保存到所有的对话当中
        this.allDialog.push([params]);
        console.log(this.allDialog);
        //调用接口
        this.sendMsg(question);
      },

      //点击设置
      handleClickSetup() {
        // 切换token
      },

      //获取当前时间
      getDateTime() {
        return dayjs(new Date()).format("YYYY/MM/DD HH:mm:ss");
      },
    },
    created() {
      // this.formData.messages[0].content = this.question;
    },
  };
</script>

<style lang="scss" scoped>
  .chatgpt-index {
    height: 100%;
    display: flex;
    flex-direction: column;
    .dialog {
      flex: 1;
      padding: 1.2rem;
      .my-dialog-content,
      .chat-dialog {
        display: flex;
        flex-direction: row-reverse;
        .dialog-content {
          // min-width: 80%;
          margin-right: 10px;
          p {
            font-size: 12px;
            color: rgb(180, 187, 196);
            text-align: right;
          }

          .my-content {
            margin-top: 0.5rem;

            display: flex;
            flex-direction: row-reverse;
            .content {
              // width: 60%;
              background-color: rgb(210, 249, 209);
              padding: 0.5rem 0.75rem;
              border-radius: 0.375rem;
              color: rgb(0, 0, 0);
              font-size: 14px;
            }
          }
        }
      }
    }

    .search {
      height: 72px;
      display: flex;
      align-items: center;
      .search-input {
        width: 90%;
        margin: 0 10px;
      }
    }

    .left-btn,
    .right-btn {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
    }
  }

  .my-dialog-img {
    width: 32px;
    height: 34px;
    img {
      width: 32px;
      height: 34px;
      border-radius: 50%;
    }
    svg {
      width: 28px;
      height: 30px;
    }
  }
  .chat-dialog {
    width: 100%;
    flex-direction: row !important;
    margin: 0.75rem 0;
    .dialog-content {
      max-width: 80%;
      margin-left: 10px;
      p {
        font-size: 12px;
        color: rgb(180, 187, 196);
        text-align: left !important;
      }
    }
    .my-content {
      flex-direction: row !important;
      .content {
        background-color: rgb(244, 246, 248) !important;
      }
    }
  }

  .setup {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #f5f5f5;
    }
  }

  .i-icon {
    cursor: pointer;
  }
</style>
