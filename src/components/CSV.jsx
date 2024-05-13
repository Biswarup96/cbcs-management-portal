import React, { useEffect, useState } from 'react'
import CSVReader from 'react-csv-reader';

function CSV() {
  const [data, setData] = useState([]);
   
  useEffect( ()=>{
    const getuserdata=async()=>{
      const userreq=await fetch('"C:\Users\BISWARUP\Downloads\annual-enterprise-survey-2021-financial-year-provisional-csv.csv"');
      const userres= await userreq.json();
      console.log(userres);
      setData(userres);


    }
    getuserdata();
  },[]);

  const handleSubmit = () => {
    // console.log("submit")
    console.log(data);
  }

  return (
    <>
    <CSVReader onFileLoaded={(data, fileInfo, originalFile) => setData(data)} />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default CSV;