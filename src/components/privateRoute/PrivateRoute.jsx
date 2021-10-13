import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const PrivateRoute = ({ children, ...props }) => {
    const { user } = useAuth();
    return (
        user !== null ?
            <Route {...props}>
                {children}
            </Route >
            :
            <Redirect to='/login' />
    );
}

export default PrivateRoute;