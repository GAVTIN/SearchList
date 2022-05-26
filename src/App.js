import './App.css';
import React, {useState} from 'react'
import JSONDATA from './MockData'
// import {Data} from './mock_data'
export default function App() {
    const [s_data, setS_data] = useState("")
    const [flag, setFlag] = useState(true)
    function handleSearch(val){
        if(val !== ''){
            setFlag(false)
            let data = JSONDATA.filter(
                (item) =>
                  item.first_name.toLowerCase().indexOf(val.toLowerCase()) !== -1
              )
            setS_data(data);
        }
        else{

            setFlag(true)
        }
    }
     
    return (
      <>
        <input type="text" placeholder='Search Your Item Here....' id="search" onChange={(e) => handleSearch(e.target.value)}/>
        {
            (flag && JSONDATA.map((item) => (<li id={item.id}>{item.first_name}</li>))) || (s_data.map((item) => (<li id={item.id}>{item.first_name}</li>)))
        }
      </>
    );
  }