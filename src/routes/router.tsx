import { Home, User, Signup } from "@/pages";
import Login from "@/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";

import Header from "@/components/Header";

function Router() {

  
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        
        <Route element={<ProtectedRouter mode="test" />}>
          <Route  path="/" element={<Home />} />
        </Route>
        <Route path="/posts/:user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<>notFound</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
