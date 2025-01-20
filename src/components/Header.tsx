import React from 'react'
import AnchorTemporaryDrawer from './Drawer'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='flex justify-between items-end p-6 sticky top-0 bg-[var(--black)]  z-10  '>
        <h1 className='text-[1.2rem] md:text-[2rem] font-semibold'>Chain Chase <span className='text-[var(--green)]'>.</span> </h1>
        <div className='  md:flex  items-end center gap-[1rem] hidden  font-medium text-[var(--grey)]  mr-[30px]'>
            <a className=' hover:text-white p-[10px] transition duration-700 hover:text-[var(--white)] hidden md:inline-block  ' href="">Home</a>
            <a  className=" hover:text-white p-[10px] transition duration-500 hover:text[var(--white)] hidden md:inline-block" href="">Watchlist</a>
            <a  className=" hover:text-white p-[10px] transition duration-500 hover:text[var(--white)] hidden md:inline-block" href="">Compare</a>

            <button className='bg-[#33b249] w-[150px] text-[white]  rounded-[80px] h-[45px]   transition duration-300 hidden md:inline-block hover:shadow-sm  hover:shadow-[var(--green)]'>
            <a  className='  hover:text-white p-[10px] transition duration-500 hover:text[var(--white)] hidden md:inline-block' href="">Dashboard</a>
            </button>
           
        </div>
        <AnchorTemporaryDrawer   ></AnchorTemporaryDrawer>
    </div>
  )
}

export default Header