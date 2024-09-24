import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const UnAuth = ({ children }) => {
    
    const isLogin = useSelector(state => state.auth.isLogedin)
    if (!isLogin) {
        return <>{children}</>
    } else {
        return <Navigate to ="/dashboard"/>
    }
}
export default UnAuth;
