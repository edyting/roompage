import hum from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import { useState } from 'react';
const Navbar = () => {
            let [icon,setIcon]=useState(true);

            let change=(e)=>{
                setIcon(icon =>(!icon));
                
            }

            let image= icon? hum:close;
            let show=icon?'hum':'close';

    return ( 
        <div>

            <div className={`container flex md:space-x-10 items-center md:justify-between space-x-36   pt-4 absolute showdefault${show} transition ease delay-1000 w-view`}>
                
                {/* menu */}

            <div className="container w-8 md:hidden">
                <a  className='w-8 flex justify-start'>
                    <img src={image} alt="" className='ml-6 ' onClick={change} />
                </a>
            </div>
                {/* logo */}
                <h1 className="text-3xl md:text-4xl  capitalize font-bold text-white ">
                    room
                </h1>

                {/* links */}
                <div className="md:flex items-center space-x-5 capitalize  bg-transparent hidden text-xl">
                    <a href="/Bottom" className="text-white  hover:underline underline-offset-4 text-9" > home</a>
                    <a href="/Bottom" className="text-white text-9 hover:underline underline-offset-4"> shop</a>
                    <a href="/Bottom" className="text-white text-9 hover:underline underline-offset-4"> about</a>
                    <a href="/Bottom" className="text-white text-9 hover:underline underline-offset-4"> contact</a>
                </div>
            </div>

             {/* mobile menu */}

             <div className={`show${show} transition ease-in delay-1000 absolute w-full`}>
                      <div className="container flex space-x-16 bg-white p-8 pl-0 ">

                            <a  className='w-8 flex justify-start'>
                                <img src={image} alt="" className='ml-6 w-6'   onClick={change} />
                            </a>

                             <div className="flex items-center space-x-3 capitalize z-2 bg-transparent bg-white">

                            <a href="/Bottom" className=" text-7 hover:underline underline-offset-4" > home</a>
                            <a href="/Bottom" className=" text-7 hover:underline underline-offset-4"> shop</a>
                            <a href="/Bottom" className=" text-7 hover:underline underline-offset-4"> about</a>
                            <a href="/Bottom" className=" text-7 hover:underline underline-offset-4"> contact</a>
                            </div>
                        </div>
                      </div>
        </div>
     );
}
 
export default Navbar;