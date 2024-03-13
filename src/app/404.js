import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
                <h1 className="text-6xl mb-4">404</h1>
                <p className="text-2xl mb-8">Oops! The page you are looking for does not exist.</p>
                <Link href="/">
                    <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Return to Homepage
                    </a>
                </Link>
            </div>
        </>
    );
};

export default Custom404;
