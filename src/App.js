import './App.css';
import Navbar from './component/Navbar';
// import Bottom from './component/Bottom';
// import Hero from './component/Hero';
import img1 from './images/desktop-image-hero-1.jpg'
import arrow from '../src/images/icon-arrow.svg'
import left from './images/icon-angle-left.svg'
import right from './images/icon-angle-right.svg'

import img2 from './images/desktop-image-hero-2.jpg'
import img3 from './images/desktop-image-hero-3.jpg'
import { useState } from 'react';

import bimg1 from './images/image-about-dark.jpg'
import bimg2 from './images/image-about-light.jpg'

function App() {
     let images=[img1,img2,img3];
     let [index,setIndex]=useState(0);

     let leftClick=()=>{
      // current = index ===0?index-1:images.lenght-1
      // setIndex( current)
      // console.log(current)
      console.log(index);
        const isfirst = index===0;
        const newindex = isfirst?images.length-1:index-1;
        setIndex(newindex);
        console.log(index,images.length-1,index-1);


     }

     let rightClick=()=>{
      // setIndex( ()=>(index+1))
      // current = index ===0?index+1:images.lenght+1
      // setIndex( current)
      // console.log(current)
      const islast = index===images.length-1;
        const newindex = islast?0:index+1;
        setIndex(newindex);

     }

  return (
    <div className="App">
       <div className="container md:w-screen w-full md:h-screen h-auto">
       
       <div className="top w-full flex md:flex-row flex-col h-60">
          
          {/* image hero */}
          <div className="container md:w-3/5 w-full bg-blue-200 h-full relative">
              <Navbar/>
              {/* image-container */}
              <div className="container w-full h-full">

                  <img src={images[index]} alt="hero-1" className='h-full w-full ' />
                   {/* slider botton */}
              <div className="container flex w-3/12 h-8  bottom-0 right-0 justify-between  bg-black absolute md:hidden rounded border-0">
                
                <button className='hover:bg-slate-300 w-1/2 flex items-center justify-center h-full' onClick={leftClick}><img className='' src={left} alt=""  /></button>
                <button className='hover:bg-slate-300 w-1/2 flex items-center justify-center' onClick={rightClick} ><img className='' src={right} alt="" /></button>
            </div>
              </div>
          </div>
          {/* hero text */}

          <div className="container md:w-2/5 w-full h-full flex flex-col justify-center items-center relative">
                {/* text container */}
              <div className=' md:w-9/12 w-10/12 pt-8'>

               <h2 className='md:text-4xl text-4xl font-bold mb-2 md:mt-3' >
                Discover innovative ways to decorate
                </h2>

                <p className='md:text-sm text-md mb-4 text-slate-600'>
                We provide unmatched quality, comfort, and style for property owners across the country.
                Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
                </p>

                {/* arrow */}

                <div className="container flex justify-between items-center text-lg md:w-11/12 w-3/5 mb-8">
                  <p className='uppercase text-lg tracking-[0.5rem] font-semibold md:font-medium'>shop</p>
                  <p className='uppercase text-lg tracking-[0.5rem] font-semibold md:font-medium'>now</p>
                  <img className='uppercase md:w-3/12 h-1/5 ' src={arrow} alt="" />
                </div>

              </div>
              {/* slider botton */}
              <div className="container hidden md:flex w-3/12 h-8  bottom-0 left-0 justify-between  bg-black absolute">
                
                  <button className='hover:bg-slate-300 w-1/2 flex items-center justify-center' onClick={leftClick}><img className='' src={left} alt="" /></button>
                  <button className='hover:bg-slate-300 w-1/2 flex items-center justify-center' onClick={rightClick}><img className='' src={right} alt=""  /></button>
              </div>
          </div>

       </div>

              {/* <Bottom/> */}
        <div className="bottom flex md:flex-row flex-col w-full h-45">
          

           {/* first */}
           <div className=" w-full md:w-35 h-full">
            <img src={bimg1} alt="" className='h-full full' />
           </div>
            {/* second */}
            <div className=" w-full md:w-45 flex justify-center items-center h-full">
              <div className="container w-10/12 pt-8 pb-8">
                <h3 className='text-xl mb-4 font-bold tracking-[0.2rem]'> ABOUT OUR FURNITURE</h3>
                <p className='text-md text-slate-600'>
                Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you.
                Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
              </div>
            </div>

             {/* third */}
             <div className="bg-white w-full md:w-35 h-full">
             <img src={bimg2} alt="" className='h-full full' />
            </div>

        </div>
      </div>
    </div>
  );
}

export default App;
