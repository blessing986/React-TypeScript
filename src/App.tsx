import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Blessing",
    last: "Ubiomor",
  };

  const nameList = [
    {
      first: "Blessing",
      last: "Ubiomor",
    },
    {
      first: "Teddy",
      last: "Teddy",
    },
    {
      first: "Mercy",
      last: "Ubiomor",
    },
  ];

  return (
    <div className="App">
      <Greet name="Blessing" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
