import React from "react";

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  return (
    <div>
      <h2>
        {lastName},{firstName}
        <p>age:{age}</p>
        <p>hairColor:{hairColor}</p>
      </h2>
    </div>
  );
};

export default PersonCard;
