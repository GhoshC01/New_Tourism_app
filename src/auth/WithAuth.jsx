import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const WithAuth = ({ children }) => {
    
    const isLogin = useSelector(state => state.auth.isLogedin)
    if (isLogin) {
        return <>{children}</>
    } else {
        return <Navigate to ="/"/>
    }
}
export default WithAuth;
