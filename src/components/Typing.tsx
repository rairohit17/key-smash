import {generate} from "random-words"
import { useState,useRef, useEffect } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { setEngine } from "crypto";


function Typing(){
    const myElementRef = useRef<HTMLInputElement>(null);
    const [wordsArray,setWordsArray] = useState<string[]>([])
    const wordsArrayRef = useRef<(HTMLDivElement| null) []>([])

    const [currWordIndex,setCurrWordIndex]= useState(0)
    const [currCharIndex,setCurrCharIndex]= useState(0)
    const [currTime,setCurrentTime]=useState(15)
    const [isActive,setIsActive]= useState(false)

    function updateWordsArray(){
        const array  = generate(50) as string[];
        setWordsArray(array);
   }
   const theme = useSelector((state:RootState)=>state.theme)

   useEffect(()=>{
    updateWordsArray()
   },[])

   useEffect(()=>{
    if (currTime<=0 || !isActive){
        return;
    }
    const interval = setInterval(()=>{
            setCurrentTime((currTime)=>currTime-1)

    },1000)
    return ()=> clearInterval(interval)
   },[currTime,isActive])
   useEffect(()=>{
    // Reset all classes before setting up initial state
    wordsArrayRef.current.forEach((wordElement) => {
        if (wordElement) {
            Array.from(wordElement.children).forEach((charElement) => {
                
                charElement.classList.remove("current", "end-of-char");
                (charElement as HTMLSpanElement).style.color=""
            })
        }
    })

    if (myElementRef.current){
       myElementRef.current.focus()
    }
    let targetElement=wordsArrayRef.current[0]?.childNodes[0]
    if(targetElement instanceof HTMLSpanElement){
        (targetElement as HTMLElement).classList.add("current")
    }

    // Reset tracking states
    setCurrWordIndex(0)
    setCurrCharIndex(0)

  },[wordsArray]) 

    function handleDivClick(){
        if (myElementRef.current){
            myElementRef.current.focus()
        }
    }

    function handleUserInput(event: React.KeyboardEvent<HTMLInputElement>){
        
        console.log(currCharIndex)
        let allCurrChar  = wordsArrayRef.current[currWordIndex]?.childNodes as NodeListOf<HTMLSpanElement>   
    
        let targetElement=allCurrChar[currCharIndex] as HTMLSpanElement
        if(targetElement instanceof HTMLSpanElement){
            (targetElement as HTMLElement).classList.remove("current")
            
             
        }
          // handle BACKSPACE 
          if (event.key == "Backspace"){
            if(currCharIndex==0 && currWordIndex==0){ 
                targetElement.classList.add("current")
                return };
            if(currCharIndex!=0){
                // console.log(allCurrChar.length)

                if ((currCharIndex) ==allCurrChar.length){
                    console.log([currCharIndex,currWordIndex])
                    
                    allCurrChar[currCharIndex-1].classList.remove("end-of-char")
                    allCurrChar[currCharIndex-1].style.color=""
                    allCurrChar[currCharIndex-1].className="current pl-[2px]"
                    setCurrCharIndex(currCharIndex-1)
                    return;
                }
                allCurrChar[currCharIndex-1].style.color=""
                allCurrChar[currCharIndex-1].className="pl-[2px]"
                allCurrChar[currCharIndex-1].classList.add("current")
                setCurrCharIndex(currCharIndex-1)
            }
            else{
                setCurrWordIndex(currWordIndex-1)
                const ind= wordsArrayRef.current[currWordIndex-1]?.childNodes.length as number

                setCurrCharIndex(ind);
                (wordsArrayRef.current[currWordIndex-1]?.childNodes[ind-1]as HTMLSpanElement ).classList.add("end-of-char")


            }
            return
         }
         if (currCharIndex == allCurrChar.length-1){
            targetElement.classList.add("end-of-char")
        }     
    
                
       

      
        if (currCharIndex == (allCurrChar.length) && event.key==' '){
            const lastCharOfCurrentWord = wordsArrayRef.current[currWordIndex]?.childNodes[allCurrChar.length - 1] as HTMLSpanElement
            lastCharOfCurrentWord?.classList.remove("end-of-char")
    
            setCurrWordIndex(currWordIndex+1)
            let newTarget=wordsArrayRef.current[currWordIndex+1]?.childNodes[0] as HTMLSpanElement
            newTarget.classList.add("current");
            
            setCurrCharIndex(0);
        }
    
        if(event.key==allCurrChar[currCharIndex].innerText){
            allCurrChar[currCharIndex].style.color= theme.right
            setCurrCharIndex(currCharIndex+1)
            allCurrChar[currCharIndex+1].classList.add("current")
        }
        else if ( event.key!= allCurrChar[currCharIndex].innerText){
            allCurrChar[currCharIndex].style.color=theme.wrong
            setCurrCharIndex(currCharIndex+1)
            allCurrChar[currCharIndex+1].classList.add("current")
        }
    }

    return (
        <div>
            <div className="flex justify-between mb-[50px]">
            <div className="ml-[15%] text-4xl" onClick={()=>setIsActive(true)}>Timer:{currTime}</div>
            <div className="mr-[15%] flex gap-4 text-3xl">
                <div onClick={()=>{setCurrentTime(15); setIsActive(true)}} className="hover:cursor-pointer">15s</div>
                <div onClick={()=>{setCurrentTime(30); setIsActive(true)}}className="hover:cursor-pointer">30s</div>
                <div  onClick={()=>{setCurrentTime(45); setIsActive(true)}} className="hover:cursor-pointer">45s</div>
            </div>
            </div>
        <div onClick={handleDivClick} 
         className="flex-wrap text-wrap break-words whitespace-normal mx-auto max-w-[800px] overflow-wrap-break-word flex">
            {wordsArray.map((text,index)=>{
                return (
                    <div key={index} className="pr-4 text-2xl font-serif" ref={(element)=>{
                                                                wordsArrayRef.current[index]= element
                    }} >
                        {text.split("").map((char)=>{
                            return(
                                <span className="pl-[2px]">{char}</span>
                            )
                        })}
                    </div>
                )
            })}
        </div>
        <input onKeyDown={handleUserInput} className="text-white hide absolute opacity-0 w-0 h-0"  ref={myElementRef}  type="text"></input>
        </div>
    )
}

export default Typing