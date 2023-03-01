export default function Card(props) {
   const {name, gender, image, onClose, species, tipo, color,gradient, borderColor, points} = props;
   return (
      <div className="card" style={{background:color, background:gradient , borderColor: borderColor}}>
         <div className="card-title">
            <div className="first-title">
               <p>{tipo}</p>
               <h2>{name}</h2>
            </div>
            <div className="second-title">
               <p>ps<span>{points}</span></p>
               <button onClick={onClose}>X</button>
            </div>
         </div>
         <div className="card-content">
            <div className="card-img">
               <img  src={image} alt="not found" />
            </div>
            <div className="card-text">
               <h2 className="text-in">{species}</h2>
               <h2 className="text-in">{gender}</h2>
            </div>
         </div>
      </div>
   );
}
