import React from 'react'
import * as XLSX from 'xlsx'
import data from './data/data';

const App =()=> {

  const convertFile =(parameter)=>{

    var array = [];

    data.map((item)=>{
      array.push(
        {
          "Sıra": item.row,
          "Məhsul": item.title,
          "Qiymət": item.price,
          "Kampaniya": item.priceLine ? "Bəli" : "---",
          "Endirimli Qiymət": item.campaignPrice,
        }
      )
    })

    return array;
  }



  function exportToExcel( data , filename) {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, filename);
  }



  return (
    <>
        <h2>App</h2>     

        <button onClick={()=>{
          exportToExcel(convertFile(data) , "mehsullar.xlsx")
        }}>Click</button>
    </>
  )
}

export default App
