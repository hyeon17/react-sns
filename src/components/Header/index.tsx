import React, { useState }   from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import photo from '@/assets/logo.png'
import homeIcon from '@/assets/Home.png'
import addPostingIcon from '@/assets/AddPosting.png'
import { removeCookie } from '@/util';
import { SignUpButton } from './Styled'
import * as S from './Styled'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCookie } from '@/util';
import { ACCESSTOKEN_KEY } from '@/constants';
import { instance } from '@/api/axios';
import { useStore } from '@/store/store';

const verify = async () => {
  const {data} = await instance.get('/auth/verify');

  return data;
}

function Header() {
  const accessToken = getCookie(ACCESSTOKEN_KEY);
  const queryClient = useQueryClient();
  const { openModal } = useStore();
  const location = useLocation()
  
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {data:verifyPayload, status} = useQuery(['verify', accessToken], verify,{
    retry: false
  })
  const handleLogout = () => {
    removeCookie(ACCESSTOKEN_KEY);
    queryClient.invalidateQueries(['auth', 'verify']);
  }

  return (
    <S.Container>
      <S.HeaderWrapper>
        <div className='HeaderLeft'>
          <Link to="/">
            <S.LogoWrapper>
              <S.Logo src={photo} alt="photoGram"/>
            </S.LogoWrapper>
          </Link>
        </div>
        <div className='HeaderCenter'>
          <S.HeaderCenter>
            <NavLink to="/">
              <S.HomeIcon src={homeIcon} alt='Home'/>홈
            </NavLink>
            <NavLink to={location.pathname + location.search}>
              <S.PostingIcon src={addPostingIcon} alt='' onClick={() => openModal()} />게시물 등록
            </NavLink>
          </S.HeaderCenter>
        </div>
        <div className='HeaderRight'>

        {verifyPayload && status !== 'error' ? ( // 로그인 상태인 경우에만 보이는 버튼들
          
            <S.HeaderRight>
              <S.LoginMediumButton onClick={handleLogout} to="/">로그아웃</S.LoginMediumButton>
            </S.HeaderRight>
          
        ) : (
          // 로그인 상태가 아닌 경우에만 보이는 버튼들
          <S.HeaderRight>
            <S.LoginMediumButton to="/login">로그인</S.LoginMediumButton>
            <SignUpButton to="/signup">가입하기</SignUpButton>
          </S.HeaderRight>
        )}
        </div>
      </S.HeaderWrapper>
    </S.Container>
  );
}

export default Header;

