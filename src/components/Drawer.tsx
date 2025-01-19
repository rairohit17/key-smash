// import * as React from 'react';
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function AnchorTemporaryDrawer() {
  
  const [open,setOpen] = useState(false);
  

  
 

  return (
    <div className=' md:hidden inline-block '>
      
       
           <MenuIcon className='text-[var(--grey)] hover:text-[var(--white)]   ' onClick={()=>setOpen(true)}></MenuIcon>
          
          <Drawer 
            anchor={"right"}
            open={open}
            onClose={()=> setOpen(false)}
          >
            <div className='w-[250px] bg-[var(--black)] text-[var(--grey)] h-full p-[30px]'>
            <div className='py-[10px] cursor-pointer' >Home</div>
            <div className='py-[10px] cursor-pointer'>Watchlist</div>
            <div className='py-[10px] cursor-pointer'>Compare</div>
            <div className='py-[10px] cursor-pointer'>Dashboard</div>
            </div>
            
            
          </Drawer>
        
      
    </div>
  );
}