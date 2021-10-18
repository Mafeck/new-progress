
import { Paper, TextField } from "@material-ui/core"; 
import { Container, GrayButton, BlueButton } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router";

const Login = () => {

    const history = useHistory();

    return (
        <div>
            <div></div>
            <h1>Login</h1>
            <div>
                <input type="text" />
                <input type="text" />
                <button>Sign in</button>
            </div>
            <div>
                <span>Don't have an account?</span>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Login;