import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link, useLoaderData} from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const {title, category_id, details , image_url} = news;
    return (
        <Card style={{ width: '' }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}>
          <Button variant="primary"> show all news this category</Button>
          </Link>
        </Card.Body>
      </Card>
    );
};

export default News;