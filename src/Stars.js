import React from 'react'

export default function Star({ rating, modifyRating = () => { } }) {
    let arr = []
    for (let i = 1; i <= 5; i++)
        if (i <= rating) {
            arr.push(<i class="fas fa-star" onClick={() => modifyRating(i)}></i>)
        } else {
            arr.push(<i class="far fa-star" onClick={() => modifyRating(i)}></i>)
        }

    return (
        <div>
            {arr}
        </div>
    )
}