import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const toggle = () => {
        if (document.querySelector(".Navbar").style.opacity === "1") {
            document.querySelector(".Navbar").style.opacity = "0"

        } else {
            document.querySelector(".Navbar").style.opacity = "1"

        }
    }
    return (
        <>
            <div className="container-fluid" style={{ background: "black" }}>
                <div class="container">
                    <header class="d-flex flex-wrap align-items-center justify-content-between justify-content-md-around py-3 ">
                        <div className="NavLogoWarpper ">
                            <div className="navLogo">
                                <Link to="/"><img src="/assets/images/logo (2).jpg" alt="" /></Link>
                            </div>
                            <div className="navLogoTitle">
                                <div className="navlogoSocial-wrapper">
                                    <ul>
                                        <li><a href=""><i className="fab fa-tiktok"></i></a></li>
                                        <li><a href=""><i className="fab fa-instagram"></i></a></li>
                                        <li><a href=""><i className="fab fa-twitter"></i></a></li>
                                        <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                                    </ul>
                                    <p>Data-Driven Injury Analysis</p>
                                    <p>Deepak Chona, MD</p>
                                </div>

                            </div>
                        </div>
                        <div className='MenuIcon'>
                            <i onClick={toggle} class="fa-solid fa-bars"></i>
                        </div>
                        <div className='Navbar '>
                            <ul class="nav col-md-8 d-flex mb-2 justify-content-center mb-md-0 text-white flex-dirction-row">
                                <div className='navSearchBar'>
                                    <input type="text" placeholder='Search' />
                                    <button>Search</button>
                                </div>
                                <div className='d-flex linkBox'>
                                    <li ><Link to="/nfl" class="nav-link px-2 text-white">NFL</Link></li>
                                    <li><Link to="/nba" class="nav-link px-2 text-white">NBA</Link></li>
                                    <li><Link to="/mlb" class="nav-link px-2 text-white">MLB</Link></li>
                                    <li><Link to="/watch" class="nav-link px-2 text-white">Watch</Link></li>
                                    <li><Link to="/podcast" class="nav-link px-2 text-white">Podcast</Link></li>
                                    <li><Link to="/about" class="nav-link px-2 text-white">About</Link></li>
                                </div>
                            </ul>
                            <div class="col-md-4 d-flex  align-items-center nabBtn">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' class="btn btn-outline-secondary me-2">Login</button>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal1" type='button' class="btn btn-primary me-2">Sign-up</button>
                            </div>
                        </div>

                    </header>
                </div>
            </div >
        </>
    )
}

export default Navbar