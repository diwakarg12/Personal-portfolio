import React from 'react';
import Link from 'next/link';
import Head from 'next/head'

const PageNotFound = () => {

    <Head>404 - Page Not Found</Head>
    return (
        <main className='w-full h-[100vh] px-2 py-24 bg-[url(https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1776&h=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover'>
            <div className='w-full h-full text-center flex flex-col items-center mt-12 sm:mt-0'>
                <p className='text-4xl font-bold font-oswald text-white'>404</p>
                <h1 className='mt-4 md:text-6xl font-extrabold font-oswald text-gray-900 sm:text-4xl'>
                    Page not found
                </h1>
                <p className='mt-6 text-lg leading-7 md:text-gray-700 sm:text-gray-300'>
                    Sorry, we couldn`t find the page you`re looking for.
                </p>
                <div className='mt-10 flex flex-wrap items-center justify-center gap-x-6'>
                    <Link
                        href='/'
                        className='bg-[#e6f302] md:w-36 sm:w-full md:mb-0 sm:mb-4 py-2.5 text-base font-semibold font-avenir text-[#1f1f1f] hover:shadow-lg'
                    >
                        Go back home
                    </Link>
                    <Link
                        href='/contact'
                        className='bg-[#e6f302] md:w-36 sm:w-full md:mb-0 sm:mb-4 py-2.5 text-base font-semibold font-avenir text-[#1f1f1f] hover:shadow-lg flex items-center justify-center'
                    >
                        Contact us
                        <span
                            aria-hidden='true'
                            className='absolute md:bottom-[8.9rem] ml-28'
                        >
                            &rarr;
                        </span>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default PageNotFound;
