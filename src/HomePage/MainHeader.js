import { styled } from "styled-components"
import logo from "../HomePage/Images&Logos/MyLogo.jpeg"


const HeaderWrapper=styled.div`
width:100%;
margin: 0;
padding: 18px 0;
background:#fff;
display: flex;
align-items: center;
box-shadow: 0px -3px 16px;
`

const Logo = styled.img`
width:70px;
margin-left: 79px;
`

const HeaderOptions = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`

const MenuWrap = styled.div`
display:flex;

`

const MenuTxt = styled.p`

`


export default function MainHeader(){


    return(
        <div>

            <HeaderWrapper>
                <Logo src={logo}></Logo>

                <HeaderOptions>
                    <div>
                        <MenuWrap>
                        <MenuTxt>Beer</MenuTxt>
                        </MenuWrap>
                        <MenuWrap>
                        <MenuTxt>Whisky</MenuTxt>
                        </MenuWrap>
                        <MenuWrap>
                        <MenuTxt>Brandy</MenuTxt>
                        </MenuWrap>
                        <MenuWrap>
                        <MenuTxt>Rum</MenuTxt>
                        </MenuWrap>
                        <MenuWrap>
                        <MenuTxt>Jin</MenuTxt>
                        </MenuWrap>
                        <MenuWrap>
                        <MenuTxt>Wine</MenuTxt>
                        </MenuWrap>
                    </div>
                </HeaderOptions>

            </HeaderWrapper>

        </div>
        
        
    )
}