import React from 'react'
import { Link } from 'react-router-dom'


export default function Landing() {
    return (
        <div className=' font-Archivo'>

            <section className="w-full px-8 text-gray-700 bg-white">
                <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div className="relative flex flex-col md:flex-row">
                        <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">Fit Book<span className="text-purple-600">.</span></span>
                        </a>
                        <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Anasayfa</a>
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Hakkımızda</a>
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Fiyatlandırma</a>
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Blog</a>
                        </nav>
                    </div>

                    <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                        <Link to="/login" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                            Giriş Yap
                        </Link>
                        <Link to="/register" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
                            Kayıt Ol
                        </Link>
                    </div>
                </div>
            </section>

            <section className="px-2 py-32 bg-white md:px-0">
                <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-3">
                            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                    <span className="block xl:inline">Fitbook ile tariflerin  </span>
                                    <span className="block text-purple-600 xl:inline">
                                        En güzel ve en doğru yeri
                                    </span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                                    Ücretsiz bir şekilde hesap oluşturup, kendi yaptığın tarifleri paylaşabileceğin ve bunlardan geri dönüş alabiliceğin bir platformdur
                                </p>
                                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                    <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-600 rounded-md sm:mb-0 hover:bg-purple-700 sm:w-auto">
                                        Ücretsiz Kayıt Olun
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                    <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                                        Daha fazla
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                    <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                        <img src="https://img.freepik.com/free-photo/beef-doner-with-bread-stuffed-with-potato-fries-served-wood-board_140725-1296.jpg?w=740&t=st=1664880580~exp=1664881180~hmac=3aab9eeaca958c82a11b0789617649f6a9e8eb13bfbc55d92aa468ced3fc89c2" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20" style={{borderRadius: '50px'}} />
                    </div>

                    <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            Birbirinden Farklı Harika Tarifler
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                            Sizde üye olup, tariflerinizi paylaşıp yayınlayabilirsiniz.
                        </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-purple-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Zengin kategori çeşitleri
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-purple-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Gelişmiş filtreleme
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-purple-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Sade ve şık bir arayüz
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

                    <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                           İçerik Yönetim Paneli
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                            Panel sayaesinde tariflerinizin, istatisliklerini görebilir ve gelişmiş arayüz sayesinde birçok işlemi bir arada.
                        </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-purple-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Haftalık ve aylık tarif istatiklikleri
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-purple-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Tarif düzenleme,planlama ve yönetimi
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-purple-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Yıldızlı tarifler ile hatırlatma
                            </li>
                        </ul>
                    </div>

                    <div className="box-border p-20 relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                        <img src="https://img.freepik.com/free-photo/graph-growth-success-strategy-marketing-computer-concept_53876-47081.jpg?w=740&t=st=1664975095~exp=1664975695~hmac=5f4feae17f9f54eccfd898cd7efafe7838111cc1760420cebe29b9d722807133" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32 rounded-3xl" />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container items-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                            <div className="w-full lg:max-w-md">
                                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Sende bu ailenin bir parçası ol</h2>
                                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">Ücretsiz bir şekilde kayıt olarak tariflerini paylaşmaya başlayabilirsin.</p>
                              
                            </div>
                        </div>
                        <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full" src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="feature image" /></div>
                    </div>
                </div>
            </section>

            <section className="flex items-center justify-center py-20 bg-white min-w-screen">
                <div className="px-16 bg-white">
                    <div className="container flex flex-col items-start mx-auto lg:items-center">
                        <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">Yaşamak için ye ve yemek için yaşama!</p>


                        <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                                </path>
                            </svg>
                            Mutlu Kullanıcılar</h2>
                        <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

                        <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
                
                            <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                                <div className="flex items-center justify-center">
                                    <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80" className="object-cover w-full h-full" />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <h4 className="font-bold text-gray-800">Jane Doe</h4>
                                        <p className="text-gray-600">CTO of Foodor</p>
                                    </div>
                                </div>
                                <blockquote className="mt-8 text-lg text-gray-500">"Bu platform sayesinde, çok harika tarifler ve arkadaşlar edindim."</blockquote>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                                <div className="flex items-center justify-center">
                                    <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80" className="object-cover w-full h-full" />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <h4 className="font-bold text-gray-800">John Smith</h4>
                                        <p className="text-gray-600">Creator of Stuff</p>
                                    </div>
                                </div>
                                <blockquote className="mt-8 text-lg text-gray-500">"Bir spor koçu olarak, takımım ve çalışma arkadaşlarım olarak bu platformu seve seve kullanıyoruz ve öneriyoruz.
                                "</blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="box-border py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
                <div className="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
                    <div className="flex flex-col items-center leading-7 text-center text-gray-900">
                        <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                            Fiyatlandırma Politikamız
                        </h2>
                        <p className="box-border mt-4 text-2xl leading-normal text-gray-900 border-solid">
                            İhtiyaçlarınıza göre bir plan seçebilirsiniz
                        </p>
                    </div>
                    <div className="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300 border-purple-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
                        <div className="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                                Free
                            </h3>
                            <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                                Her kullanıcı için, paylaşım yapabileceği bir pakettir.
                            </p>
                            <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                                <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                                    $19
                                </p>
                                <p className="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                                     <span className="block">Aylık</span>
                                </p>
                            </div>

                            <button className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-purple-600 no-underline bg-transparent border border-b-2 border-purple-600 rounded-md cursor-pointer hover:bg-purple-600 hover:border-purple-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
                                Seçin
                            </button>
                        </div>
                        <div className="box-border px-4 py-8 mb-6 text-center bg-gray-100 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                                Plus
                            </h3>
                            <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                                Plus kullanıcıları, aylık olarak istatislik bilgisi ve daha fazlasına erişebilir.
                            </p>
                            <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                                <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                                    $39
                                </p>
                                <p className="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                                 <span className="block">Aylık</span>
                                </p>
                            </div>
                            <button className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-white no-underline bg-purple-600 border-b-4 border-purple-700 rounded cursor-pointer hover:text-white sm:text-base sm:mt-8 md:text-lg">
                                Seçin
                            </button>
                        </div>
                        <div className="box-border px-4 py-8 text-center bg-white border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                                Pro
                            </h3>
                            <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                                Kendi tarif havuzunu oluşturup, para kazanmaya başlayabilirsiniz.
                            </p>
                            <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                                <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                                    $59
                                </p>
                                <p className="box-border my-0 ml-4 mr-0 text-xs text-center border-0 border-gray-200">
                                     <span className="block">Aylık</span>
                                </p>
                            </div>
                            <button className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-purple-600 no-underline bg-transparent border border-b-2 border-purple-600 rounded cursor-pointer hover:bg-purple-600 hover:border-purple-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
                                Seçin
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Hakkımızda
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Blog
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                İletişim
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Fiyatlandırma
                            </a>
                        </div>


                    </nav>
                    <div className="flex justify-center mt-8 space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                            </svg>
                        </a>

                    </div>
                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        © 2022 Fit Book, Inc. All rights reserved.
                    </p>
                </div>
            </section>


        </div>
    )
}
