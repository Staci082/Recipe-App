import loadingtaco from "/loadingtaco.gif";

function Welcome() {
    return (
        <div className="welcome empty-recipes">
            <img src={loadingtaco} alt="happy taco" className="loadingtaco" />
            <h1>Welcome to <br/> Fiesta Flavors! </h1>
            <p className="empty-text">Start exploring to discover new recipes <br/> or log in to create your own! </p>
        </div>
    );
}

export default Welcome;
