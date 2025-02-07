import { useSelector } from "react-redux";
import {RootState} from "../store" 

function Header (){
    const theme  = useSelector((state:RootState)=> state.theme)
    return (
        <div  style = {{color:theme.secondary}}className=" text-4xl font-orbitron flex-center mt-[30px] justify-between text-center h-auto">
            KEY-SMASH</div>
    )
}

export default Header;