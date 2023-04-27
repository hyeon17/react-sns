import { instance } from "@/api/axios";
import Header from "@/components/Header";
import { ACCESSTOKEN_KEY } from "@/constants";
import { getCookie } from "@/util";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const {data: username, status} = useQuery(['verify', getCookie(ACCESSTOKEN_KEY)],()=>instance.get('/auth/verify'), {
    select: (res) => {
      return res.data.payload.user.username
    }
  })
  const navigate = useNavigate();

  useEffect(()=>{
    if(status !== 'success' && !username) return;

    navigate(`/posts/${username}`);
  },[username])
  // return <div>
  //   <Header />
  //   Home
  // </div>;

  return null;
}

export default Home;
