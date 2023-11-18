import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import { Outlet,useNavigate} from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const RootLayout = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authCtx.isLoggedIn) {
    // If not logged in, navigate to the Signin page
    return (
        navigate('/Signin')
    )
  }

  return (
    <>
      <section>
        <div>
          <Header />
        </div>
      </section>
      <section>
        <div className="grid grid-cols-12">
          <div className="col-span-3 bg-white h-screen pl-6">
            <Sidebar />
          </div>
          {authCtx.isLoggedIn && (
            <main className="col-span-9 bg-green-200 h-screen pl-6">
              <Outlet />
            </main>
          )}
        </div>
      </section>
    </>
  );
};

export default RootLayout;
