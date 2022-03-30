import React, { useState } from 'react'
import Card from '../../Components/Card/Card'
import Headling from '../../Components/Headling/Headling'
import MlbApi from './../../Apis/MlbApi';

const Mlb = () => {
    const [mlbData, setMlbDate] = useState(MlbApi)
    document.title = "MLB Injurys "
    return (
        <>
            <div id='mlb' className='container-fluid bg-black ' data-aos="fade-in"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="container text-center ">
                    <Headling title="MLB PLAYER PROFILES" />
                    <div className="row mx-auto ">
                        {
                            mlbData.map(({ id, image, name, desc }) => {
                                return (
                                    <Card key={id} id={id} image={image} name={name} desc={desc} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mlb