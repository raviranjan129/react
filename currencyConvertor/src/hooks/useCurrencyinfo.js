//we use js in file bcz it majorly returns js if it return jsx then it will name as .jsx;

import { useEffect,useState } from 'react'

function useCurrencyInfo(currency){

    const [data ,setData] = useState({})
    useEffect(()=>{
        fetch( `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`)
            .then((res)=> res.json())
            .then((res) => setData(res[currency]))
            console.log(data)
    },[currency])

    console.log(data);
    return data;
}


export default useCurrencyInfo;