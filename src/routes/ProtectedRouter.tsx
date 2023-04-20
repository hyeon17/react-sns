import { ACCESSTOKEN_KEY } from "@/constants";
import { getCookie } from "@/util";
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

function ProtectedRouter({ mode }: { mode?: "test" }) {
  const isLogin = getCookie(ACCESSTOKEN_KEY);
  const navigate = useNavigate();

  useEffect(() => {
    if (mode !== "test" && !isLogin) return navigate("/login");
  }, []);

  return isLogin && <Outlet />;
}

export default ProtectedRouter;
