async function action() {
  var Excel = require("exceljs");
  // create workbook by api.
  var workbook = new Excel.Workbook();

  // must create one more sheet.
  var target = workbook.addWorksheet("My Sheet");

  var sourceBook = new Excel.Workbook();
  await sourceBook.xlsx.readFile("new.xlsx");
  var source = sourceBook.getWorksheet(1);
  const resultArray = [];

  target.columns = [
    {
      header: "卡片编号",
      key: "A",
      width: 14,
      style: { font: { name: "宋体", size: 14 } },
    },
    {
      header: "222",
      key: "B",
      width: 14,
      style: {
        font: { name: "宋体", size: 14 },
        // numFmt: '"£"#,##0.00;[Red]-"£"#,##0.00',
        alignment: { vertical: "middle", horizontal: "center" },
      },
    },
    {
      header: "资产名称",
      key: "C",
      width: 14,
      style: { font: { name: "宋体", size: 14 } },
    },
    {
      header: "资产名称",
      key: "D",
      width: 14,
      style: { font: { name: "宋体", size: 14 } },
    },
    {
      header: "",
      key: "S",
      width: 2,
      style: { font: { name: "宋体", size: 14 } },
    },
    {
      header: "卡片编号",
      key: "E",
      width: 14,
      style: { font: { name: "宋体", size: 14 } },
    },
    {
      header: "222",
      key: "F",
      width: 14,
      style: { font: { name: "宋体", size: 14 } ,  alignment: { vertical: "middle", horizontal: "center" },},
    },
    {
      header: "资产名称",
      key: "G",
      width: 14,
      style: {
        font: { name: "宋体", size: 14 },
      
      },
    },
    {
      header: "资产名称",
      key: "H",
      width: 14,
      style: { font: { name: "宋体", size: 14 } },
    },
  ];
  const cardsTitle = {
    A:[{key:'卡片编号',value:1},{key:'价值(元)',value:7},{key:'入账时间',value:4}],
    C:[{key:'资产名称',value:3},{key:'使用状态',value:'在用'},{key:'使用部门',value:''}]
  }
  let prevRowValue = {}
  source.eachRow(function (row, rowNumber) {
    const {values} = row
    let A = '卡片编号'
    let BValue = prevRowValue[1];
    let C = "资产名称";
    let DValue = prevRowValue[3];
    let FValue = values[1]
    let HValue = values[3];
    const S = ''
    function addRow(){
        target.addRow({ A, B: BValue, C, D: DValue, E: A, F: FValue, G: C, H: HValue,S });
    }
    if( rowNumber > 1 ){
      if((rowNumber - 1) % 2 !== 0){
        prevRowValue = values;
      } else {
        addRow();
        A = cardsTitle.A[1]['key']
        C = cardsTitle.C[1]['key']
        BValue = prevRowValue[7]
        DValue = HValue = '在用'
        FValue = values[7]
         addRow();
        A = cardsTitle.A[2]['key'];
        C = cardsTitle.C[2]['key'];
        BValue = prevRowValue[4];
        FValue = values[4];
        DValue = HValue = "";
         addRow();
         target.addRow([,,,,,,,,])
      }
    }
    // handleRows(row, map1);
  });
  function handleRows({ values }) {
    // const
    //
  }

  // you can create xlsx file now.
  // target.columns = [{ header: "111" }, { header: "222" }, { header: "333" }];
  // target.addRows([["1434", "21353", "2134"]]);
  await workbook.xlsx.writeFile(Math.random() + ".xlsx");
}

module.exports = action;
