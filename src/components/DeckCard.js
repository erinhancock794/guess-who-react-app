
import * as React from "react";
import _ from 'lodash';
import deckback from '../data/Assets/3x/DeckBack@3x.png';
import {characters} from '../data/characters';



const DeckCard = (props) => {
    const [randomChar, setRandomChar] = React.useState({});

    const style = {
        width: '150px',
        margin: '10px'
      }

    const handleGetChar = () => {
        setRandomChar(randomChar)
        const character = props.getCharacterFunc(characters);
        props.loadMetadataFunc(character);
        return character
    }
    return (
        <div>
            <img 
            style={style}
            src={deckback}
            alt="deckback"
            onClick={handleGetChar}/>
        </div>

    )
}

export default DeckCard;