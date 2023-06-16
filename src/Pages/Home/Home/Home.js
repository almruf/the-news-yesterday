import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const allNews = useLoaderData()
    // console.log(allNews);
    return (
        <div>
            <h3>the news Yesterday Home : {allNews.length }</h3>
            {

                allNews.map(news => <NewsSummeryCard
                key={news._id}
                news ={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Home;