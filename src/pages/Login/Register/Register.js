import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createuser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleSignin = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value
        const password = form.password.value


        createuser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset('')
                navigate(from, { replace: true });
                setError('')
                handleUpdateUserProfile(name, photoURL)
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .then(er => setError(er.message))
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleAccepted}
                        label={<>accept <Link to='/terms'>terms and conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <Form.Text>
                    <span className='text-danger ms-2'>{error}</span>
                    <p>Already have an account? Please <Link to='/login'>Login</Link></p>
                </Form.Text>
            </Form>
        </div >
    );
};

export default Register;