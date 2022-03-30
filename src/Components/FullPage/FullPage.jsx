import React from 'react'
import { useLocation } from 'react-router-dom'

const FullPage = () => {
    const location = useLocation()
    document.title = location.state.name

    return (
        <div className='text-center' id='fullpage' data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000" style={{ backgroundImage: `url(${location.state.image})` }}>
            <div className='fullpage_box text-white mt-4 px-4'>
                <p className='position-absolute top-0 right-0 '>Updated : {new Date(Date.now()).toLocaleString()}</p>
                <h1 className='fw-bold'>{location.state.name}</h1>
                <h4 className='mt-4 mb-2'>{location.state.problem}</h4>
                <h4 className='mt-4 mb-2'>{location.state.short === "" ? "" : `Short:  ${location.state.short}`}</h4>
                <h4 className='mt-4 mb-4'>{location.state.long === "" ? "" : `long-Time:  ${location.state.long}`}</h4>
                <h3 className='mt-4 container mb-2 lh-sm'>{location.state.title}</h3>
                <p className='fullpageParagraph container lh-lg  text-center mt-5 mb-2'>{location.state.desc}</p>
            </div>
        </div>
    )
}

export default FullPage