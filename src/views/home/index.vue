<template>
  <div class="home-index">
    <div class="home-header">
      <div class="header-title">XXXXX</div>
      <div class="header-btn">
        <el-button type="text" icon="el-icon-plus">新建事件</el-button>
      </div>
    </div>

    <div class="header-event">
      <div class="event-list">
        <div class="event-item" v-for="(item, index) in eventList" :key="index">
          <div class="event-item-header">
            <div class="event-item-header-left">
              <div
                class="title-img-div"
                :style="{
                  background: colorList[Math.floor(Math.random() * index) % 3],
                }"
              >
                <div class="title-img">
                  {{ item.eventTitle ? item.eventTitle.substring(0, 1) : "X" }}
                </div>
              </div>
              <span class="date-time">{{ item.dateTime }}</span>
            </div>

            <div class="event-item-header-right">xxx</div>
          </div>

          <div class="event-item-msg">
            {{ item.eventTitle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /*eslint-disable*/
  export default {
    components: {},
    data() {
      return {
        eventList: [
          {
            eventTitle:
              "QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ",
            dateTime: "今天下午 15:35:33",
          },
          { eventTitle: "YYYYYYYYYYYYYYYYYYYY", dateTime: "今天下午 15:35:33" },
          { eventTitle: "AAAAAAAAAAAAAAAAAAAA", dateTime: "今天下午 15:35:33" },
          { eventTitle: "GGGGGGGGGGGGGGGGGGGG", dateTime: "今天下午 15:35:33" },
          { eventTitle: "RRRRRRRRRRRRRRRRRRRR", dateTime: "今天下午 15:35:33" },
          { eventTitle: "HHHHHHHHHHHHHHHHHHHH", dateTime: "今天下午 15:35:33" },
          { eventTitle: "HHHHHHHHHHHHHHHHHHHH", dateTime: "今天下午 15:35:33" },
          { eventTitle: "HHHHHHHHHHHHHHHHHHHH", dateTime: "今天下午 15:35:33" },
          { eventTitle: "HHHHHHHHHHHHHHHHHHHH", dateTime: "今天下午 15:35:33" },
          { eventTitle: "HHHHHHHHHHHHHHHHHHHH", dateTime: "今天下午 15:35:33" },
          { eventTitle: "HHHHHHHHHHHHHHHHHHHH", dateTime: "今天下午 15:35:33" },
          { eventTitle: "HHHHHHHHHHHHHHHHHHHH", dateTime: "今天下午 15:35:33" },
          { eventTitle: "HHHHHHHHHHHHHHHHHHHH", dateTime: "今天下午 15:35:33" },
          { eventTitle: "PHHHHHHHHHHHHHHHHHHH", dateTime: "今天下午 15:35:33" },
          { eventTitle: "CHHHHHHHHHHHHHHHHHHH", dateTime: "今天下午 15:35:33" },
        ],
        colorList: ["#74b1fb", "#e5b1f1", "#fde288"],
      };
    },
    computed: {
      randomColor() {
        return this.colorList[
          Math.floor(Math.random() * this.colorList.length)
        ];
      },
    },
    methods: {},
    created() {},
  };
</script>

<style scoped lang="scss">
  .home-index {
    .home-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 10px;
    }

    .header-event {
      .event-list {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        .event-item {
          width: calc(50% - 36px);
          background: #ffffff;
          padding: 10px 8px;
          margin: 10px;
          border-radius: 10px;
          cursor: pointer;
          // &:nth-child(2n + 1) {
          //   border-top-left-radius: 20px;
          //   border-top-left-radius: 20px;
          // }
          // &:nth-child(2n) {
          // }
          .event-item-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            .event-item-header-left {
              display: flex;
              .title-img-div {
                margin-right: 20px;
                border-radius: 50%;
                padding: 2px;
                // color: #ffffff;
                .title-img {
                  box-sizing: border-box;
                  width: 20px;
                  height: 20px;
                  text-align: center;
                  line-height: 16px;
                  color: #ffffff;
                  padding: 2px;
                }
              }
              .date-time {
                color: #d4d4d6;
              }
            }
          }

          .event-item-msg {
            color: #8e8e8e;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }

  /*里面的代码可以根据自己需求去进行更改*/
  /* 设置滚动条的样式 */
  ::-webkit-scrollbar {
    width: 8px;
  }
  /* 滚动槽 */
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: #b4b3b3;
  }
</style>
