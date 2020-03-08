import React from 'react';

const Card = ({id,name,email}) => {
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/test/${id}`}/>
            <div>
                <h2>{id}</h2>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;