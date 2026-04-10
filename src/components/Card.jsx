import Link from 'next/link';
import React from 'react';

const Card = ({blog}) => {
    const {title,description,id} = blog
    return (
        <div className="card bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link href={`/blogs/${id}`} className="btn">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;