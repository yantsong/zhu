const _ = require('lodash') 
async function action (){
const ExcelJS = require("exceljs");
const workbook = new ExcelJS.Workbook();

const targetExcel = new ExcelJS.Workbook();
const workSheet = targetExcel.addWorksheet("sheet");
await workbook.xlsx.readFile("new.xlsx");
const source = workbook.getWorksheet(1);
const map1 = {}
const newList = []
source.eachRow(function(row, rowNumber) {
    if(rowNumber < 2) return
  handleRows(row,map1);
})


// workSheet.columns = source._columns
// workSheet.addRow('123')
source.addRows([['123','4567']])
// await targetExcel.xlsx.writeFile((Math.random() + '.xlsx'));
rewrites(source, map1);

// await workbook.xlsx.writeFile(Math.random() + ".xlsx");



}
function getIndex (values,str) {
    return values.findIndex(value => value === str)
}
function handleRows(row, map1) {
  const { values } = row;
  const date = values[9];
  const name = values[2];
  const year = values[3];
  const price = values[7];
  if(name == '普通图书'){
      console.log(!map1[`${name},${date}`], "hhhhhh", map1[`${name},${date}`]);
  }
  // 没有name,先添加
  if (!map1[`${name},${date}`]) {
    map1[`${name},${date}`] = values;
  } else {
    map1[`${name},${date}`][15] = +map1[`${name},${date}`][15] + +values[15];
    map1[`${name},${date}`][7] = +map1[`${name},${date}`][7] + +values[7];
  }
}

async function rewrites(sheet, map, targetExcel, targetName = "test.xlsx") {
  // try to
  console.log(sheet, "ssssmap1");
  const targetValue = (Object.entries(map).map(([key,values]) => {
      // 价格更改
    //   const avaPrice = 
    //   values[7] = values[15] * values[7];
      //日期更改
      values[9] = values[9].slice(0,4)

      return values
    }));
//   Object.entries(map).forEach(([key, value]) => {
//       sheet.addRows(value);
// });
//   sheet.addRow(['1','2','3'])
//   sheet.columns = 
 sheet.addRows(targetValue)
  await sheet._workbook.xlsx.writeFile(Math.random()+ targetName);
}






















module.exports = action;