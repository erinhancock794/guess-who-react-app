//this component should populate all the cards from the card component
import * as React from "react";
import _ from 'lodash';
import deckback from '../data/Assets/3x/DeckBack@3x.png';
import {characters} from '../data/characters';

  import GameBoardCards from "./GameBoardCards";
  import DeckCard from "./DeckCard";

const GameBoardContainer = (props) => {
  const style = {
    width: '150px',
    padding: '10px'
  }
  console.log('props in container---__>', props);
  const [loadData, setLoadData] = React.useState([]);
  const [clicked, setClicked] = React.useState(false);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  const handleClick = () => setClicked(true);

  const loadMetadata = (movie) => {
    setClicked(true);

    setLoadData(() => {
      return [movie];
    });
  };
  const [isActive, setActive] = React.useState(false);
  const toggleClass = () => {
    setClicked(!clicked)
      setActive(!isActive);
    };
const getCharacter = (characters) => {
  console.log('characters-->', characters
  );
    const lengthofDeck = characters.length;
    const randomInt = getRandomInt(1,lengthofDeck)
    return _.find(characters, (c) => { return c.id === randomInt});
}

    return (
      <>
      <div
      style={{display:'flex', justifyContent: 'center', margin: '10px'}}>
      <DeckCard
      key="2"
      getCharacterFunc={getCharacter}
      loadMetadataFunc={loadMetadata}
      handleClick={handleClick}
      />
            {loadData.map((char) => {
        return (
          <div>
            
            <img 
            src={clicked ? char.deck : deckback}
            alt={`${char.name}`}
            style={style}/> 
            
          </div>
        )
      })}
      </div>
      <div
      style={{
        display: "grid", 
      gridTemplateColumns: "repeat(6, 1fr)",
      
      gridColumnGap: "10px",
      gridTemplateRows: "repeat(4, 1fr)",
      }}>

      {characters.map((char) => {
        console.log('char in characters map---_>', char);
        return (
          <GameBoardCards
          src={char.image}
          alt={`${char.name}`}
          onClick={toggleClass}
          char={{ ...char }}
          style={{display:'flex', justifyContent: 'center', padding: '10px'}}
          >
          
          </GameBoardCards>
         
        )
      })}
      </div>
                {/* <GameBoardCards
 /> */}

        </>
        
    )
}

export default GameBoardContainer;