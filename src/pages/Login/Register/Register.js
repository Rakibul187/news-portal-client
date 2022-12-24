import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createuser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handleSignin = event => {
        event.preventDefault()
        const form = event.target
        // const name = form.name.value;
        // const photoURL = form.photoURL.value;
        const email = form.email.value
        const password = form.password.value

        createuser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset('')
                navigate('/')
                setError('')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    return (
        <div>
            <Form onSubmit={handleSignin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo URl</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Your" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text>
                    <span className='text-danger ms-2'>{error}</span>
                    <p>Already have an account? Please <Link to='/login'>Login</Link></p>
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;