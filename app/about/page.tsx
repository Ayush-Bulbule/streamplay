import React from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";
import HeroHeader from "@/components/hero/heroheader";

const outfit = Outfit({ subsets: ["latin"] });


interface TeamDetailsProps {
    img: string;
    name: string;
  }
  const TeamDetails: React.FC<TeamDetailsProps> = ({ img, name }) => {
    return(
      <>
        <div>
          <div className="shadow-three rounded-sm  p-6 lg:mt-0 ">
              <div className="relative h-20 w-20 overflow-hidden rounded-full ml-6">
                          <Image
                            src={`/images/about/${img}`}
                            alt="author"
                            fill
                          />
              </div>
              </div>
                  <div className="w-full flex ml-4">
                        <span className="text-base font-large text-body-color pl-4">
                             {name}
                             <span className="flex justify-center items-center"><p>PICT</p></span>
                        </span>
                   </div>
                             
        </div>
      </>
    )
}
const AboutPage = () => {
  return (
    // <section className={`${outfit.className} bg-[url('/images/hero-bg.jpg')]`}>
    //   <div className={` bg-slate-900`}>
    //   <HeroHeader/>
    //     <div className="font-inter container flex h-screen max-w-screen-2xl -mt-36 items-center justify-center">
    //       <div className="md:w-1/2">
    //         <h1 className="my-2 text-5xl leading-relaxed text-gray-200">
    //           <span className="text-sky-300 hover:text-cyan-300">About Us</span>{" "}
    //         </h1>
    //         <div>
    //          <p className="text-justify"><span className="ml-20">Welcome to Ant Esport, the leading provider of innovative</span>
    //           solutions for the esports community. At Ant Esport, we are
    //           dedicated to revolutionizing the way esports tournaments are
    //           organized and managed. With a passion for gaming and a commitment
    //           to excellence, our team brings together years of experience in
    //           technology, gaming, and event management. We understand the unique
    //           needs and challenges of the esports industry, and we are committed
    //           to providing cutting-edge solutions to address them.</p>{"    "}
    //           <p className="text-justify"><span className="ml-20">Our mission is to empower tournament organizers, teams, and players with the</span>
    //           tools they need to succeed in the fast-paced world of esports.
    //           Whether you're a seasoned professional or just starting out, our
    //           platform offers a comprehensive suite of features designed to
    //           streamline tournament management and enhance the overall esports
    //           experience.</p>{"    "}
    //           <p className="text-justify">
    //           <span className="ml-20">From seamless team registration to efficient match</span>
    //           scheduling, live streaming integration, and real-time score
    //           tracking, our platform provides everything you need to organize,
    //           manage, and participate in esports tournaments with ease. Join us
    //           in shaping the future of esports. Together, we can take your
    //           tournament experience to the next level. Get started with Ant
    //           Esport today!
    //         </p>
    //         </div>
    //         <div className="flex justify-center items-start flex-col">
    //         <h1 className="my-2 text-2xl leading-relaxed text-gray-200">
    //           <span className="text-sky-300 hover:text-cyan-300">Who We Are ? </span>{" "}
    //         </h1>
    //         <div className="flex w-full justify-between items-center ">
    //         <TeamDetails img="ayush.jpg" name="Ayush Bulbule"/>
    //         <TeamDetails img="pranay.jpg" name="Pranay Chavhan"/>
    //         <TeamDetails img="yadh.jpg" name="Yadhnesh Gangurde"/>
    //         <TeamDetails img="sumit.jpg" name="Sumati Suryavanshi"/>
    //         </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>


   <>
   
   
   <section className=" bg-slate-900 ">
    <HeroHeader/>
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 md:w-1/2">
                            <img src="https://i.postimg.cc/YCJW7jv8/pexels-fauxels-3184357.jpg" alt=""
                                className="object-cover w-full mb-6 rounded-lg h-80"/>
                            <img src="https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg" alt=""
                                className="object-cover w-full rounded-lg h-80"/>
                        </div>
                        <div className="w-full px-4 md:w-1/2 xl:mt-11">
                            <img src="https://i.postimg.cc/sXJQ5cw0/pexels-pixabay-256455-1.jpg" alt=""
                                className="object-cover w-full mb-6 rounded-lg h-80"/>
                            <img src="https://i.postimg.cc/vHTg6593/aqq.jpg" alt=""
                                className="object-cover w-full rounded-lg h-80"/>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
                    <span className="text-sm font-semibold  text-blue-400">Why choose us</span>
                    <h2 className="mt-2 mb-4 text-2xl font-bold  text-gray-300">
                        We are providing a better facility
                    </h2>
                    <p className="mb-4 text-base leading-7  text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                    <ul className="mb-10">
                        <li className="flex items-center mb-4 text-base  text-gray-400">
                            <span className="mr-3  text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                </svg>
                            </span>
                            Lorem ipsum, or lipsum known, is dummy text used
                        </li>
                        <li className="flex items-center mb-4 text-base  text-gray-400">
                            <span className="mr-3  text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-2-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                                </svg>
                            </span>
                            The purpose of lorem create a natural looking block of text
                        </li>
                        <li className="flex items-center mb-4 text-base  text-gray-400">
                            <span className="mr-3  text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-3-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                                </svg>
                            </span>
                            The passage experienced in popularity during the 1960s
                        </li>
                        <li className="flex items-center mb-4 text-base  text-gray-400">
                            <span className="mr-3  text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-4-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" />
                                </svg>
                            </span>
                            esktop publishers bundled the text with their software.
                        </li>
                    </ul>
                    <a href="#"
                        className="px-4 py-2 text-gray-100  rounded-md bg-blue-400  hover:bg-blue-600">
                        Learn more
                    </a>
                </div>
            </div>
        </div>






        <section className="text-gray-300 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-300">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/85397500?s=400&u=9f596e30e737d3066f7900e842bb7493e9f2a783&v=4"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-200">Pranay Chavhan</h2>
            <h3 className="text-gray-500 mb-3">Full stack Developer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/69710917?v=4"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-200">Ayush Bulbule</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/111428696?v=4"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-200">Yadhnesh Gangurde</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-200">Sumati Suryavanshi</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





    </section>
   
   
   
   </>
  );
};

export default AboutPage;