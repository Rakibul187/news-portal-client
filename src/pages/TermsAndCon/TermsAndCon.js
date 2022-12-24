import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCon = () => {
    return (
        <div>
            <p>Our terms and conditioons</p>
            <p>Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCon;