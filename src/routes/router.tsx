import { Home, User, Signup } from "@/pages";
import Login from "@/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRouter />}>
          <Route path="/" element={<Home />} />
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
