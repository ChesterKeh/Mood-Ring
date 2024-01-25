import { useNavigate } from "react-router-dom";

export default function TokenExpirePage({ setUser }) {
    const navigate = useNavigate();

    const buttonOnClick = () => {
        setUser(null);
        navigate("/");
    }

    return (
        <div>
            <p>Token has expired, please Login again</p>
            <button onClick={buttonOnClick}>Go</button>
        </div>
    );
}