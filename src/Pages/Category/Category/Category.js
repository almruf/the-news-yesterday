import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummeryCard from "../../Shared/NewsSummeryCard/NewsSummeryCard";

const Category = ({ params }) => {
  const CategoryNews = useLoaderData();
  return (
    <div>
      <h3> this is category has new: {CategoryNews.length}</h3>
      {CategoryNews.map((news) => (
        <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>
      ))}
    </div>
  );
};

export default Category;
 