import React, { useState } from 'react'
import NflApi from '../../Apis/NflApi'
import Card from '../../Components/Card/Card'
import Headling from '../../Components/Headling/Headling'

const Nfl = () => {
    const [nflData, setNflDate] = useState(NflApi)
    document.title = "Football injuries"
    return (
        <>
            <div id='nfl' className='container-fluid bg-black ' data-aos="fade-in"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="container text-center ">
                    <Headling title="NFL PLAYER PROFILES" />
                    <div className="row mx-auto ">
                        {
                            nflData.map(({ id, image, name, problem, short, long, title, desc }) => {
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

export default Nfl