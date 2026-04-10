import React from 'react';

const Card = ({blog}) => {
    const {title,description} = blog
    return (
        <div className="card bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;