import React, { useContext, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
// import useTitle from '../../../Hooks/useTitle';

const Profile = () => {
    const { user } = useContext(AuthContext)
    const nameRef = useRef('')
    const photoRef = useRef('')
    // useTitle('Profile')
    const handleSubmit = event => {
        event.preventDefault()
        const name = (nameRef.current.value)
        const photoURL = photoRef.current.value
        console.log(name, photoURL)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" defaultValue={user?.displayName} placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Photo URL</Form.Label>
                    <Form.Control ref={photoRef} type="url" defaultValue={user?.photoURL} placeholder="Your photoURL" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;