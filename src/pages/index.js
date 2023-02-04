import React, {useState, useEffect} from 'react'
import data from './data.js'
import { FaChevronLeft,FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Index = () =>{
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)

    useEffect(() =>{
        const lastIndex = people.length -1
        if( index < 0 ){
            setIndex(lastIndex)
        }

        if( index > lastIndex ){
            setIndex(0)
        }

    },[index, people])

    useEffect(() =>{
        let slider = setInterval(()=>{
            setIndex(index + 1)
        },3000)
        return () => clearInterval(slider)
    },[index])

    return(
        <div className="container">
            <section className='slider' >
                <div className='text-center' >
                    <h2>Reviews</h2>
                </div>
                <div className="slider-center">
                    {
                        people.map((person,personIndex) =>{
                            const {id, image, name, job, text} = person
                            let position = 'nextSlide'

                            if(personIndex === index){
                                position = 'activeSlide'
                            }

                            if( personIndex === index - 1 || (index === 0 && personIndex === people.length - 1) ){
                                position = 'lastSlide'
                            }

                            return (
                                <article className={position} key={person.id} >
                                    <img src={image} alt={name} />
                                    <h4>{name}</h4>
                                    <p>{job}</p>
                                    <p>{text}
                                    </p>
                                    <FaQuoteRight/>
                                </article>
                            )
                        })
                    }
                    <div className="prev" onClick={() => setIndex( index - 1 )} >
                    <span className='btn btn-info' ><FaChevronLeft/></span>
                    </div>
                    <div className="next" onClick={() => setIndex( index + 1 )}  >
                        <span className="btn btn-info">
                            <FaChevronRight/>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Index