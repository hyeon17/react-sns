import * as S from './style'
import { profile } from "@/types/user"


function UserInfo({ userProfile, postLength }: { userProfile: profile | undefined, postLength: number } ) {
  
  return (
    <S.gridDiv>
      <div className='imgWrapper'>
        {/* <img src={userProfile?.profile} /> */}
      </div>
      <div>{userProfile?.username}</div>
      <div>게시물 <span>{postLength}</span></div>
      <div>{userProfile?.email}</div>
    </S.gridDiv>
  )
}

export default UserInfo