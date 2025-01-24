import {generate} from "random-words"
import { useState,useRef, useEffect } from "react"

function Typing(){
    const myElementRef = useRef<HTMLInputElement>(null);
    const [wordsArray,setWordsArray] = useState<string[]>([])
    const wordsArrayRef = useRef<(HTMLDivElement| null) []>([])

    const [currWordIndex,setCurrWordIndex]= useState(0)
    const [currCharIndex,setCurrCharIndex]= useState(0)

    function updateWordsArray(){
        const array  = generate(50) as string[];
        setWordsArray(array);
   }

   useEffect(()=>{
    updateWordsArray()
   },[])

   useEffect(()=>{
    // Reset all classes before setting up initial state
    wordsArrayRef.current.forEach((wordElement) => {
        if (wordElement) {
            Array.from(wordElement.children).forEach((charElement) => {
                charElement.classList.remove("current", "end-of-char", "text-[var(--green)]", "text-[var(--red)]")
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
            if(currCharIndex!=0){
                // console.log(allCurrChar.length)

                if ((currCharIndex) ==allCurrChar.length){
                    console.log([currCharIndex,currWordIndex])
                    
                    allCurrChar[currCharIndex-1].classList.remove("end-of-char")
                    allCurrChar[currCharIndex-1].className="current"
                    setCurrCharIndex(currCharIndex-1)
                    return;
                }
                
                allCurrChar[currCharIndex-1].className=""
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
            allCurrChar[currCharIndex].classList.add("text-[var(--green)]")
            setCurrCharIndex(currCharIndex+1)
            allCurrChar[currCharIndex+1].classList.add("current")
        }
        else if ( event.key!= allCurrChar[currCharIndex].innerText){
            allCurrChar[currCharIndex].classList.add("text-[var(--red)]")
            setCurrCharIndex(currCharIndex+1)
            allCurrChar[currCharIndex+1].classList.add("current")
        }
    }

    return (
        <div>
        <div onClick={handleDivClick} 
         className="flex-wrap text-wrap break-words whitespace-normal mx-auto max-w-[600px] mt-[200px] overflow-wrap-break-word flex">
            {wordsArray.map((text,index)=>{
                return (
                    <div key={index} className="pr-3" ref={(element)=>{
                                                                wordsArrayRef.current[index]= element
                    }} >
                        {text.split("").map((char)=>{
                            return(
                                <span className="">{char}</span>
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