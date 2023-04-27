import { Home, User, Signup } from "@/pages";
import Login from "@/pages/Login";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import ComponentTest from "@/components/ComponentTest";
import BasicModal from "@/components/BasicModal";
import LoginForm from "@/components/form/LoginForm";
import { useMutation } from "@tanstack/react-query";
import { LoginResponse } from "@/types/response";
import { setCookie } from "@/util";
import { login } from "@/api/auth";
import { useMutate } from "@/components/form/useMutate";


function Router() {
  const {mutate, isLoading, error} = useMutate();
  // const { mutate, isLoading, error } = useMutation(login, {
  //   onSuccess: (data: LoginResponse) => {
  //     console.log(data)
  //     if(!data) return;
  //     setCookie('accessToken', data.payload!.accessToken, { path: '/', maxAge: data.payload!.content?.exp - data.payload!.content?.iat })    
  //   },
  // })

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRouter />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/posts/:user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/test"
          element={<BasicModal content={<LoginForm mutate={mutate} isLoading={isLoading} error={error} modal={true}/>} />}
        />
        <Route path="*" element={<>notFound</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
