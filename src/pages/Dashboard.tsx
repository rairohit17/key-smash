
    import LandingPage from "./LandingPage";
    import CustomTabs from "../components/Tabs"
    import React, { useEffect,useState } from "react";
    import axios from "axios";



    function Dashboard(){

        const [coins,setCoins] = useState([])

        useEffect(()=>{
            axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100",{
                headers: {
                    "Accept":"application/json",
                    "x-cg-demo-api-key":"CG-qgs6fp3teN6A4XUifygdTvU6"
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