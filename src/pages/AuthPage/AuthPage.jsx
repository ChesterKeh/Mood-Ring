import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/UserForm/LoginForm/LoginForm";
import SignUpForm from "../../components/UserForm/SignupForm/SignupForm";

export default function AuthPage({ setUser }) {
    const [displayLogin, setDisplayLogin] = useState(true);
    const [displaySignup, setDisplaySignup] = useState(false);
    const navigate = useNavigate();

    const onclickSignup = () => {
        setDisplayLogin(false);
        setDisplaySignup(true);
    }

    const onclickLogin = () => {
        setDisplaySignup(false);
        setDisplayLogin(true);
    }

    return (
        <div>
            <h1>AuthPage</h1>
            {displayLogin ? 
                <div>
                    <LoginForm setUser={setUser}/>
                    <p>If you don't have an account, <span onClick={onclickSignup}>Signup</span> here.</p>
                </div>
                : <></>}
            {displaySignup ? 
                <div>
                    <SignUpForm setUser={setUser} navigate={navigate}/>
                    <p>If you already have an account, <span onClick={onclickLogin}>Login</span> here.</p>
                </div> 
                : <></>}
        </div>
    );
}
