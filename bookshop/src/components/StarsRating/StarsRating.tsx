import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function StarsRating(allowFraction:any) {
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)
        localStorage.setItem(`${handleRating}`, `${rate}`)
        // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    
    const onPointerMove = (value: number, index: number) => console.log(value, index)

    return (
        <div className='raiting__star'>
            <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                allowFraction={true}
                size={25}
                fillColor={'black'}
                transition={true}
                initialValue={4.5}
                /* Available Props */
            />
        </div>
    )
}