import { Link } from "react-router-dom";

export default function Card(props) {
   const {name, gender, image, onClose, species, id} = props;
   return (
      <div className="card">
         <div className="card-title">
            <Link className="first-title" to={`/detail/${id}`}>
               <h2>{name}</h2>
            </Link>
            <div className="second-title">
               <button onClick={() => onClose(id)}>X</button>
            </div>
         </div>
         <div className="card-content">
            <div className="card-img">
               <img  src={image} alt="not found" />
            </div>
            <div className="card-text">
               <h2 className="text-in">Specie: {species}</h2>
               <h2 className="text-in">Gender: {gender}</h2>
            </div>
         </div>
      </div>
   );
}
