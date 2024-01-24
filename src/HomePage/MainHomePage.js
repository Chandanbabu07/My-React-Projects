import { styled } from "styled-components"
import FirstSlide from "./FirstSlide"



const MainWrapper=styled.div`
background:#F4EDED;
height:auto;
width:100%;
margin: 0;
top:0;
`


export default function MainHomePage(){


    return(
        <div>

            <MainWrapper>
                <FirstSlide></FirstSlide>
            </MainWrapper>

        </div>
        
        
    )
}