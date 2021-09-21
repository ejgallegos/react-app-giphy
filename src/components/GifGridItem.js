import React from 'react'

export const GifGridItem = (gif) => {
    return (
        <>
            <ul className="cards">
                <li>
                    <div className="card animate__animated animate__fadeIn">
                        <img className="card__image" src={gif.url} alt={gif.title} />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <div className="card__header-text">
                                    <h3 className="card__title">{gif.title}</h3>
                                </div>
                            </div>
                            {/* <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p> */}
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}
