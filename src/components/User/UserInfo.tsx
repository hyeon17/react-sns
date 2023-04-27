import * as S from './style'
import { profile } from "@/types/user"
import { CgProfile } from "react-icons/cg"
import { theme } from '../../styles/theme'

function UserInfo({ userProfile, postLength }: { userProfile: profile | undefined, postLength: number } ) {
  
  return (
    <S.gridDiv>
      <div className='imgWrapper'>
        {userProfile?.profile ? 
        <img src={userProfile?.profile} /> : 
        <CgProfile size={150} color={theme.colors.dimGray} />}
      </div>
      <div>{userProfile?.username}</div>
      <div>게시물 <span>{postLength}</span></div>
      <div>{userProfile?.email}</div>
    </S.gridDiv>
  )
}

export default UserInfo