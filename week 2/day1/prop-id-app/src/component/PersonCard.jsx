import React, { useState } from "react";

const PersonCard = (props) => {
  const { firstName, lastName, hairColor } = props;
  const [age, setAge] = useState(0);

  return (
    <div>
      <h2>
        {lastName},{firstName}
        <p>age:{age}</p>
        <p>hairColor:{hairColor}</p>
        <button onClick={(Event) => setAge(age + 1)}>
          Birthday Button for Jane Doe
        </button>
      </h2>
    </div>
  );
};

export default PersonCard;
