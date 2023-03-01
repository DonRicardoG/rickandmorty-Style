import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   
   return (
      <div className='card-flex'>
         {characters.map((character) => (
            <Card
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               tipo ={character.tipo}
               color ={character.color}
               gradient = {character.gradient}
               borderColor = {character.borderColor}
               points = {character.points}
            />
         ))}
      </div>)
}
