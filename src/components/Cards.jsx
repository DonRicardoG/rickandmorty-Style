import Card from './Card';

export default function Cards(props) {
   const { characters, onClose } = props;
   
   return (
      <div className='card-flex'>
         {characters.map((character) => (
            <Card
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={onClose}
               id = {character.id}
            />
         ))}
      </div>)
}
