import React, { useState } from 'react'
import Card from '../../Components/Card/Card'
import Headling from '../../Components/Headling/Headling'
import NbaApi from './../../Apis/NbApi';

const Nba = () => {
    const [nbaData, setNbaDate] = useState(NbaApi)
    document.title = "Basketball Injury analysis"
    return (
        <>
            <div id='nba' className='container-fluid bg-black ' data-aos="fade-in"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="container text-center ">
                    <Headling title="NBA PLAYER PROFILES" />
                    <div className="row mx-auto ">
                        {
                            nbaData.map(({ id, image, name, problem, short, long, title, desc }) => {
                                return (
                                    <Card key={id} id={id} image={image} name={name} problem={problem} short={short} long={long} title={title} desc={desc} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nba