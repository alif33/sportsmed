import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ id, image, name, problem, short, long, title, desc }) => {
    const navigate = useNavigate()
    const gotofullPage = () => {
        navigate(`/${name}`, { state: { id, image, name, problem, short, long, title, desc } })

    }
    return (
        <>
            <div className="position-relative col-md-4  col-11 mb-5 overflow-hidden card p-0 border-0" >
                <img src={image} className='img-fluid ' alt="not found" />
                <a onClick={() => { gotofullPage() }}>
                    <button className='position-absolute text-center px-4 py-3  border-0  hoverBtn' >{name}</button>
                </a>
            </div>
        </>
    )
}

export default Card