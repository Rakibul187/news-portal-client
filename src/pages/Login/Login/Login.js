import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    useTitle('Login')
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                navigate(from, { replace: true });
                setError('')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }
    return (
        <div>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text>
                    <span className='text-danger ms-2'>{error}</span>
                    <p>New to news portal? Please <Link to='/register'>Register</Link></p>
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;