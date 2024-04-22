import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";

function App() {
  const personName = {
    first:"Blessing",
    last: "Ubiomor"
  }
  return (
    <div className="App">
      <Greet name="Blessing" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
