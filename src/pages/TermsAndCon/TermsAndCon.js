import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const TermsAndCon = () => {
    useTitle('Terms & Conditions')
    return (
        <div>
            <p>Our terms and conditioons</p>
            <p>Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCon;