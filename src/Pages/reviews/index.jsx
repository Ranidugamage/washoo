import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@material-ui/core';
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
import "./styles.css"

const initialReviews = [
  {
    id: 1,
    image: 'https://via.placeholder.com/50x50',
    name: 'Laundry Store 1',
    rating: 3,
    review: 'Average service',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/50x50',
    name: 'Laundry Store 2',
    rating: 5,
    review: 'Great service!',
  },
];

const ReviewsTable = () => {
  const [reviews, setReviews] = useState(initialReviews);

  const handleDelete = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const handleEdit = (id) => {
    // Handle edit functionality here
  };

  return (
      <div className="container-review">
      
      <TableContainer component={Paper} className="table-container-review" >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell >Image</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Rating</TableCell>
            <TableCell >Review</TableCell>
            <TableCell >Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.map(({ id, image, name, rating, review }) => (
            <TableRow key={id}>
              <TableCell>
                <img src={image} alt={name} className="img-review" width={80} height={80}/>
              </TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>
                <Rating name="read-only" value={rating} readOnly />
              </TableCell>
              <TableCell>{review}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(id)}>
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton onClick={() => handleDelete(id)}>
                  <DeleteIcon color="secondary" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default ReviewsTable;