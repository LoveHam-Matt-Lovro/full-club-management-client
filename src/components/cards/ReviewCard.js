import React from "react";
import { StyledCard } from "../styled/StyledCard";
import { formatDate } from "../forms/utils/formatDate";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: rgb(45, 45, 45, 0.5);
`;

const ReviewCard = ({ review }) => {
  return (
    <StyledCard className="review">
      <StyledDiv >
        <p>published: {formatDate(review.createdAt)}</p>
        <p>
          author: {review.author.role} {review.author.firstName} {review.author.lastName}{" "}
        </p>


      </StyledDiv>



      <h3>text: </h3>
      <h2>{review.text}</h2>
    </StyledCard>
  );
};

export default ReviewCard;
