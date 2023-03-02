import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Slide from "@material-ui/core/Slide";
import { Box, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    width:"280px",
    alignItems:"center"
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  ratingStars: {
    marginLeft: theme.spacing(1),
  },
  paper: {
    borderRadius: 50,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    padding: theme.spacing(2),
  },
}));

const reviews = [
  { id: 1, rating: 4, comment: "Great store!" },
  { id: 2, rating: 5, comment: "Amazing customer service!" },
  { id: 3, rating: 3, comment: "Could be better." },
];

const Reviews = () => {
  const classes = useStyles();
  const [averageRating, setAverageRating] = useState(0);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    // Calculate average rating
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    setAverageRating(averageRating);

    // Show reviews after 2 seconds
    const timeout = setTimeout(() => setShowReviews(true), 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Reviews
        </Typography>
        <div className={classes.ratingContainer}>
          <Typography variant="h5">
            {averageRating.toFixed(1)} out of 5
          </Typography>
          <Rating
            name="average-rating"
            value={averageRating}
            precision={0.1}
            readOnly
            className={classes.ratingStars}
          />
        </div>
        <Slide in={showReviews} direction="up" timeout={1000}>
          <div>
            {reviews.map((review) => (
              <div key={review.id}>
                <Rating
                  name={`rating-${review.id}`}
                  value={review.rating}
                  max={5}
                  readOnly
                />
                <Typography variant="subtitle1">{review.comment}</Typography>
              </div>
            ))}
          </div>
        </Slide>
      </Paper>
    </Box>
  );
};

export default Reviews;