import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function GridCard({value}:any){


    return (
        <div className="h-[300px] bg-[var(--darkgray)] w-[300px]  rounded-2xl">
            <div className="flex px-[35px] pt-[35px] pb-[25px] ">
                <img className="max-h-[40px]" src={value.image} alt="coin-image" />
                <div>
                    <div className ="uppercase ml-4">{value.symbol}-USD</div>
                    <div className="capitalize ml-4 text-[var(--grey)] text-sm ">{value.name}</div>
                </div>
            </div>
            <div className="px-[35px]">
                <button className={`${value.price_change_percentage_24h > 0 ? 'border-2 border-[var(--green)] text-[var(--green)]' :'border border-[var(--red)] text-[var(--red)]' } border-2 w-[90px] rounded-[45px] h-[40px]`}>{(value.price_change_percentage_24h).toFixed(2)}</button>
                 <button className={`${value.price_change_percentage_24h > 0 ? 'border-2 border-[var(--green)] text-[var(--green)]' :'border-2 border-[var(--red)] text-[var(--red)]' } text-xl w-[40px] h-[40px]  ml-4 rounded-[20px] `} > <TrendingUpIcon></TrendingUpIcon></button>
            </div>
            <div className={`${value.price_change_percentage_24h > 0 ? 'text-[var(--green)]' :'text-[var(--red)]' } px-[35px] mt-[15px] text-2xl` }>
                ${(value.current_price).toLocaleString()}
            </div>
            <div className='px-[35px] text-sm text-[var(--grey)] mt-4'>Total Volume : ${(Math.floor(value.total_supply)).toLocaleString()}</div>
            <div className='px-[35px] text-sm text-[var(--grey)] mt-4'>Market Cap : ${(Math.floor(value.market_cap)).toLocaleString()}</div>


        </div>
    )
}

export default GridCard
