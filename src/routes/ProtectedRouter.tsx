import { ACCESSTOKEN_KEY } from "@/constants";
import verifyToken from "@/hooks/verifyToken";
import { getCookie } from "@/util";
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

function ProtectedRouter() {
  const isAuthenticated = verifyToken()
  const isLogin = getCookie(ACCESSTOKEN_KEY);
  const navigate = useNavigate();

  console.log("Protected")

  useEffect(() => {
    if (!isLogin || isAuthenticated === "FAILED") return navigate("/login");
  }, [isAuthenticated]);

  return isLogin && <Outlet />;
}

export default ProtectedRouter;
