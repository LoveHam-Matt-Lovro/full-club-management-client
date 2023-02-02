import React from 'react'
import {SmallStyledDiv} from '../components/styled/SmallStyledDiv.js'
import gameChangerLogo from "../images/gamechanger-logo.png"
import gameChangerGreen from "../images/gamechanger-logo-green.png"
import gameChangerSplit from "../images/game-changer-split.png"
import gameChangerBlack from "../images/game-changer-black.png"
import { COLOR } from '../Context/constants';
import styled from 'styled-components';


const Heading = () => {
  return (
    <SmallStyledDiv>
        
        <img style={{margin: 20, width:700}}  src={gameChangerLogo} alt="GAME CHANGER"/>
        
        <h3>THE FULL CLUB MANAGEMENT APP</h3>
    </SmallStyledDiv>
  )
}

export default Heading