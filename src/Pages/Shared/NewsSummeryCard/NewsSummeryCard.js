import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummeryCard = ({news}) => {
    //  console.log(news)
      const {_id,title,rating, total_view, image_url, details, author} = news;
     
      return (
            <Card className="text-center mb-4 ">
            <Card.Header className='d-flex justify-content-between align-item-center'>
                  <div className=" d-flex">
                        <Image
                        className='me-2'
                        roundedCircle
                        src={author.img}
                        style={{height:'60px'}}
                        ></Image>
                      <div className="">
                      <span>{author?.name}</span> <br/>
                      <span>{author?.published_date}</span>
                      </div>
                  </div>
                  <div className="mt-2">
                  <FaRegBookmark className='m-2'></FaRegBookmark>
                  <FaShareAlt></FaShareAlt>
                  </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Img variant='top' src={image_url}/>
              <Card.Text>
                {details.length >250 ? 
                <>{details.slice(0,250)+'...'} <Link to={`/news/${_id}`}>Read more</Link></>
                :     
                <>{details}</>  
            }
              </Card.Text>
            </Card.Body>
            <Card.Footer className="ps-4 pe-4 d-flex text-muted justify-content-between">
              <div className="">
                <FaStar className='text-warning'></FaStar>
               <span className='ms-2'>{rating.number}</span>
              </div>
              <div className="">
                <FaEye className=''></FaEye>
              <span className='ms-2'>{total_view}</span>
              </div>
            </Card.Footer>
          </Card>
      );
};

export default NewsSummeryCard;