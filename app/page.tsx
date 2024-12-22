"use client"
import { useState, useEffect } from "react"
// react icons
import { IoMdArrowDropupCircle } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";

// Define the API response type
interface RateData {
  BTC: number;
  BNB: number;
  ETH: number;
  DOGE: number;
  ACT: number;
  DASH: number;
  SOL: number;
}

interface ApiResponse {
  rates: RateData;
}

export default function Home() {
  const API_KEY = "c2e9e86d85c918c3344d7b64d938d8c3";
  
  // Use the defined ApiResponse type for the state
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted: ApiResponse) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);

  return (
    <div className="home-page">
      <div className="upper-box slide-in-top">
        <div className="up-text-1">
          <div><h1 className="d-h1">Crypto Dashboard</h1><p>Hi, Dawood take a look at today market</p></div>
          <div><h3>Total Profit</h3><p>12 November 2024</p></div>
        </div>
        <div className="list">
          <div className="innerlist"><h4>BTC:</h4> <p>{data?.rates?.BTC ?? 95000.00}$</p> <p className="percen">{Math.ceil(data?.rates?.BTC ?? 0)}%</p> </div>
          <div className="innerlist"><h4>BNB:</h4> <p>{data?.rates?.BNB ?? 656.245}$</p> <p className="percen">{Math.ceil(data?.rates?.BNB ?? 0)}%</p> </div>
          <div className="innerlist"><h4>ETH:</h4> <p>{data?.rates?.ETH ?? 3500.876}$</p> <p className="percen">{Math.ceil(data?.rates?.ETH ?? 0)}%</p> </div>
          <div className="innerlist"><h4>DOGE:</h4> <p>{data?.rates?.DOGE ?? 0.987}$</p> <p className="percen-red">{Math.ceil(data?.rates?.DOGE ?? 0)}%</p> </div>
          <div className="innerlist"><h4>ACT:</h4> <p>{data?.rates?.ACT ?? 1.456}$</p> <p className="percen-red">{Math.ceil(data?.rates?.ACT ?? 0)}%</p> </div>
          <div className="innerlist"><h4>DASH:</h4> <p>{data?.rates?.DASH ?? 6.78}$</p> <p className="percen-red">{Math.ceil(data?.rates?.DASH ?? 0)}%</p> </div>
          <div className="innerlist"><h4>SOL:</h4> <p>{data?.rates?.SOL ?? 16.78}$</p> <p className="percen-yellow">{Math.ceil(data?.rates?.SOL ?? 0)}%</p> </div>
        </div>
      </div>
      <div className="lower-box">
        <div className="col-1 slide-in-blurred-bottom">
          <span>current</span>
          <h1>Bitcoin Price</h1>
          <div className="price"><IoMdArrowDropupCircle className="arrow-icon"/>
          {data?.rates?.BTC ?? 95000.00 }$</div>
        </div>
        <div className="col-2 slide-in-blurred-bottom">
        <span>current</span>
          <h1>Ethereum Price</h1>
          <div className="price"><IoMdArrowDropupCircle className="arrow-icon"/>
          {data?.rates?.ETH ?? 3500.876}$</div>
        </div>
        <div className="col-3 slide-in-blurred-bottom">
        <span>current</span>
          <h1>Dogecoin Price</h1>
          <div className="price"><IoMdArrowDropdownCircle className="arrow-icon"/>
          {data?.rates?.DOGE ?? 0.987}$</div>
        </div>
      </div>
    </div>
  )
}
