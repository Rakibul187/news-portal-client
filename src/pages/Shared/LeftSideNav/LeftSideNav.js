import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories)
    return (
        <div>
            <h5>News Categories</h5>
            <div>
                {
                    categories.map(category =>

                        <p key={category.id}>
                            <Link to={`/category/${category.id}`}>{category.name}</Link>
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;