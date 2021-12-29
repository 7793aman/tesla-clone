import React from "react";
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap id="wrap" bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>

            <Fade bottom>
                <ButtonGroup>
                    <LeftButton className={rightBtnText ? '' : 'singleBtn'}>
                        {leftBtnText}
                    </LeftButton>

                    {rightBtnText && <RightButton>
                        {rightBtnText}
                    </RightButton>}
                </ButtonGroup>
            </Fade>

            <DownArrow src="/images/down-arrow.svg" />
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image: ${props => `url("/images/${props.bgImage}")`};
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
overflow-x:hidden;

`

const ItemText = styled.div`
margin-top:5.5em;
text-align:center; 
`

const ButtonGroup = styled.div`
display:flex;
margin-top:18em;
@media (max-width :768px){
    flex-direction:column
}
`
const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`

const RightButton = styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`

const DownArrow = styled.img`
margin-bottom:0.5em;
animation:animateDown infinite 2s;
cursor:pointer;
height:40px;
overflow-x:hidden;

`
