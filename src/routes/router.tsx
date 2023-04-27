import { Home, User, Signup } from "@/pages";
import Login from "@/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import ComponentTest from "@/components/ComponentTest";

import Header from "@/components/Header";

function Router() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRouter />}>
          <Route  path="/" element={<Home />} />
        </Route>
        <Route path="/posts/:user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/test"
          element={<ComponentTest element={"Insert Test Component Here"} />}
        />
        <Route path="*" element={<>notFound</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
