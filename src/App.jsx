import { useEffect, useState } from "react";
import CharacterList from "./components/Characterlist";

function App() {
  return (
      <div>
        <header className="d-flex justify-content-between align-items-center p-6 bg-dark text-light">
          <h1 className='text-center display-1 py-5 mx-5'>Rick and Morty</h1>
          <a href="https://github.com/FelixZamora" className='text-center display-6 py-5 mx-5 text-light'>Github</a>
        </header>
        <CharacterList/>
      </div>

  );
}

export default App;
