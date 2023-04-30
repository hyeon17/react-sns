import { useState } from "react";
import * as S from "./style";
import { ReactComponent as LikeLogo } from "@/assets/likeLogo.svg";
import { ReactComponent as CommentLogo } from "@/assets/commentLogo.svg";

type Props ={
  src: string
  like: number
  comment: number
  onClick: () => void
}

function Post({src, like, comment, onClick}: Props) {
  const [isHovering, setIsHovering] = useState(false)

  const MouseOverHandler = () => {
    setIsHovering(true);
  };

  const MouseOutHandler = () => {
    setIsHovering(false);
  };
  return (
    <div
      className="postlink"
      onMouseOver={MouseOverHandler}
      onMouseOut={MouseOutHandler}
      onClick={onClick}
    >
      {isHovering ? (
        <S.hoverDiv>
          <S.flexCenterHoverDiv>
            <LikeLogo />
            <span>{like}</span>
          </S.flexCenterHoverDiv>
          <S.flexCenterHoverDiv>
            <CommentLogo />
            <span>{comment}</span>
          </S.flexCenterHoverDiv>
        </S.hoverDiv>):null}
      <div className="imgWrapper">
        <img src={src} />
      </div>
    </div>
  );
}

export default Post;
