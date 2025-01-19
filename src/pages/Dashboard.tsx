 
import CustomTabs from "../components/Tabs"
import  { useEffect,useState } from "react";
import axios from "axios";


    function Dashboard(){
        // console.log("hi")


        const [coins,setCoins] = useState([])
        useEffect(()=>{
            console.log("hi")
            console.log(import.meta.env.VITE_COIN_GECKO_API_KEY)
            axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100",{
                headers: {
                    "Accept":"application/json",
                    "x-cg-demo-api-key": `${import.meta.env.VITE_COIN_GECKO_API_KEY}`
                }
            }).then((result)=>{ setCoins(result.data)
                
            } )
            


        },[])
        console.log(coins)
       
      
        return (<div>

            
            <CustomTabs data={coins}></CustomTabs>


        </div>
        )

    }

    export default Dashboard