import React, { useState } from 'react';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { HiChevronDown, HiChevronUp, HiOutlineCreditCard, HiOutlineHome, HiOutlineUserAdd } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/logo/favicon.png';


const SideMenu = () => {
    const [accOpen, setAccOpen] = useState(false);
    const [cardOpen, setCardOpen] = useState(false);
    const [loanOpen, setLoanOpen] = useState(false);
    return (
        <div className='bg-gray-100 border-r-8 border-primary'>
            {/* small device button  */}
            {/* <div className='lg:hidden bg-black block'>
                <button onClick={() => setOpen(!open)} className={`p-2 ${open?"hidden":"block"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-100">
                        <rect width="352" height="32" x="80" y="96"></rect>
                        <rect width="352" height="32" x="80" y="240"></rect>
                        <rect width="352" height="32" x="80" y="384"></rect>
                    </svg>
                </button>
            </div> */}
            <div className={` lg:block   ${accOpen ? "block" : "left-0 bottom-0 top-0 hidden"}`}>
                <div className="flex min-h-screen flex-col p-3 w-60 text-primary">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <button onClick={() => setAccOpen(!accOpen)} className="p-2 lg:hidden">
                                X
                            </button>
                        </div>

                        <img src={logo} alt="logo" className='pr-6 w-2/3 flex mx-auto' />

                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm pr-4">

                                <li className="rounded-lg font-semibold text-primary hover:scale-110 py-2 hover:bg-primary hover:text-white hover:pl-4 duration-700">
                                    <NavLink to='/' className="flex items-center p-2 space-x-3 rounded-md">
                                        <HiOutlineHome />
                                        <span>Home</span>
                                    </NavLink>
                                </li>
                                <li
                                    className={`rounded-lg font-semibold text-primary hover:scale-110 py-2 hover:bg-primary hover:text-white hover:pl-4 w-full duration-700`}>
                                    <NavLink
                                        onClick={() => setAccOpen(!accOpen)}
                                        to='/' className="flex items-center justify-between p-2 space-x-3 rounded-md">
                                        <div className='flex items-center'>
                                            <HiOutlineUserAdd className='mr-2' />
                                            <span>Accounts</span>
                                        </div>
                                        {
                                            accOpen ?
                                                <HiChevronUp className='text-xl' />
                                                :
                                                <HiChevronDown className='text-xl' />
                                        }
                                    </NavLink>
                                    {
                                        accOpen &&
                                        <ul className='group ease-linear duration-700 z-40 rounded-lg shadow-md shadow-primary hover:shadow-lg hover:shadow-gray-700 p-2 bg-gray-100 w-full text-primary'>
                                            <li className="group-hover:scale-90 hover:!scale-125 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full  duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Student Account</NavLink>
                                            </li>
                                            <li className="group-hover:scale-90 hover:!scale-125 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Savings Account</NavLink>
                                            </li>
                                            <li className="group-hover:scale-90 hover:!scale-125 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Current Account</NavLink>
                                            </li>
                                            <li className="group-hover:scale-90 hover:!scale-125 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Fixed Deposit Account</NavLink>
                                            </li>
                                        </ul>
                                    }
                                </li>
                                <li
                                    className={`rounded-lg font-semibold text-primary hover:scale-110 py-2 hover:bg-primary hover:text-white hover:pl-4 w-full duration-700`}>
                                    <NavLink
                                        onClick={() => setCardOpen(!cardOpen)}
                                        to='/' className="flex items-center justify-between  p-2 space-x-3 rounded-md">
                                        <div className='flex items-center'>
                                            <HiOutlineCreditCard className='mr-2' />
                                            <span>Cards</span>
                                        </div>
                                        {
                                            cardOpen ?
                                                <HiChevronUp className='text-xl' />
                                                :
                                                <HiChevronDown className='text-xl' />
                                        }
                                    </NavLink>
                                    {
                                        cardOpen &&
                                        <ul className='group ease-linear duration-700 z-40 rounded-lg shadow-md shadow-primary hover:shadow-lg hover:shadow-gray-700 p-2 bg-gray-50 w-full text-primary'>
                                            <li className="group-hover:scale-90 hover:!scale-125 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full  duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Debit Card</NavLink>
                                            </li>
                                            <li className="group-hover:scale-90 hover:!scale-125 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Credit Card</NavLink>
                                            </li>
                                        </ul>
                                    }
                                </li>
                                <li
                                    className={`rounded-lg font-semibold text-primary hover:scale-110 py-2 hover:bg-primary hover:text-white hover:pl-4 w-full duration-700`}>
                                    <NavLink
                                        onClick={() => setLoanOpen(!loanOpen)}
                                        to='/' className="flex items-center justify-between p-2 space-x-3 rounded-md">
                                        <div className='flex items-center'>
                                            <FaHandHoldingUsd className='mr-2' />
                                            <span>Loans</span>
                                        </div>
                                        {
                                            loanOpen ?
                                                <HiChevronUp className='text-xl' />
                                                :
                                                <HiChevronDown className='text-xl' />
                                        }
                                    </NavLink>
                                    {
                                        loanOpen &&
                                        <ul className='group ease-linear duration-700 z-40 rounded-lg shadow-md shadow-primary hover:shadow-lg hover:shadow-gray-700 p-2 bg-gray-50 w-full text-primary'>
                                            <li className="group-hover:scale-90 hover:!scale-125 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full  duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Personal Loan</NavLink>
                                            </li>
                                            <li className="group-hover:scale-90 hover:!scale-125 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Home Loan</NavLink>
                                            </li>
                                            <li className="group-hover:scale-90 hover:!scale-125 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Student Loan</NavLink>
                                            </li>
                                            <li className="group-hover:scale-90 hover:!scale-125 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Car Loan</NavLink>
                                            </li>
                                        </ul>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;