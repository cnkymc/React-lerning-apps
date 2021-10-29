import { useState } from "react";
import Data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
