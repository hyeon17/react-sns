import { instance } from "@/api/axios";
import { ACCESSTOKEN_KEY } from "@/constants";
import { setCookie } from "@/util";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const login = async () => {
  const {data} = await instance.post('/auth/login', {
    email: 'test@gmail.com',
    password: 'testpassword'
  });

  return data;
}

function Login() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate:loginMutate } = useMutation(login, {onSuccess: (data) => {
    console.log({data})
    setCookie(ACCESSTOKEN_KEY, data.payload[ACCESSTOKEN_KEY], {maxAge: data.payload.content.exp - data.payload.content.iat});
    navigate('/');
    queryClient.invalidateQueries(['verify', data.payload[ACCESSTOKEN_KEY]])
  }})

  return <div>Login
    <button onClick={() => loginMutate()}>로그인</button>
  </div>;
}

export default Login;
