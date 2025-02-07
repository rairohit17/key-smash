import { useDispatch,useSelector } from "react-redux"
import { changeTheme } from "../states/theme-state"
import { RootState } from "../store";
import themes from "../utils/themes";
import { Theme } from "../states/theme-state";
import light from "../assets/GitHub_Invertocat_Light.png"
import dark from "../assets/dark.png"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "./ui/dropdown-menu"
import { useRef } from "react";
  
export default function Footer(){
    const dispatch= useDispatch();
    const refer = useRef<(HTMLDivElement| null) []>([])

    function handleButtonClick(theme:Theme){
        dispatch(changeTheme({
            name:theme.name,
            background:theme.background,
            primary:theme.primary,
            secondary:theme.secondary,
            right:theme.right,
            wrong:theme.wrong,

        }))
        localStorage.setItem("theme",JSON.stringify(theme.name))

        

    }
    const currentTheme= useSelector((state:RootState)=>state.theme)

    return(
        <div className="flex flex-col justify-end h-full  mb-3 ">
        
        <div className="flex justify-between p-4 mx-[20%]">
            <a href="https://github.com/rairohit17/key-smash">
            <img  className=" w-[30px] hover:cursor-pointer"src={light } alt="" />

            </a>
        
            <DropdownMenu  >
        <DropdownMenuTrigger style={{color:currentTheme.primary}}  className=" hover:opacity-65 font-orbitron border-none text-2xl px-5">{(currentTheme.name).toUpperCase()}</DropdownMenuTrigger>
        <DropdownMenuContent style={{backgroundColor:currentTheme.background}}  className="bg-black text-white">
        <DropdownMenuLabel style={{color:currentTheme.primary}}>THEMES</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themes.map((theme,index)=>{
            return (
                <DropdownMenuItem ref={(element)=>refer.current[index]=element} onMouseEnter={()=>{
                    if (refer.current[index]){refer.current[index].style.color="black"}
                }} onMouseLeave={()=>{
                    if (refer.current[index]){refer.current[index].style.color=currentTheme.primary}
                }} style={{color:currentTheme.primary}} onClick={()=>{handleButtonClick(theme)}} className="hover:text-black"> {theme.name}</DropdownMenuItem>
            )
        })}
        
        </DropdownMenuContent>
        </DropdownMenu>
        </div>
        
        
      </div>
    )
}