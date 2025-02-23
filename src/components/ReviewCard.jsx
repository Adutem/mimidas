import React, { useMemo } from "react";
import styled from "styled-components";

const ReviewCard = ({ _id, fullName, message, rating }) => {
  const stars = useMemo(() => {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "⭐";
    }
    return stars;
  }, [rating]);

  return (
    <ReviewCardContainer>
      <div style={styles.flexRowWithWrap}>
        <Stars>{stars}</Stars>
        <Rating>{rating}/5</Rating>
      </div>
      <ReviewText>{message}</ReviewText>
      <Author>By: {fullName}</Author>
    </ReviewCardContainer>
  );
};

{
  /* So we had an issue on the road coming back from a camping
trip/had a tire issue/battery issue and needs for some general
service/called Mimidas Tire & Auto and talked with
Brandon/brought the truck to them and said squeeze us in
whenever you can and they did/fluids replaced and battery
replaced and new tires rated for a pickup which does some
towing and not a passenger car/easy to work with/any troubles
with the work we did give us a call/you can't ask for
more.......Thank You Guy's!! (u 2 Jake!) */
}

const ReviewCardContainer = styled.div`
  background: var(--primary-color);
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
`;

const ReviewText = styled.p`
  color: var(--white);
  margin-top: 1rem;
  font-family: var(--mont);
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Stars = styled.p`
  color: #fff;
  font-family: var(--mont);
`;
const Rating = styled.p`
  color: #fff;
  font-family: var(--mont);
  margin-left: 1rem;
`;

export const Author = styled.h3`
  font-style: italic;
  font-size: 0.8rem;
  margin: 1.2rem 0 0 0;
  color: #fff;
  font-family: var(--mont);
`;

const styles = {
  flexRowWithWrap: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
};

export default ReviewCard;
