<template>
  <div class="export-table">
    <el-button @click="exportExcel">导出</el-button>
  </div>
</template>

<script>
  import * as XLSX from "xlsx";
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
    methods: {
      exportExcel() {
        // const data = [
        //   ["姓名", "年龄", "性别"],
        //   ["小明", 18, "男"],
        //   ["小红", 17, "女"],
        //   ["小兰", 19, "女"],
        // ];

        // const workbook = XLSX.utils.book_new();

        // const sheet = XLSX.utils.aoa_to_sheet(data);

        // // 设置列宽
        // const cols = [{ wch: 50 }, { wch: 10 }, { wch: 10 }];
        // sheet["!cols"] = cols;

        // // 设置字体样式
        // const font = {
        //   name: "宋体",
        //   sz: 20,
        //   color: { rgb: "FFFF00" },
        //   bold: true,
        // };
        // const range = XLSX.utils.decode_range(sheet["!ref"]);
        // for (let C = range.s.c; C <= range.e.c; ++C) {
        //   const cell = XLSX.utils.encode_cell({ c: C, r: 0 });
        //   if (!sheet[cell]) continue;
        //   sheet[cell].s = { font };
        // }

        // // 设置单元格背景色
        // const fill = {
        //   type: "pattern",
        //   patternType: "solid",
        //   fgColor: { rgb: "FFFF00" },
        //   bgColor: { indexed: 64 },
        // };
        // for (let R = range.s.r + 1; R <= range.e.r; ++R) {
        //   for (let C = range.s.c; C <= range.e.c; ++C) {
        //     const cell = XLSX.utils.encode_cell({ c: C, r: R });
        //     if (!sheet[cell]) continue;
        //     sheet[cell].s = { fill };
        //   }
        // }
        // // sheet["A1"].s = {
        // //   fill: {
        // //     type: "pattern",
        // //     pattern: "solid",
        // //     fgColor: { rgb: "FF0000" },
        // //   },
        // // };
        // const style = { font: { color: { rgb: "FF0000" } } };
        // const cell = {
        //   t: "s",
        //   v: "Hello, world!",
        //   s: style,
        // };
        // const formatted = XLSX.utils.format_cell(cell);
        // console.log(formatted, "formatted");
        // XLSX.utils.book_append_sheet(workbook, sheet, "Sheet1");

        // XLSX.writeFile(workbook, "example.xlsx", { bookType: "xlsx" });

        // 创建 Workbook 和 Worksheet 对象
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet([
          ["Hello", "World"],
          ["Sheet", "JS"],
        ]);

        // 定义单元格样式
        const cellStyle = {
          font: { color: { rgb: "FFFF0000" } },
        };

        // 应用单元格格式和样式
        ws["A1"].v = "Hello, World!";
        ws["A1"].s = cellStyle;
        ws["B2"].v = "Sheet, JS";
        ws["B2"].s = cellStyle;

        // 将 Worksheet 添加到 Workbook 中
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

        // 将 Workbook 写入 XLSX 文件中
        XLSX.writeFile(wb, "example.xlsx");
      },
    },
    created() {},
  };
</script>

<style lang="scss" scoped></style>
