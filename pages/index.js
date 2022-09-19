import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
export default function Home() {
    const [navbar, setNavbar] = useState(false);
    const [email, setEmail] = useState('');


  return (
    
    <div>
       <Head>
        <title>Tutorial Heaven</title>
        <link rel="icon" href="/fav.png" />
        
        <script async src="/scripts/ml.js"></script>
        <script async src="/scripts/click.js"></script>

      </Head>
   
  
      <nav className="w-full bg-gray-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
              <a >
                <h2 className="text-2xl text-white font-bold">Tutorial Heaven</h2>
              </a>
              </Link>
        
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
                    <a rel="noreferrer" target="_blank">Twitter</a>
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











<section id='news' className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white animate-pulse">Sign up for our newsletter</h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the tutorials you need, feel free to sign up with your email.</p>
          <div className="ml-form-embed mb-10"
          data-account="3736937:h9l7j8g0x8"
          data-form="5763401:v7d5h7">
        </div>

  {/* <Image className='hidden' src="https://track.mailerlite.com/webforms/o/5763401/v7d5h7?v1663011768" width={1} height={1} alt="." border="0"/> */}
<div  id="mlb2-5763401" className="hidden ml-form-embedContainer ml-subscribe-form ml-subscribe-form-5763401">
  <div className="hidden ml-form-align-center">
    <div className="hidden ml-form-embedWrapper embedForm">
      <div className="hidden ml-form-embedBody ml-form-embedBodyHorizontal row-form">
        <div className="ml-form-embedContent mb-0"></div>
        <form className="ml-block-form" action="https://static.mailerlite.com/webforms/submit/v7d5h7" data-code="v7d5h7" method="post" target="_blank">
          <div className="ml-form-formContent horozintalForm">
            <div className="ml-form-horizontalRow">
              <div className="ml-input-horizontal">
                <div className='w-100 horizontal-fields'>
                  <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <input type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autoComplete="email"/>
                  </div>
                </div>
              </div>
              <div className="ml-button-horizontal primary">
                <button type="submit" className="primary">Get Free Access</button>
                <button disabled="disabled"  type="button" className="loading hidden"> <div className="ml-form-embedSubmitLoad"></div> <span className="sr-only">Loading...</span> </button>
              </div>
            </div>
          </div>
          <input type="hidden" name="ml-submit" value="1"/>
          <div className="ml-mobileButton-horizontal">
            <button type="submit" className="primary">Get Free Access</button>
            <button disabled="disabled" type="button" className="loading hidden"> <div className="ml-form-embedSubmitLoad"></div> <span className="sr-only">Loading...</span> </button>
          </div>
          <input type="hidden" name="anticsrf" value="true"/>
        </form>
      </div>
      <div className="ml-form-successBody row-success hidden">
        <div className="ml-form-successContent">
          <h4>Thank you!</h4>
          <p>You have successfully joined our subscriber list.</p>
        </div>
      </div>
    </div>
  </div>
</div>
          <Image  alt="table"  className='flex mt-20 justify-center mx-auto w-50 h-50 rounded-md' width={700} height={300} src="/table.png"/>


      </div>
  </div>
</section>






   <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Featured channels</h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        <Link href="https://www.youtube.com/c/Freecodecamp">
        <a rel='noreferrer' target="_blank">
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Image height={60} width={60}  alt="bro" className="rounded-full" src="/bro.jpg"/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Bro Code</h3>
              <p className="text-gray-500 dark:text-gray-400">A cool channel for coding tutorials from Java to Python all within 1 video! Join Bro and learn all about Computer science</p>
          </div>
          </a>
          </Link>
            <Link href="https://www.youtube.com/c/BroCodez">
          <a rel='noreferrer' target="_blank">
          <div className='xs:mt-5'>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Image height={60} width={60}  alt="free" className="rounded-full" src="/free.jpeg"/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Free code camp</h3>
              <p className="text-gray-500 dark:text-gray-400">The best channel right now for computer science. Topics range from begineer tutorials to advanced machine learning!</p>
          </div>
          </a>
          </Link>
          <Link href='https://www.youtube.com/c/nesoacademy'>
          <a rel='noreferrer' target="_blank">
          <div >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Image height={60} width={60}   alt="neso" className="rounded-full" src="/neso.jpg"/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Neso Academy</h3>
              <p className="text-gray-500 dark:text-gray-400">In depth tutorials on advanced subjects. Topics on Neso Academy are particularly good for computer science student.</p>
          </div>
          </a>
          </Link>
      </div>
  </div>
</section>








   <section className="bg-white">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">Let's create more tools and ideas that brings us together.</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-black-400">Tutorial Heaven will lift you out of tutorial hell to practical tutorials and present you the best teachers in the world.</p>
            <Link href="/">
            <a className="inline-flex items-center text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            </Link>
        </div>
        <Image height={400} width={600}  alt="u" className="h-60 w-70" src="/u.jpeg"/>

    </div>
    </section>

    <section className="bg-white dark:bg-gray-900">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
    <Image height={400} width={600} alt='code' className="h-60 w-70" src="/code.jpg"/>
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's get started!.</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Join our newsltter for more tutorials every week!.</p>
            <Link href="#news">
            <a  className="inline-flex items-center text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            </Link>
        </div>
    </div>
    </section>
















   


<footer className="bg-white dark:bg-gray-800 w-full py-8">
    <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
      
            <li className="my-2">
              <Link href="https://github.com/AliSiddique">
                <a rel="noreferrer" target="_blank" className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="https://github.com/AliSiddique">
                    Github
                </a>
                </Link>
            </li>
            <li className="my-2">
            <Link href="https://www.linkedin.com/in/alihsiddique/">
                <a rel="noreferrer" target="_blank" className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="https://www.linkedin.com/in/alihsiddique/">
                    LinkedIn
                </a>
                </Link>
            </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
       <Link href="https://twitter.com/alhaown">
            <a target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                <svg width="20" height="20" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                    </path>
                </svg>
            </a>
            </Link>
            <Link href="https://github.com/AliSiddique">
            <a href="https://github.com/AliSiddique" className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                    </path>
                </svg>
            </a>
            </Link>
            <Link href="https://www.linkedin.com/in/alihsiddique/">
            <a href="https://www.linkedin.com/in/alihsiddique/" className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                <svg width="20" height="20" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                    </path>
                </svg>
            </a>
            </Link>
    
        </div>
        <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
            Created by Ali
        </div>
    </div>
</footer>
    </div>



  )
}
