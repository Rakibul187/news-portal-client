import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categories = useLoaderData()
    useTitle('Category')

    return (
        <div>
            {
                categories.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;