import { Outlet, useNavigate } from "react-router-dom";
import Header from "../componentes/Header";
import AuthHeader from '../componentes/AuthHeader'
import { useDispatch,  useSelector } from "react-redux";
import { logout } from "../reduxStore/authSlice";
   
const Layout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = useSelector(state => state.auth.isLogedin)

    const applogout = () => {
        dispatch(logout())
        navigate("/")
    }

    return (
        <>
            {
                login ? <AuthHeader logout={applogout} />
                    : <Header />
            }
           
            <Outlet />
            

        </>
    )
}
export default Layout;