import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant='outline-primary mb-1'><BsGoogle /> Login with Google</Button>
                <Button variant='outline-dark'><BsGithub /> Login with Github</Button>
            </ButtonGroup>
            <div className='my-2'>
                <h5 className='my-1'>Find us on</h5>
                <ListGroup >
                    <ListGroup.Item className='mb-1'><BsFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-1'><BsInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-1'><BsLinkedin /> Linkedin</ListGroup.Item>
                    <ListGroup.Item className='mb-1'><BsWhatsapp /> Whats app</ListGroup.Item>
                    <ListGroup.Item className='mb-1'><BsTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-1'><BsYoutube /> Youtube</ListGroup.Item>
                </ListGroup>
                <div>
                    <BrandCarousel></BrandCarousel>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;