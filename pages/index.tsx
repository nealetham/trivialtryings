import Head from 'next/head';
import Link from 'next/link';
import {BsFillMoonStarsFill, BsFillSunFill, BsShieldFillCheck, BsBookFill} from 'react-icons/bs';
import {AiFillMail, AiFillLinkedin, AiFillGithub, AiFillDatabase} from 'react-icons/ai';
import Image from "next/image";
import desktop from "../public/desktop.png";
import self from "../public/self-photo.jpg";
import synth from "../public/vaporwave.gif";
import {useState} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  let toggleIcon;

  if (darkMode) {
    toggleIcon = < BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-4xl text-gray-900 dark:text-white px-2 ml-4'/>
  } else {
    toggleIcon = < BsFillSunFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-4xl text-gray-900 dark:text-white px-2 ml-4'/>
  }

  
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>TRIVIALTRYINGS - Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <main className="bg-white px-20 dark:bg-black content-center">
        <section className='min-h-screen' id='top'>
          <nav className='p-10 mb-12 sm:flex flex-wrap justify-evenly'>
            <a className='text-2xl font-burtons dark:text-white flex justify-center ' href='#top'>trivialtryings</a>
            <ul className='flex justify-evenly'>
              <li>
                {toggleIcon}
              </li>
              <li>
                <a className='text-2xl font-burtons text-gray-800 dark:text-white pt-4 ml-4' href='#about'>about</a>
              </li>
              <li>
                <a className='text-2xl font-burtons text-gray-800 dark:text-white pt-4 ml-4' href='#projects'>projects</a>
              </li>
              <li>
                <a className='text-2xl font-burtons text-gray-800 dark:text-white pt-4 ml-4' href="../Neale_Resume.pdf" target="_blank" rel="noopener noreferrerr">resume</a>
              </li>
              {/* <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                      href='#'>Resume</a>
              </li> */}

            </ul>
          </nav>
          <div className='container mx-auto text-center'>
            <h2 className='text-2xl text-gray-800 dark:text-white'>Hello there! This is</h2>
            <h2 className='text-5xl text-teal-500 font-medium font-burtons'>neale.</h2>
            <h3 className='text-xl py-4 leading-8 text-gray-800 dark:text-white'>I'm a 23 year old aspiring Software Engineer from Singapore, and <br/>I dabble in tech stuff.</h3>
          </div>
          <div className='flex justify-center flex-col items-center pt-14'>
            <Image src={desktop} className='static z-10' alt={"desktop"} />
            {/* <div className='relative lg:bottom-96 lg:-mt-16 z-0 sm:bottom-96 sm:-mt-14 bottom-96 sm:h-72 sm:w-72 h-56 w-56'> */}
            {/* <div className='relative bottom-80 -mt-4 h-52 w-52  sm:-mt-16 sm:bottom-96  sm:h-72 sm:w-72'> */}
            <div className='relative bottom-56 h-36 w-36  sm:-mt-16 sm:bottom-96  sm:h-72 sm:w-72'>
              <Image src={synth}  alt={"vaporwave"} />
            </div>
          </div>
        </section>

        <section id="about">
          <h1 className='text-center text-4xl text-teal-500 mb-10'>About Me</h1>
            <div className='container mx-auto lg:px-60 dark:text-white'>
              <div className='relative lg:float-right my-4 rounded-full overflow-hidden w-44 h-44 sm:w-60 sm:h-60 mx-auto'>
                <Image src={self} layout="fill" alt={"self-photo"} objectFit="cover"/>
              </div>

              <div className='sm:p-10'>
                <h2 className='text-2xl py-2 leading-8 text-gray-800 dark:text-white' >I'm a Year 2 Computer Science student at the National University of Singapore.</h2>
                <p className='font-medium py-2 text-gray-800 dark:text-white' >I'm currently exploring my interests and have dipped my toes in 
                  Computer Networks, Database Systems and Computer Security. </p>
                <p className='py-2 text-gray-800 dark:text-white'>You might be wondering why the domain is named <span className='italic text-teal-500'>trivialtryings</span>. By definition,</p>
                <blockquote className='indent-10 font-thin italic py-2' cite="https://www.merriam-webster.com/thesaurus/trivial">
                  trivial - as in minor or lacking importance.
                </blockquote>
                <blockquote className='indent-10 font-thin italic py-2' cite="https://www.merriam-webster.com/thesaurus/trying">
                  trying - as in hard or difficult to endure.
                </blockquote>
                <p className='py-2 text-gray-800 dark:text-white'>I believe that trying new things should be trivial, and that trivial matters should not be trying.</p>
              </div>


              <div className='container sm:px-10 sm:pt-0 pt-5 text-3xl flex justify-start gap-16 text-gray-900'>
                <Link href="https://www.linkedin.com/in/nealetham" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin className="cursor-pointer dark:text-white" />
                </Link>
                <Link href="https://github.com/nealetham" target="_blank">
                  <AiFillGithub className="cursor-pointer dark:text-white" />
                </Link> 
                <Link href="mailto:neale.tgc@gmail.com" target="_blank">
                  <AiFillMail className="cursor-pointer dark:text-white"/>
                </Link>
              </div>

            </div>



        </section>


        <section id="projects">
          <h1 className='text-center text-4xl text-teal-500 mt-40'>Projects</h1>
            <div className='lg:flex gap-10 pb-24'>
              <div className='text-center text-gray-800 dark:text-white shadow-lg dark:shadow-sm dark:shadow-teal-500 p-10 rounded-xl my-10'>
                <div className='flex gap-1 justify-center items-center pb-5 h-12'>
                  <AiFillDatabase className='text-3xl'/>
                  <a className='text-lg font-medium px-5' href="https://ay2223s1-cs2103t-w12-3.github.io/tp" target="_blank" rel="noopener noreferrer">RC4 Housing Database</a>
                </div>

                <p className='pt-5'>RC4HDB imitates a HRMS that is used to manage the personal information of up to 500 hall residents.</p>
                <h4 className='font-medium pt-8 pb-2'>Built with</h4>
                <p>Java JavaFX Junit Gradle Codecov Figma PlantUML</p>
              </div>

              <div className='text-center dark:text-white shadow-lg dark:shadow-sm dark:shadow-teal-500 p-10 rounded-xl my-10'>
                <div className='flex gap-1 justify-center items-center pb-5 h-12'>
                  <BsShieldFillCheck className='text-3xl'/>
                  <a className='text-lg font-medium px-5' href="https://github.com/nseah21/lifehack22" target="_blank" rel="noopener noreferrer">Scam Detector {'(Hackathon)'}</a>
                </div>

                <p className='pt-5'>Scam Detector was inspired by <span className='italic'>ScamAlert</span> as a soluion for users to search and report potential sources of scams.</p>
                <h4 className='font-medium pt-8 pb-2'>Built with</h4>
                <p>JavaScript Python React Firebase Scrapy</p>
              </div>

              <div className='text-center dark:text-white shadow-lg dark:shadow-sm dark:shadow-teal-500 p-10 rounded-xl my-10'>
                <div className='flex gap-1 justify-center items-center pb-5 h-12'>
                  <BsBookFill className='text-3xl'/>
                  <a className='text-lg font-medium px-5' href="https://github.com/nealetham/orbital-studylonglong" target="_blank" rel="noopener noreferrer">STUDYLONGLONG</a>
                </div>

                <p className='pt-5'>STUDYLONGLONG is a mobile appllication aimed at encouraging productive habits through gamification.</p>
                <h4 className='font-medium pt-8 pb-2'>Built with</h4>
                <p>JavaScript React Native Expo Figma Firebase</p>
              </div>
            </div>
        </section>

      </main>
    </div>
  )
}
