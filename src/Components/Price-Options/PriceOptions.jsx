import { useEffect, useState } from "react";
import PriceOption from "../Price-Option/PriceOption";


const PriceOptions = () => {

    const [priceOptions,setPriceOptions]=useState([]);

    useEffect(()=>{
        fetch(`options.json`)
        .then(res=> res.json())
        .then(data=> setPriceOptions(data))
    },[])
    return (

        
        <div className="grid grid-cols-3 container mx-auto gap-6 p-7">
            {
                priceOptions.map(option=> <PriceOption option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;