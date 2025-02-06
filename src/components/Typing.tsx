import {generate} from "random-words"
import { useState,useRef, useEffect,} from "react"
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Result from "./Result";

function Typing(){
    const myElementRef = useRef<HTMLInputElement>(null);
    const [wordsArray,setWordsArray] = useState<string[]>([])
    const wordsArrayRef = useRef<(HTMLDivElement| null) []>([])
    const [isOver, setIsOver] = useState(false)
    const [currWordIndex,setCurrWordIndex]= useState(0)
    const [currCharIndex,setCurrCharIndex]= useState(0)
    const [currTime,setCurrentTime]=useState(5)
    const [isActive,setIsActive]= useState(false)
    const [intervalId,setIntervalId]= useState<NodeJS.Timeout |null>( null)
    const [correctChar,setCorrectChar] = useState(0);
    const [currInterval,setCurrInterval]= useState(5)
    const [correctWords,setCorrectWords] = useState(0);
    const [correctCharsOfWord,setCorrectCharsOfWord] = useState(0);
    const [totalChar, setTotalChar]= useState(0)
    function updateWordsArray(){
        const array  = generate(50) as string[];
        setWordsArray(array);
   }
   const theme = useSelector((state:RootState)=>state.theme)

   useEffect(()=>{
    updateWordsArray()
    setIsOver(false )
    
   },[])
   useEffect(()=>{
    if (currWordIndex==0 && currCharIndex>0){
        setIsActive(true)
    }


   },[currCharIndex])

   useEffect(()=>{
    if (currTime<=0 || !isActive){
        if ( currWordIndex > 0  || currCharIndex >0){
            setIsOver(true)
            if (myElementRef.current) myElementRef.current.blur() 

        }
        console.log(wordsPerMinute(currInterval))
        console.log(getAccuracy())
        console.log("correctWords : ",correctWords)
        console.log("correct char : ",correctChar)
        console.log("total char : ",totalChar)
        return;
    }
    const interval = setInterval(()=>{
            setCurrentTime((currTime)=>currTime-1)

    },1000)
    setIntervalId(interval )
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
        
        // console.log(currCharIndex)
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
                setTotalChar(totalChar-1)
                // console.log(allCurrChar.length)

                if ((currCharIndex) ==allCurrChar.length){
                    // console.log([currCharIndex,currWordIndex])
                    
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

            if (wordsArrayRef.current[currWordIndex]?.childNodes.length==correctCharsOfWord) setCorrectWords(correctWords+1)
                setCorrectCharsOfWord(0);
            setCurrWordIndex(currWordIndex+1)
            let newTarget=wordsArrayRef.current[currWordIndex+1]?.childNodes[0] as HTMLSpanElement
            newTarget.classList.add("current");
            
            setCurrCharIndex(0);
        }
    
        if(event.key==allCurrChar[currCharIndex].innerText){
            allCurrChar[currCharIndex].style.color= theme.right
            setCurrCharIndex(currCharIndex+1); setCorrectChar(correctChar+1)
            setCorrectCharsOfWord(correctCharsOfWord+1)
            setTotalChar(totalChar+1)
            allCurrChar[currCharIndex+1].classList.add("current")
        }
        else if ( event.key!= allCurrChar[currCharIndex].innerText){
            allCurrChar[currCharIndex].style.color=theme.wrong
            setCurrCharIndex(currCharIndex+1)
            setTotalChar(totalChar+1)
            allCurrChar[currCharIndex+1].classList.add("current")
        }
    }

    function handleTimer(e:React.MouseEvent<HTMLDivElement>){
        setCurrentTime(parseInt(e.currentTarget.id)); 
        setCurrInterval(parseInt(e.currentTarget.id))
        // setIsActive(true); 
        setIsActive(false)
        myElementRef.current?.focus()
        updateWordsArray()
        if(intervalId!=null){
            clearInterval(intervalId)
        }
        setCurrCharIndex(0);
        setCurrWordIndex(0);
        setCorrectChar(0)
        setCorrectWords(0);
        setCorrectCharsOfWord(0)
        setIsOver(false);

        
    }
    function getAccuracy(){
        return Math.round((correctWords/currWordIndex)*100)
    }
    function wordsPerMinute(time:number){
        let wpm = (correctChar*60)/(5*time)
        return Math.round(wpm);
        
    }

    return (
        <div>
            <div style={{color:theme.primary}}  className="flex justify-between mb-[50px]">
            <div className="ml-[15%] text-4xl cursor-pointer" onClick={()=>{;myElementRef.current?.focus()} }>Timer:{currTime}</div>
            <div className="mr-[15%] flex gap-4 text-3xl">
                <div onClick={(e)=>handleTimer(e)} id="15" className="hover:cursor-pointer">15s</div>
                <div onClick={(e)=>handleTimer(e)} id="30"className="hover:cursor-pointer">30s</div>
                <div  onClick={(e)=>handleTimer(e)} id="45" className="hover:cursor-pointer">45s</div>
            </div>
            </div>
        <div onClick={handleDivClick} style={{color:theme.primary}}
         className={`${ isOver==true ? "hidden": "" } flex-wrap text-wrap break-words whitespace-normal mx-auto max-w-[1000px] overflow-wrap-break-word flex`}>
            {wordsArray.map((text,index)=>{
                return (
                    <div key={index} className="pr-4 text-2xl font-serif " ref={(element)=>{
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
        <div   className={`${ !isOver ==true ? "hidden": "" }  text-xl text-center mt-[30px]`} ><Result WordsPerMinute={wordsPerMinute(currInterval)} Accuracy={getAccuracy()} CorrectChars ={correctChar} CorrectWords ={correctWords} TotalChar={totalChar}></Result></div>
        <input onKeyDown={handleUserInput} className="text-white hide absolute opacity-0 w-0 h-0"  ref={myElementRef}  type="text"></input>
        </div>
    )
}

export default Typing   