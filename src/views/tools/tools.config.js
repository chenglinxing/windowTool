import { CheckOne, FileTxt } from "@icon-park/vue";

const toolsLeftTitleList = [
  {
    key: 0,
    name: "下划线转驼峰",
    componentName: "ChangeStr", //对应components中定义的名称
    icon: CheckOne,
  },
  {
    key: 1,
    name: "获取近几个月份",
    componentName: "InRecentMonth", //对应components中定义的名称
    icon: FileTxt,
  },
  {
    key: 2,
    name: "chatGPT",
    componentName: "ChatGPT", //对应components中定义的名称
    icon: FileTxt,
  },
];

export { toolsLeftTitleList };
