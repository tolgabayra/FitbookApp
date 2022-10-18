import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { Input, Progress, Skeleton, Spinner } from "@chakra-ui/react"
import { InputGroup, InputRightElement, Button } from "@chakra-ui/react"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import { appAxios } from "../utils/appAxios"
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';




export default function Login() {

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const toast = useToast()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)


  const submitLogin = () => {
    appAxios.post("/api/v1/auth/login",{
      email,
      password
    },{withCredentials: true})
    .then((res) => {
      console.log(res);
      toast({
        title: 'Giriş Başarılı.',
        description: "Yönlendiriliyorsunuz....",
        status: 'success',
        position: "top-right",
        duration: 2000,
        isClosable: true,
      })
      setLoading(true)
      setTimeout(() => {
        dispatch(login())
        navigate("/dashboard/home")
        setLoading(false)
      }, 2000);
      localStorage.setItem("username", res.data.username)
      localStorage.setItem("_id", res.data._id)

      Navigate
    })
    .catch(err=>{
      console.log(err);
      toast({
        title: 'Giriş İşlemi Başarısız.',
        description: "Epostanızı ve parolanızı kontrol ediniz",
        status: 'error',
        position: "top-right",
        duration: 2000,
        isClosable: true,
      })
    })
  }

  return (
    <div>
      {loading && <Progress size="xs" isIndeterminate />}
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center font-Archivo">
        <div
          className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
        >
          <div
            className="p-4 py-6 text-white bg-purple-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
          >
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="#">Fit Book.</a>
            </div>
            <p className="mt-6 font-normal text-center text-gray-100 md:mt-0">
             Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? 
            </p>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Hesabınız yok mu?</span>
              
              <Link to="/register" className="underline">Hadi başlayalım!</Link>
            </p>
           
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">Giriş Yap</h3>
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label for="email" className="text-sm font-semibold text-gray-500">E-posta</label>
                <Input onChange={(e)=>setEmail(e.target.value)} placeholder='example@example.com' />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label for="password" className="text-sm font-semibold text-gray-500">Şifre</label>
                  <Link to="/forget_password" className="text-sm text-purple-600 hover:underline focus:text-purple-800">Şifremi Unuttum?</Link>
                </div>
                <InputGroup size='md'>
                  <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Şifrenizi Giriniz...'
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                      {show ? 'Gizle' : 'Göster'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </div>
          
              <div>
                <button
                  type="submit"
                  onClick={submitLogin}
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-purple-500 rounded-md shadow hover:bg-purple-600 focus:outline-none focus:ring-purple-200 focus:ring-4"
                >
                  Giriş Yap
                </button>
              </div>
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-14"></span>
                  <span className="font-normal text-gray-500">or login with</span>
                  <span className="h-px bg-gray-400 w-14"></span>
                </span>
                <div className="flex flex-col space-y-4">
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                  >
                    <span>
                      <svg
                        className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                        viewBox="0 0 16 16"
                        version="1.1"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-white">Github</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-purple-500 rounded-md group hover:bg-purple-500 focus:outline-none"
                  >
                    <span>
                      <svg className="text-purple-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                        <path
                          d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-purple-500 group-hover:text-white">Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
