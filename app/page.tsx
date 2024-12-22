"use client"
import { useState, useEffect } from "react"
// react icons
import { IoMdArrowDropupCircle } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";

export default function Home() {
  const API_KEY = "c2e9e86d85c918c3344d7b64d938d8c3";
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState<any>(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);

    // const [data, setData] = useState<any>([]);

    // useEffect(async () => {
    //     let apidata = await fetch("https://api.coinlayer.com/live?1ba013220468f0efb7f8c56f01b74492");
    //     apidata = await data.json();
    //     console.log(apidata);
    //     setData(apidata)
    // }, [])
    
  return (
    <div className="home-page">
      <div className="upper-box slide-in-top">
        <div className="up-text-1">
          <div><h1 className="d-h1">Crypto Dashboard</h1><p>Hi, Dawood take a look at today market</p></div>
          <div><h3>Total Profit</h3><p>12 November 2024</p></div>
        </div>
        <div className="list">
          <div className="innerlist"><h4>BTC:</h4> <p>{data?.rates?.BTC}$</p> <p className="percen">{Math.ceil(data?.rates?.BTC)}%</p> </div>
          <div className="innerlist"><h4>BNB:</h4> <p>{data?.rates?.BNB}$</p> <p className="percen">{Math.ceil(data?.rates?.BNB)}%</p> </div>
          <div className="innerlist"><h4>ETH:</h4> <p>{data?.rates?.ETH}$</p> <p className="percen">{Math.ceil(data?.rates?.ETH)}%</p> </div>
          <div className="innerlist"><h4>DOGE:</h4> <p>{data?.rates?.DOGE}$</p> <p className="percen-red">{Math.ceil(data?.rates?.DOGE)}%</p> </div>
          <div className="innerlist"><h4>ACT:</h4> <p>{data?.rates?.ACT}$</p> <p className="percen-red">{Math.ceil(data?.rates?.ACT)}%</p> </div>
          <div className="innerlist"><h4>DASH:</h4> <p>{data?.rates?.DASH}$</p> <p className="percen-red">{Math.ceil(data?.rates?.DASH)}%</p> </div>
          <div className="innerlist"><h4>SOL:</h4> <p>{data?.rates?.SOL}$</p> <p className="percen-yellow">{Math.ceil(data?.rates?.SOL)}%</p> </div>
        </div>
      </div>
      <div className="lower-box">
        <div className="col-1 slide-in-blurred-bottom">
          <span>current</span>
          <h1>Bitcoin Price</h1>
          <div className="price"><IoMdArrowDropupCircle className="arrow-icon"/>
          {data?.rates?.BTC}$</div>
        </div>
        <div className="col-2 slide-in-blurred-bottom">
        <span>current</span>
          <h1>Ethereum Price</h1>
          <div className="price"><IoMdArrowDropupCircle className="arrow-icon"/>
          {data?.rates?.ETH}$</div>
        </div>
        <div className="col-3 slide-in-blurred-bottom">
        <span>current</span>
          <h1>Dogecoin Price</h1>
          <div className="price"><IoMdArrowDropdownCircle className="arrow-icon"/>
          {data?.rates?.DOGE}$</div>
        </div>
      </div>
    </div>
  )
}
