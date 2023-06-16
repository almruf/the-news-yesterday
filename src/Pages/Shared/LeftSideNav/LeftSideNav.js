import React, { useEffect, useState } from 'react';
import './LeftSideNave.css';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/news-categories')
        .then(res =>res.json())
        .then( data =>setCategories(data))
    },[])
    return (

        <div>
            {/* <h3>all categories {categories.length}</h3> */}
            <div className="categories">
                {
                    categories.map(category =>                       
                        <Link key={category.id}  className='category-btn' to={`/category/${category.id}`}>
                            < ListGroup className='category-btn'>
                               <ListGroup.Item className='mb-2 category-name'>{category.name}</ListGroup.Item>
                            </ListGroup>
                        </Link>                                          
                    )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;
