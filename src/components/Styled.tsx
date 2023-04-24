import { NavLink } from "react-router-dom"
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

export const LoginLargeButton = styled.button`
  background-color: #0095F6;
  border: none;
  border-radius: 4px;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 7px 16px;
  text-align: center;
  text-decoration: none;
  width: 250px;
  /* width: 100%; */
`

export const LoginMediumButton = styled(NavLink)`
  background-color: #0095F6;
  border: none;
  border-radius: 4px;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 7px 16px;
  text-align: center;
  text-decoration: none;
`
export const SignUpButton = styled(LoginMediumButton)`
  background-color: #00000066;
`
export const SignUpButtonSmall = styled.button`
  color : #0095f6;
  border : none;
  background-color: #FFFFFF;
  font-weight: 600;
  cursor: pointer;
`
export const PostingButton = styled.button`
  color : #0095f6;
  border : none;
  background-color: #FFFFFF;
  font-weight: 600;
  cursor: pointer;
`