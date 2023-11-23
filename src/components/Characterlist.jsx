import { useEffect, useState } from "react";
import Character from "./Character";
import './Characterlist.css';

function NavPagina(props){
    return(
        <div className="d-flex justify-content-between align-items-center p-2">
            <h6>Página: {props.page}</h6>
            <div>
                <button className="btn btn-primary btn-sm mx-2" id="btn"
                onClick={() => props.setPage(props.page - 1)}>
                    Anterior
                </button>

                <button className="btn btn-primary btn-sm mx-2" id="btn"
                onClick={() => props.setPage(props.page + 1)}>
                    Siguiente
                </button>
            </div>
        </div>
    )
}

function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
  
    useEffect(() => {
      async function fetchData() {
        try {
          if (page > 0 && page <= 42) {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json();
            setCharacters(data.results);
          } else {
            setPage(1);
          }
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      }
  
      fetchData();
    }, [page]);
  
    return (
        
      <div className="container-fluid">
        <div id="barra">
            <NavPagina page={page} setPage={setPage} />
        </div>
        
  
        <div className="row" id="fondoCajas">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          ))}
        </div>
  
        <div id="barra-abajo">
            <NavPagina page={page} setPage={setPage} />
        </div>
      </div>
    );
}
  
export default CharacterList;