import React from 'react'
import Star from './Stars';

export default function Movieapp ({list}) 
     {
        return (
            <section className="interface">
                <div className="Movie">                        
                        {list.map(el =>
                            <div className="Movieitem">
                                <img src={el.Movieimg} alt="movie1" />
                                <h3>{el.Movietitle}</h3>
                                <h6>{el.description}</h6>
                                <Star rating={el.rating} />
                            </div>
                        )}
                </div>
            </section>
        )
    }
