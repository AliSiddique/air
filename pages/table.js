import Head from 'next/head'
import { useState } from 'react';
import Link from 'next/link';

const Table = () => {
    const [navbar, setNavbar] = useState(false);

    return ( 
        <>
                 <Head>
        <title>Tutorial Heaven</title>
        <link rel="icon" href="/fav.png" />
      </Head>

<div>

<nav className="w-full bg-gray-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                <h2 className="text-2xl text-white font-bold">Tutorial Heaven</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="https://twitter.com/alhaown">
                    <a target="_blank">Twitter</a>
                  </Link>
                </li>
             
                <li className="text-white">
                  <Link href="https://twitter.com/alhaown">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    <div className='text-center'>
        <h1 className='font-bold text-5xl mb-5 mt-20'>Tutorial heaven</h1>
        <p className='mx-20 text-xl mb-3' >Want to learn more but dont know where to start?</p>
        <p className='mx-20 text-xl mb-10'>look through our database with more than 100 tutorials in a wide range of topics, with new coming every week.</p>
    </div>
    <iframe className="airtable-embed w-50 text-center block m-auto mb-10" src="https://airtable.com/embed/shrWOjQIIqoxikIVa?backgroundColor=cyan&viewControls=on" frameborder="0" onmousewheel="" width="70%" height="533" ></iframe>

</div>







<footer className="bg-white dark:bg-gray-800 w-full py-8">
    <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
      
            <li className="my-2">
                <a target="_blank" className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="https://github.com/AliSiddique">
                    Github
                </a>
            </li>
            <li className="my-2">
                <a target="_blank" className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="https://www.linkedin.com/in/alihsiddique/">
                    LinkedIn
                </a>
            </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
       
            <a href="https://twitter.com/alhaown" className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                <svg width="20" height="20" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                    </path>
                </svg>
            </a>
            <a href="https://github.com/AliSiddique" className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                    </path>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/alihsiddique/" className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                <svg width="20" height="20" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                    </path>
                </svg>
            </a>
    
        </div>
        <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
            Created by Ali
        </div>
    </div>
</footer>

</>
     );
}
 
export default Table;