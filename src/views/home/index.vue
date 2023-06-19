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
              <span
                class="title-img"
                :style="{
                  background: colorList[Math.floor(Math.random() * index) % 3],
                }"
                >{{
                  item.eventTitle ? item.eventTitle.substring(0, 1) : "X"
                }}</span
              >
              <span>{{ item.dateTime }}</span>
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
            eventTitle: "QQQQQQQQQQQQQQQQQQQQQ",
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
          flex: 45%;
          background: #ffffff;
          padding: 10px 8px;
          margin: 10px;
          border-radius: 12px;
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
              .title-img {
                margin-right: 20px;
                border-radius: 50%;
                padding: 2px 6px;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
</style>
