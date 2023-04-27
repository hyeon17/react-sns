import { NavLink, NavLinkProps } from "react-router-dom"
import styled, { css } from "styled-components"


// const Button = styled.button`
  
//   ${(props) => {
//     if(props.size === 'small') {
//       return css`
//         width: 100px;
//         padding: 
//       `
//     if(props.btnTheme === 'outline') {

//     }
    
//   }}
// `

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 4px rgba(0,0,0,.25);
`

export const LogoWrapper = styled.div`
  width: 150px;
  padding: 8px;
`

export const Logo = styled.img`
  width: 100%;
  object-fit: cover;
  /* height: 90px; */
`
export const HomeIcon = styled.img`
  width: 30px;
  height: 30px;
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  margin:auto;
  transition: all 0.2s linear;
  padding-bottom: 5px;
  &:hover {
    transform: scale(1.15);
  };
`

export const PostingIcon = styled.img`
  width: 30px;
  height: 30px;
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  margin:auto;
  transition: all 0.2s linear;
  padding-bottom: 5px;
  &:hover {
    transform: scale(1.15);
  }
`
export const HeaderCenter = styled.div`
  display: flex;
  gap:200px;
  text-decoration: none;
  align-items: center;
  text-align: center;
  flex-grow: 1;
  
`
export const HeaderWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  width: 100em;
  align-items: center;
`
export const HeaderRight = styled.div`
  gap:10px;
  display: flex;
  min-width: 100px;
`

export const LoginLargeButton = styled.button`
  background-color: ${({theme}) => theme.colors.instaSky};
  border: none;
  border-radius: 4px;
  color: ${({theme}) => theme.colors.white};;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 7px 16px;
  text-align: center;
  text-decoration: none;
  width: 310.6px;
  margin-top: 10px;
  &:hover {
    background-color: ${({theme}) => theme.colors.darkSky};
  };
`

export const LoginMediumButton = styled(NavLink)`
  background-color: ${({theme}) => theme.colors.instaSky};
  border: none;
  border-radius: 4px;
  color: ${({theme}) => theme.colors.white};;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 7px 16px;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: ${({theme}) => theme.colors.darkSky};
  };
`
export const SignUpButton = styled(LoginMediumButton)`
  background-color: ${({theme}) => theme.colors.dimGray};
  &:hover {
    background-color: ${({theme}) => theme.colors.darkGray};
  }
  
`
export const SignUpButtonSmall = styled.button`
  color : ${({theme}) => theme.colors.instaSky};
  border : none;
  background-color: ${({theme}) => theme.colors.white};
  font-weight: 600;
  cursor: pointer;
  
`
export const PostingButton = styled.button`
  color : ${({theme}) => theme.colors.instaSky};
  border : none;
  background-color: ${({theme}) => theme.colors.white};
  font-weight: 600;
  cursor: pointer;
`