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
import { FaRegUser } from 'react-icons/fa';
import { LuInfo } from 'react-icons/lu';
import GoogleButton from 'react-google-button';
import { toast, ToastContainer } from 'react-toastify';
import { auth, } from '../firebase.config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  firebaseErrorMessages,
  signInErrorMessages,
} from '../utils/firebaseErrors';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function Header() {
  const theme = useSelector((state: RootState) => state.theme);
  const [currAuth, setCurrAuth] = useState('login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  // console.log(email)
  // console.log(password)
  function handleSignupClick() {
    if (!email || !password || !confirmPass) {
      toast.warn(' enter all the input fields ', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        style: {
          backgroundColor: theme.background,
          color: theme.secondary,
        },
      });
      return;
    }
    if (password != confirmPass) {
      toast.warn(' passwords mismatch ', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        style: {
          backgroundColor: theme.background,
          color: theme.secondary,
        },
      });
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success(' Sign up successful ', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          style: {
            backgroundColor: theme.background,
            color: theme.secondary,
          },
        });
      })
      .catch((err) => {
        console.log(err.message);
        const message =
          firebaseErrorMessages[err.code as string] ||
          'an unexpected error occured';
        toast.warn(message, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          style: {
            backgroundColor: theme.background,
            color: theme.secondary,
          },
        });
      });
  }
  function handleLoginClick() {
    if (!email || !password) {
      toast.warn(' enter all the input fields ', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        style: {
          backgroundColor: theme.background,
          color: theme.secondary,
        },
      });
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success(' Login successful ', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          style: {
            backgroundColor: theme.background,
            color: theme.secondary,
          },
        });
      })
      .catch((err) => {
        console.log(err.code);
        let message =
          signInErrorMessages[err.code as string] ||
          ' an unexpected error occured please try after some time ';
        toast.warn(message, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          style: {
            backgroundColor: theme.background,
            color: theme.secondary,
          },
        });
      });
  }

  function handleGoogleLogin() {
    const googleAuth = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuth)
      .then(() => {
        toast.success('  Google Login Successful ', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          style: {
            backgroundColor: theme.background,
            color: theme.secondary,
          },
        });
      })
      .catch(() => {
        toast.warn('Googles Authentication Failed', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          style: {
            backgroundColor: theme.background,
            color: theme.secondary,
          },
        });
      });
  }
  return (
    <div className="flex justify-between mx-[100px]">
      <div
        style={{ color: theme.secondary }}
        className="text-4xl font-orbitron flex-center mt-[30px] justify-between text-center h-auto"
      >
        KEY-SMASH
      </div>
      <ToastContainer></ToastContainer>

      <div className="flex  mt-[35px]">
        <LuInfo
          style={{ color: theme.secondary }}
          className=" hover:cursor-pointer text-xl mr-[30px] "
        ></LuInfo>
        <div>
          <Dialog>
            <DialogTrigger>
              <FaRegUser
                onClick={() => setCurrAuth('login')}
                style={{ color: theme.secondary }}
              ></FaRegUser>
            </DialogTrigger>
            <DialogContent
              style={{
                backgroundColor: theme.background,
                color: theme.primary,
              }}
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
                        style={{
                          backgroundColor:
                            currAuth == 'signup'
                              ? theme.primary
                              : theme.background,
                          color:
                            currAuth == 'signup'
                              ? theme.background
                              : theme.primary,
                        }}
                        onClick={() => {
                          setCurrAuth('signup');
                          setPassword('');
                          setEmail('');
                        }}
                      >
                        Signup
                      </TabsTrigger>
                      <TabsTrigger
                        value="login"
                        className="py-2  "
                        style={{
                          backgroundColor:
                            currAuth == 'login'
                              ? theme.primary
                              : theme.background,
                          color:
                            currAuth == 'login'
                              ? theme.background
                              : theme.primary,
                        }}
                        onClick={() => {
                          setCurrAuth('login');
                          setPassword('');
                          setEmail('');
                        }}
                      >
                        Login
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="signup">
                      <div
                        style={{ color: theme.primary }}
                        className="grid w-full max-w-sm items-center mt-[50px] gap-1.5"
                      >
                        <Input
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                          }
                          autoComplete="off"
                          type="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                      <div
                        style={{ color: theme.primary }}
                        className="grid w-full max-w-sm items-center mt-[30px] gap-1.5"
                      >
                        <Input
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                          }
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
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setConfirmPass(e.target.value)
                          }
                          type="password"
                          id="password"
                          placeholder="Confirm Password"
                        />
                        <button
                          style={{
                            backgroundColor: theme.primary,
                            color: theme.background,
                          }}
                          onClick={handleSignupClick}
                          className=" rounded-md font-bold py-[6px] mt-[30px]"
                        >
                          Signup
                        </button>
                        <div className="text-center mt-2">or</div>
                        <GoogleButton
                          onClick={handleGoogleLogin}
                          style={{ width: '350px' }}
                        ></GoogleButton>
                      </div>
                    </TabsContent>
                    <TabsContent value="login">
                      <div
                        style={{ color: theme.primary }}
                        className="grid w-full max-w-sm items-center mt-[50px] gap-1.5"
                      >
                        <Input
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                          }
                          type="email"
                          id="email"
                          placeholder="Email"
                          autoComplete="off"
                        />
                      </div>
                      <div
                        style={{ color: theme.primary }}
                        className="grid w-full max-w-sm items-center mt-[30px] gap-1.5"
                      >
                        <Input
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                          }
                          type="password"
                          id="password"
                          placeholder="Password"
                        />
                        <button
                          onClick={handleLoginClick}
                          style={{
                            backgroundColor: theme.primary,
                            color: theme.background,
                          }}
                          className=" rounded-md font-bold py-[6px] mt-[30px]"
                        >
                          Login
                        </button>
                        <div className="text-center mt-2">or</div>
                        <GoogleButton
                          onClick={handleGoogleLogin}
                          style={{ width: '350px' }}
                        ></GoogleButton>
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
