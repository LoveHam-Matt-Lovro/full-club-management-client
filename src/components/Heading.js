import React from 'react'
import {SmallStyledDiv} from '../components/styled/SmallStyledDiv.js'
import gameChangerLogo from "../images/gamechanger-logo.png"
import gameChangerGreen from "../images/gamechanger-logo-green.png"
import gameChangerSplit from "../images/game-changer-split.png"
import gameChangerBlack from "../images/game-changer-black.png"
import { COLOR } from '../Context/constants';
import styled from 'styled-components';

const StyledH3 = styled.h3`
    font-family:"Helectiva";
    color: ${COLOR.dark};
    text-align: center;
    
    `

const Heading = () => {
  return (
    <SmallStyledDiv>
        
        <img style={{marginTop: 20}}  src={gameChangerBlack} alt="GAME CHANGER"/>
        
        <StyledH3>THE FULL CLUB MANAGEMENT APP</StyledH3>
    </SmallStyledDiv>
  )
}

export default Heading