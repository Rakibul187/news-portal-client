import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    const { title, details, image_url, author, total_view } = news

    return (
        <Card className="mb-5">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top my-2" src={image_url} />
                <div className='d-flex my-2 align-items-center justify-content-around flex-wrap'>
                    <p className='mb-0'><span className='fw-bold'>Author:</span> {author?.name}</p>
                    <p className='mb-0'><span className='fw-bold'>Published Date:</span> {author?.published_date}</p>
                    <p className='mb-0'><span className='fw-bold'>Total View:</span> {total_view}</p>
                </div>
                <Card.Text>
                    {details}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default News;