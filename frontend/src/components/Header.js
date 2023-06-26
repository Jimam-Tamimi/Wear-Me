'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname, } from 'next/navigation'
import Cart from './Cart'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@/redux/slices/account/accountSlice'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Products', href: '/products' },
]

export default function Header() {
    const pathname = usePathname()
    if (pathname.startsWith("/account/")) {
        return
    }
    const account = useSelector(state => state.account)
    console.log()


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const dispatch= useDispatch()

    return (
        <>
            <header className={`${pathname == '/' ? "absolute" : 'relative'}  inset-x-0 top-0 z-50  m-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8`}>
                <nav className="flex items-center justify-between py-6" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="w-auto h-8"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </Link>
                    </div>

                    <div className="hidden lg:flex  lg:gap-x-12 lg:justify-between items-center" >
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 transition-all duration-300 ease-in-out hover:text-indigo-600 hover:font-black ">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {
                                account?.account?.isAuthenticated?
                                <button onClick={e => dispatch(logout())} className=" ease-in-out duration-300   rounded-md border hover:border-transparent  border-indigo-600   text-sm px-3 py-1 font-medium text-indigo-600 hover:text-white shadow-sm hover:bg-indigo-600">Logout</button>:
                                <Link href='/account/login/' className=" ease-in-out duration-300   rounded-md border hover:border-transparent  border-indigo-600   text-sm px-3 py-1 font-medium text-indigo-600 hover:text-white shadow-sm hover:bg-indigo-600">Login</Link>
                            }
                            </div>

                    </div>


                    <div style={{ marginRight: "50px" }} className="hidden mr-2 lg:flex lg:flex-1 lg:justify-end">

                    </div>
                    <div className="flex ml-auto mr-3 ">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            {
                                <AiOutlineShoppingCart onClick={e => setOpenCart(true)} className="h-7 w-7" aria-hidden="true" />
                            }
                        </button>
                    </div>

                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                        </button>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="w-auto h-8"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="flow-root mt-6">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="py-6 space-y-2">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
            <Cart open={openCart} setOpen={setOpenCart} />

        </>

    )
}
