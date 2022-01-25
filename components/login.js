import styles from "../styles/Card.module.css";
import{useState} from "react";

function Login() {

    const [loggedIn, setLoggedIn] = useState(true);
    
    const ternary = loggedIn ? "logged in" : "not logged in";

    return (
    <div>
    <div>{loggedIn ? "You are logged in." : "You are not logged In."}</div>
    <button>
        onClick={function (){
            setLoggedIn(!loggedIn);
        }}
        {loggedIn ? "log out" : "log in"}
    </button>
    </div>
    );
}

export default Login;