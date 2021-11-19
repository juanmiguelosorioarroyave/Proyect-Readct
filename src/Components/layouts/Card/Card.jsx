import Card from './../../../images/images.jpg';
import './Card.css';

function Cardcent() {
  return (
    <secction className="box-mi-body">
      <div className="box">
        <h2>Hola Peter</h2>
        <img src={Card} className="App-logo" alt="logo" />
        <p>Preparate Bro</p>
      </div>
    </secction>
  );
}

export default Cardcent;