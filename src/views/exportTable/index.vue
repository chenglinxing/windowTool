<template>
  <div class="export-table">
    <el-table :data="tableData">
      <el-table-column label="姓名" prop="userName"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="电话" prop="phone"></el-table-column>
      <el-table-column label="创建日期" prop="createTime"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import * as XLSX from "xlsx";
  import XLSX2 from "xlsx-style";
  export default {
    data() {
      return {
        tableData: [
          {
            userName: "张三",
            age: 18,
            gender: 1,
            phone: 15612345612,
            createTime: "2019-10-22",
          },
          {
            userName: "李四",
            age: 17,
            gender: 1,
            phone: 15612345613,
            createTime: "2019-10-23",
          },
          {
            userName: "王五",
            age: 19,
            gender: 1,
            phone: 15612345615,
            createTime: "2019-10-25",
          },
          {
            userName: "赵六",
            age: 18,
            gender: 1,
            phone: 15612345618,
            createTime: "2019-10-15",
          },
        ],
      };
    },
    methods: {},
    created() {
      var wb = XLSX.utils.book_new(); // 工作簿对象包含一SheetNames数组，以及一个表对象映射表名称到表对象，XLSX.utils.book_new使用函数创建一个新的工作簿对象
      var ws_name = "SheetJS"; // 给工作表命名
      var workbook = XLSX.utils.aoa_to_sheet(table1); // 定义工作表，并在里边添加第一个表格

      XLSX.utils.sheet_add_aoa(workbook, table2, { origin: "B1" }); // 向工作表中追加一个表格，并设置从哪个单元格开始

      XLSX.utils.book_append_sheet(wb, workbook, ws_name); // 合成工作簿，向工作簿中添加命名为wa_name的工作表

      // 定义要合并的单元格
      var merges = [
        "A20:E21",
        "A1:A3",
        "B1:R3",
        "S1:V3",
        "A4:V4",
        "A5:E5",
        "A13:E13",
        "G5:H5",
        "G6:G9",
        "G10:G13",
        "G14:G17",
        "G18:G21",
        "A6:A7",
        "B6:B7",
        "C6:D7",
        "V6:V7",
        "H6:H7",
        "I6:I7",
        "J6:J7",
        "K6:K7",
        "L6:L7",
      ];
      // 将要合并的单元格放进工作表中
      if (merges.length > 0) {
        if (!workbook["!merges"]) workbook["!merges"] = [];
        merges.forEach((item) => {
          workbook["!merges"].push(XLSX.utils.decode_range(item));
        });
      }

      let borderAll = {
        // 单元格外侧框线
        top: {
          style: "thin",
          color: { rgb: "000000" },
        },
        bottom: {
          style: "thin",
          color: { rgb: "000000" },
        },
        left: {
          style: "thin",
          color: { rgb: "000000" },
        },
        right: {
          style: "thin",
          color: { rgb: "000000" },
        },
      };
      // 设置公共样式
      if (workbook[key] instanceof Object) {
        workbook[key].s = {
          border: borderAll, // 边框样式设置
          alignment: {
            // 文字样式设置
            horizontal: "center", // 字体水平居中
            vertical: "center", // 垂直居中
            wrapText: 1, // 自动换行
          },
          fill: {
            //背景色
            fgColor: { rgb: "C0C0C0" },
          },
          font: {
            // 单元格中字体的样式与颜色设置
            sz: 10,
            color: {
              rgb: "000000",
            },
            bold: false,
          },
          bold: true,
          numFmt: 0,
        };
      }
    },
  };
</script>

<style lang="scss" scoped></style>
