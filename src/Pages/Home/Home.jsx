import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='mainBody' data-aos="fade-in"
                data-aos-easing="linear"
                data-aos-duration="1200">
                <div className="BannerWrapper">
                    <div className="container">
                        <div className="row Colum-reverse">
                            <div className="col-sm-12 col-md-6 col-lg-6 ">
                                <div className="DuplicateMenuList pt-3">
                                    <ul>
                                        <li><Link to="/nfl">NFL</Link></li>
                                        <li><Link to="/nba">NBA</Link></li>
                                        <li><Link to="/mlb">MLB</Link></li>
                                        <li><Link to="/watch">Watch</Link></li>
                                        <li><Link to="/podcast">Prodcast</Link></li>
                                        <li className="SubcategoryWrapper">
                                            <Link to="/about">About</Link>
                                            <ul>
                                                <li><Link to="#">Contact Us</Link></li>
                                                <li><Link to="/disclaimer">Desclimer</Link></li>
                                                <li><Link to="/terms-of-use">Terms of Us</Link></li>
                                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="BannerMainLogo">
                                    <Link to="/"><img src="assets/images/UltimateLogo.png" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home