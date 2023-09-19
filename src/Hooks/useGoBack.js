import { useNavigate } from "react-router-dom";


const GoBack = () => {
    const navigate = useNavigate();
    navigate(-1);
}

export default GoBack;