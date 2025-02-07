import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Input } from './ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";

function Header() {
  const theme = useSelector((state: RootState) => state.theme);
  const [currAuth, setCurrAuth] = useState("login")
  console.log(currAuth)

  return (
    <div className="flex justify-between mx-[100px]">
      <div
        style={{ color: theme.secondary }}
        className="text-4xl font-orbitron flex-center mt-[30px] justify-between text-center h-auto"
      >
        KEY-SMASH
      </div>
     
    <div className='flex  mt-[35px]'>
    <LuInfo  style={{color:theme.secondary}}className=' hover:cursor-pointer text-xl mr-[30px] ' ></LuInfo>
    <div >
        <Dialog>
          <DialogTrigger><FaRegUser style={{color:theme.secondary}}></FaRegUser></DialogTrigger>
          <DialogContent
            style={{ backgroundColor: theme.background, color: theme.primary }}
            className="w-[400px] h-[450px]"
          >
            <DialogHeader>
              <DialogTitle
                style={{ color: theme.secondary }}
                className="text-black text-center"
              ></DialogTitle>
              <DialogDescription>
                <Tabs defaultValue="login" className="w-[350px]">
                  <TabsList
                    style={{ backgroundColor: theme.background }}
                    className="grid w-full grid-cols-2"
                  >
                    <TabsTrigger
                      value="signup"
                      className="py-2 "
                      style={{backgroundColor:currAuth=="signup"?theme.primary:theme.background,color:currAuth=="signup"?theme.background:theme.primary}}
                      onClick={()=>setCurrAuth("signup")}
                      
                    >
                      Signup
                    </TabsTrigger>
                    <TabsTrigger
                           
                      value="login"
                      className="py-2  "
                      
                      style={{backgroundColor:currAuth=="login"?theme.primary:theme.background,color:currAuth=="login"?theme.background:theme.primary}}
                      onClick={()=>setCurrAuth("login")}
                      
                    >
                      Login
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="signup">
                    <div
                      style={{ color: theme.primary }}
                      className="grid w-full max-w-sm items-center mt-[50px] gap-1.5"
                    >
                      <Input type="email" id="email" placeholder="Email" />
                    </div>
                    <div
                      style={{ color: theme.primary }}
                      className="grid w-full max-w-sm items-center mt-[30px] gap-1.5"
                    >
                      <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <div
                      style={{ color: theme.primary }}
                      className="grid w-full max-w-sm items-center mt-[30px] mb-[50px] gap-1.5"
                    >
                      <Input
                        type="password"
                        id="password"
                        placeholder="Confirm Password"
                      />
                                            <button style={{backgroundColor:theme.primary , color:theme.background} }  className=' rounded-md font-bold py-[6px] mt-[30px]'> Signup</button>

                    </div>
                  </TabsContent>
                  <TabsContent value="login">
                    <div
                      style={{ color: theme.primary }}
                      className="grid w-full max-w-sm items-center mt-[50px] gap-1.5"
                    >
                      <Input type="email" id="email" placeholder="Email" />
                    </div>
                    <div
                      style={{ color: theme.primary }}
                      className="grid w-full max-w-sm items-center mt-[30px] gap-1.5"
                    >
                      <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                      />
                      <button style={{backgroundColor:theme.primary , color:theme.background} }  className=' rounded-md font-bold py-[6px] mt-[30px]'> Login</button>
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        

      </div>
    </div>
     
    </div>
  );
}

export default Header;