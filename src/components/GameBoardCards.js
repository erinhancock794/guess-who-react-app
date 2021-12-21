//this component should just have the 24 individual cards for the game board.
import * as React from "react";
import "../App.css";


const GameBoardCards = (props) => {
  const [isActive, setActive] = React.useState(false);
  const toggleClass = (props) => {
    setActive(!isActive);
  };


  const styles = {
    width: "150px",
    padding: "10px",
  };

  const styles2 = {
    width: "150px",
    padding: "10px",
    opacity: "0.3",
    backgroundColor: "black"
  }


  return (
    <div className={styles}>
      <img
        src={props.char.image}
        alt={`${props.char.name}`}
        style={isActive ? styles2 : styles}
        onClick={toggleClass}
      />

    </div>
  );
};

export default GameBoardCards;
