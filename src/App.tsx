import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";

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

      {/* <Button
        handleclick={(event, id) => {
          console.log("Button clicked", { event }, { id });
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} /> */}

      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}

      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />

      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />

      <List
        items={[
          {
            id:1,
            first: "Blessing",
            last: "Ubiomor",
          },
          {
            id:2,
            first: "Teddy",
            last: "Teddy",
          },
          {
            id:3,
            first: "Mercy",
            last: "Ubiomor",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
