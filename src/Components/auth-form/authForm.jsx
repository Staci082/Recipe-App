function form({ username, setUsername, password, setPassword, label, onSubmit }) {
    return (
        <div className="global-container">
            <div className="auth-container">
                <a href="/" className="back-button">
                    &times;
                </a>
                <form className="auth-form" onSubmit={onSubmit}>
                    <h2>{label}</h2>

                    <div className="form-group">
                        <label htmlFor="name">Username:</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
