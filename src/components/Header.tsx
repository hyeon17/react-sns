import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import photo from '@/assets/logo.png'
import homeIcon from '@/assets/Home.png'
import addPostingIcon from '@/assets/AddPosting.png'

import { LoginMediumButton } from './Styled';
import { SignUpButton } from './Styled'
import { SignUpButtonSmall } from './Styled'
import { LoginLargeButton } from './Styled'
import { PostingButton } from './Styled'



import styled from 'styled-components';


function Header() {


  return (
    <Container>
      <HeaderWrapper>
        <div className='HeaderLeft'>
          <Link to="/">
          <Logo src={photo} alt="photoGram"/>
          </Link>
        </div>
        <div className='HeaderCenter'>
          <HeaderCenter>
            <NavLink to="/">
              <HomeIcon src={homeIcon} alt='Home'/>
            </NavLink>
            <NavLink to="/contact">
              <PostingIcon src={addPostingIcon} alt=''/>
            </NavLink>
          </HeaderCenter>
        </div>
        {/* <LoginMediumButton>로그인</LoginMediumButton>
        <LoginLargeButton>로그인</LoginLargeButton>
        <SignUpButton>가입하기</SignUpButton> */}
        <div className='HeaderRight'>
          <HeaderRight>
            <LoginMediumButton to="/login">
                로그인
            </LoginMediumButton>
            <SignUpButton to="/signup">
              
                가입하기
              
            </SignUpButton>
          </HeaderRight>
        </div>
      </HeaderWrapper>
    </Container>
    
  );
}

export default Header;

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 4px rgba(0,0,0,.25);
`
const Logo = styled.img`
  width:250px;
  height: 90px;
`
const HomeIcon = styled.img`
  width: 35px;
  height: 35px;
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  margin:auto;
`

const PostingIcon = styled.img`
  width: 35px;
  height: 35px;
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  margin:auto;
`
const HeaderCenter = styled.div`
  display: flex;
  gap:200px;
  text-decoration: none;
  
`
const HeaderWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  width: 100em;
  align-items: center;
`
const HeaderRight = styled.div`
  gap:10px;
  display: flex;
`