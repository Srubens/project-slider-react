import React, {useState, useEffect} from 'react'
import data from './data.js'
const Index = () =>{
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)
    return(
        <div className="container">
            <section className='slider' >
                <div>
                    <h2>Reviews</h2>
                </div>
                <div className="slider-center">
                    {
                        people.map((person,personIndex) =>{
                            const {id, image, name, job, text} = person
                            return (
                                <article key={id}>
                                    <img src={image} alt={name} />
                                    <h4>{name}</h4>
                                    <p>{job}</p>
                                    <p>{text}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Index