import React from 'react';
import {Link} from "react-router-dom";

const PageNotFound = () => {
    const backToHome = () => {
        return <Link to="/" />
    };

    return (
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white-900 sm:text-5xl">No Data</h2>
                <div className="mt-20 flex items-center justify-center gap-x-6">
                    <Link to="/"
                          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go
                        back home
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default PageNotFound;
