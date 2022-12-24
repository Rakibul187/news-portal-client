import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
    console.log(news)
    const { title, details, image_url, author, _id, total_view, rating } = news

    return (
        <div>
            <Card className=" mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image
                            style={{ height: '40px' }}
                            roundedCircle
                            src={author?.img}></Image>
                        <div className='ms-2'>
                            <p className='mb-0'>{author?.name}</p>
                            <p className='mb-0'>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top my-2" src={image_url} />
                    <Card.Text>
                        {details.length > 250 ? <p>{details.slice(0, 250)} <Link to={`/news/${_id}`}>Read More</Link></p> : <p>{details}</p>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <div className='d-flex align-items-center'>
                        <FaStar className='me-2 text-warning'></FaStar>
                        {rating?.number}
                    </div>
                    <div className='d-flex align-items-center'>
                        <FaEye className='me-2'></FaEye>
                        {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;