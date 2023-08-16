import "./App.css";
import PersonCard from "./component/PersonCard";
function App() {
  const user = [
    {
      firstName: "yessine",
      lastName: "lajmi",
      age: "20",
      hairColor: "darkBrawon",
    },
    {
      firstName: "walid",
      lastName: "dogech",
      age: 35,
      hairColor: "brown",
    },
  ];
  return (
    <div className="App">
      {user.map((oneUser) => {
        return (
          <PersonCard
            firstName={oneUser.firstName}
            lastName={oneUser.lastName}
            age={oneUser.age}
            hairColor={oneUser.hairColor}
          />
        );
      })}
    </div>
  );
}

export default App;
