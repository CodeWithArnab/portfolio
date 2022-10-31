import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import avatar from '../public/avatar.png'
import movie from '../public/movie.jpg'
import ecomm from '../public/e-comm1.webp'
// import cv from '../public/cv.pdf'
import { useState } from 'react';
export default function Home() {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode? "dark" :""} >
      <Head>
        <title>Arnab Debnath Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 select-none dark:bg-gray-900 '>
        <section className='min-h-screen'>

          <nav className='py-10 flex mb-12 justify-between'>
            <h1 className='text-xl font-burtons dark:text-cyan-500'>Arnab Debnath</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill  onClick={()=>setDarkMode(!darkMode)} className='dark:text-white cursor-pointer text-2xl' /></li>
              <li><button  target="_blank"  className='bg-gradient-to-r from-blue-900 to-cyan-500 text-white px-4 py-2 rounded-md ml-8'>Resume</button></li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
          <h1 className={darkMode? "myName" :"text-5xl py-2 text-cyan-500 font-medium  "+"md:text-6xl"} >Arnab Debnath</h1>
            <h3 clasName='text-2xl py-3 md:text-3xl '>Developer and competitive programmer.</h3>
            <p className='text-md py-6 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>I am problem solver and I love to solve algorithmic problems a lot.
              I am a web Developer too and have worked on full stack Development
            </p>
          </div>
          <div className='text-5xl justify-center flex gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle className='cursor-pointer shadow-sm rounded-xl dark:shadow-cyan-500' onClick={()=> window.open("https://twitter.com/ARNAB_2002_", "_blank")}/>
            <AiFillLinkedin className='cursor-pointer shadow-sm  rounded-xl dark:shadow-cyan-500' onClick={()=> window.open("https://www.linkedin.com/in/arnab-debnath-46a462215/", "_blank")}/>
          </div>
          <div className='relative shadow-2xl dark:shadow-cyan-500 bg-none rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-1000 md:w-1000'>
            <img  src="avatar.png"   alt='#'/>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-12 text-center dark:text-cyan-500'>My Projects</h3>
            <p className='dark:text-white text-md py-2 leading-6 text-gray-800'>
              I have done projects on <span className='text-cyan-500'>Web Development</span> , focused more on <span className='text-cyan-500'>front-end</span> part.
            </p>
          </div>
          <div className=' lg:flex gap-10 '>
            <div onClick={()=> window.open("https://gonkartv1.herokuapp.com/", "_blank")} className='cursor-pointer dark:shadow-lg dark:shadow-cyan-500/50 text-center shadow-lg p-10 rounded-xl my-10'>
              <img alt='' className='mx-auto' src="e-comm1.webp" width={200} height={200}/>
              <h3 className='text-xl font-medium pt-8 pb-2 dark:text-cyan-400'>E-Commerce Website</h3>
              <p className='dark:text-white py-2 text-gray-800'>A full stack e-commerce website made by <span className='text-cyan-500'>HTML, CSS, JAVASCRIPT</span> and for the backend we have used <span className='text-cyan-500'>POSTGRESQL & PHP</span></p>
            </div>
            <div onClick={()=> window.open("https://soukarja.github.io/ImdbMovieWebsite_React/", "_blank")} className='  dark:shadow-lg cursor-pointer dark:shadow-cyan-500/50 text-center shadow-lg p-10 rounded-xl my-10'>
              <img alt='' className='mx-auto' src="movie.jpg" width={200} height={200}/>
              <h3 className='text-xl font-medium pt-8 pb-2 dark:text-cyan-400'>Movie-DB Website</h3>
              <p className='dark:text-white py-2 text-gray-800'>A Front-End movie-rating website made by <span className='text-cyan-500'>REACT, SASS, JAVASCRIPT, REACT-HOOKS, </span>
              It fetches data from   <span className='text-cyan-500'>API</span></p>
            </div>
          </div>
        </section>
        
      </main>


    </div>
  )
}
