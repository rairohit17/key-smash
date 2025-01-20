import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from "@mui/icons-material/TrendingDown"
import {motion} from "framer-motion"
export default function ListCard({value,index}:any){
    return (
        <motion.div
        initial={{x:-70 ,opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:0.5,delay:index*.09}}
         className="flex h-[100px]  items-center cursor-pointer rounded-2xl xl:px-[30px] sm:px-[10px] p-[5px] hover:bg-[var(--darkgray)] justify-between ">
            <img className="xl:h-[50px] sm:h-[40px] h-[30px] align-middle  " src={value.image} alt="" />
            <div className=' '>
                    <div className ="uppercase ml-4 xl:text-lg sm:text-md text-sm max-w-[20px] sm:max-w-max">{value.symbol}-USD</div>
                    <div className="capitalize ml-4 text-[var(--grey)] md:text-sm text-xs ">{value.name}</div>
                </div>
            <div className="flex justify-between mx-[20px]  ">

                <button disabled className={` ${value.price_change_percentage_24h > 0 ? 'hover:bg-[var(--green)] hover:text-[var(--white)]' :'hover:bg-[var(--red)] hover:text-[var(--white)]' } ${value.price_change_percentage_24h > 0 ? 'border-2 border-[var(--green)] text-[var(--green)]' :'border-2 border-[var(--red)] text-[var(--red)]' } border-2 xl:w-[90px] sm:w-[70px] w-[50px] rounded-[45px] xl:h-[40px] sm:h-[30px] h-[20px] xl:text-xl sm:text-lg text-xs transition duration-300 `}>{(value.price_change_percentage_24h).toFixed(2)}%</button>
                <button className={`${value.price_change_percentage_24h > 0 ? "" :"hidden"} sm:hover:bg-[var(--green)] sm:hover:text-[var(--white)] xl:text-xl text-md xl:w-[40px] sm:w-[30px] w-[20px] xl:h-[40px] sm:h-[30px] h-[20px]  ml-4 xl:rounded-[20px] sm:rounded-[20px] rounded-[20px]   sm:border-2 border-[var(--green)] text-[var(--green)] hover:bg-[var(--darkgray)] transition duration-300  `} > <TrendingUpIcon></TrendingUpIcon></button>
                <button disabled  className={`${value.price_change_percentage_24h > 0 ? 'hidden':"" } sm:hover:bg-[var(--red)] sm:hover:text-[var(--white)] xl:text-xl sm:text:sm text-xs xl:w-[40px] sm:w-[30px] h-[20px] xl:h-[40px] sm:h-[30px] h-[25 px] ml-4 rounded-[20px]  sm:border-2 border-[var(--red)] text-[var(--red)] transition duration-300 hover:bg-[var(--darkgray)] `} > <TrendingDownIcon></TrendingDownIcon></button>
            </div>
            <div className={`${value.price_change_percentage_24h > 0 ? 'text-[var(--green)]' :'text-[var(--red)]' } px-[35px] mt-[15px] xl:text-2xl sm:text-lg text-sm ` }>
                ${(value.current_price).toLocaleString()}
            </div>
            <div className='px-[35px]  text-[var(--white)] xl:text-xl sm:text-md text-xs mt-4 hidden sm:block'>{(Math.floor(value.total_supply)).toLocaleString()}</div>
            <div className='px-[35px] text-[var(--white)] xl:text-xl sm:text-md text-xs mt-4 hidden sm:block'>{(Math.floor(value.market_cap)).toLocaleString()}</div>



            

        </motion.div>
    )
}