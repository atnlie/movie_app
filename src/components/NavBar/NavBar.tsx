import React from 'react';
import { Link } from 'react-router-dom';
import {Search, Bell} from 'react-feather';
const NarBar = () => {
    return (
        <>
            <header>
                <div className="appLogo">
                    <Link to="/">
                        <img src="./anton.jpg" width={300} height={300} alt="Logo"
                             className="rounded-t-full shadow-lg w-10 ml-6"
                        />
                    </Link>
                    <div className="text-red-600 font-bold text-xl w-full">ATNFLIX</div>
                </div>
                <nav className="main-nav mt-5">
                    <Link to="/home">Home</Link>
                    <Link to="/tvShows">TV Shows</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/new">New & Popular</Link>
                    <Link to="#">My List</Link>
                    <Link to="https://www.linkedin.com/in/henikurniyanto/" target="_blank">My Profile</Link>
                </nav>
                <nav className="sub-nav flex space-x-5">
                    <Link to="#">
                        <Search size={25}/>
                    </Link>
                    <Link to="#">
                        <Bell/>
                    </Link>
                    <Link to="#">Account</Link>
                </nav>
            </header>
        </>
    );
}

export default NarBar;
