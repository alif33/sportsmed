import React from 'react';
import Link from 'next/link';
import Layout from '../src/components/Layout';

const Home = () => {
    return (
        <Layout>
            <div className='mainBody' data-aos="fade-in"
                data-aos-easing="linear"
                data-aos-duration="1200">
                <div className="BannerWrapper">
                    <div className="container">
                        <div className="row Colum-reverse">
                            <div className="col-sm-12 col-md-6 col-lg-6 ">
                                <div className="DuplicateMenuList pt-3">
                                    <ul>
                                        <li><Link href="/nfl">NFL</Link></li>
                                        <li><Link href="/nba">NBA</Link></li>
                                        <li><Link href="/mlb">MLB</Link></li>
                                        <li><Link href="/watch">Watch</Link></li>
                                        <li><Link href="/podcast">Prodcast</Link></li>
                                        <li className="SubcategoryWrapper">
                                            <Link href="/about">About</Link>
                                            <ul>
                                                <li><Link href="#">Contact Us</Link></li>
                                                <li><Link href="/disclaimer">Desclimer</Link></li>
                                                <li><Link href="/terms-of-use">Terms of Us</Link></li>
                                                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="BannerMainLogo">
                                    <Link href="/"><img src="/images/UltimateLogo.png" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home