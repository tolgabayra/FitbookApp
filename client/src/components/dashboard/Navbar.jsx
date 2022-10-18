import React from 'react'
import { FaTimesCircle } from "react-icons/fa"
import { Avatar, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, useToast } from "@chakra-ui/react"
import { Link, useNavigate } from 'react-router-dom'
import { appAxios } from '../../utils/appAxios'




export default function Navbar() {
    const toast = useToast()
    const navigate = useNavigate()

    const logout = () => {
      appAxios.post("/api/v1/auth/logout")
      .then(() => {
        localStorage.clear()
        toast({
            title: 'Çıkış İşlemi Başarılı.',
            description: "Giriş Ekranına Yönlendiriliyorsunuz",
            status: 'success',
            position: "top-right",
            duration: 2000,
            isClosable: true,
          })
          setTimeout(() => {
            navigate("/login")
            window.location.reload()
          }, 2000);
      })
      .catch(err=>{
        console.log(err);
      })
    }

    return (
        <div>
            <header className="fixed right-0 top-0 left-40 bg-purple-50 py-3 px-10 h-16 font-Archivo ml-4 mr-4">
                <nav className=" flex flex-col lg:flex-row lg:items-center flex-shrink-0">
                    <div className="flex justify-between items-center lg:mr-32">
                        <span className="text-dark text-xl"></span>
                        <button className="border border-dark px-2 py-1 rounded text-dark opacity-50 hover:opacity-75 lg:hidden" id="navbar-toggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className="hidden lg:flex flex-grow" id="navbar-collapse">
                        <ul className="flex flex-col mt-3 mb-1 lg:flex-row lg:mx-auto lg:mt-0 lg:mb-0">

                        </ul>
                        <div className="flex">
                            <Popover>
                                <PopoverTrigger>
                                    <Avatar name='' h={10} w={10} className='cursor-pointer' src='https://bit.ly/tioluwani-kolawole' />
                                </PopoverTrigger>
                                <Portal>
                                    <PopoverContent mr={12} ml={12}>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverBody>
                                            <Link className='text-gray-600 hover:text-gray-500' to="/dashboard/settings">Ayarlar</Link>
                                        </PopoverBody>
                                        <PopoverBody>
                                            <Link className='text-gray-600 hover:text-gray-500' to="/dashboard/me">Profil</Link>
                                        </PopoverBody>
                                        <PopoverFooter>
                                            <Link className='text-red-600 hover:text-red-500' onClick={logout}>Çıkış Yap</Link>
                                        </PopoverFooter>
                                    </PopoverContent>
                                </Portal>
                            </Popover>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
