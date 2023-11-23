function Character({ character }){
    return(
        <div className="text-center card card card-body p-5 mb-3 mt-3" id="cajasHome">
            <h3>{character.name}</h3>
            <img className="img-fluid rounded-pill custom-animation" src={character.image} alt={character.name}/>
            <p className="mt-4"><mark>Especie:</mark> {character.species}</p>
            <p className="mt-2"><mark>Estatus:</mark> {character.status}</p>
            <p className="mt-2"><mark>Género:</mark> {character.gender}</p>
        </div>
    )
}
export default Character;