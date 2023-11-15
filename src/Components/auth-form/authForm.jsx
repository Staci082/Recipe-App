import { MdOutlineChevronLeft } from "react-icons/md";

function form({ username, setUsername, password, setPassword, label, handleSubmit }) {
    return (
        <div className="global-container">
            <div className="auth-container">
                <a href="/" className="back-button">
                    <MdOutlineChevronLeft />
                </a>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <h2 className="form-title">{label}</h2>

                    <div className="form-group">
                        <input placeholder="Username" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="form-group">
    
                        <input placeholder="Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="submit-button">
                        {label}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default form;
