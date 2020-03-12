import React from 'react';
//import { robots } from './robo';

const Card = ({robot}) => {
    
    const cardArr = robot.map((arr,i)=>{
        return(
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' key={robot[i].id}>
                <img alt='robots' src={`https://robohash.org/test/${i}`}/>
                <div>
                    <h2>{robot[i].id}</h2>
                    <p>{robot[i].name}</p>
                    <p>{robot[i].email}</p>
                </div>
            </div>
        )
    })
    return(
        <div>{cardArr}</div>
    )
}

export default Card;