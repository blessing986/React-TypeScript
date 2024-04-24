import "./App.css";
import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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
      {/*  <Greet name="Blessing" isLoggedIn={false} />
     <Person name={personName} />
      <PersonList names={nameList} /> 
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>*/}

      <Button
        handleclick={(event, id) => {
          console.log("Button clicked", { event }, { id });
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
