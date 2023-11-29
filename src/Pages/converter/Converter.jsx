import React, { Component } from "react";
import { MdOutlineChevronLeft } from "react-icons/md";

const initialState = {
    pounds: "",
    grams: "",
    kilograms: "",
    ounces: "",
    cups: "",
    fahrenheit: "",
    celsius: "",
    kelvin: "",
};

class Converter extends Component {
    state = initialState;

    handleGrams = (e) => {
        const grams = e.target.value;

        this.setState({
            grams,
            pounds: (grams * 0.0022046).toFixed(2),
            kilograms: (grams / 1000).toFixed(2),
            ounces: (grams * 0.03527).toFixed(2),
        });

        if (grams === "") {
            this.setState(initialState);
        }
    };

    handleKilograms = (e) => {
        const kilograms = e.target.value;

        this.setState({
            kilograms,
            pounds: (kilograms * 2.2046).toFixed(2),
            grams: (kilograms * 1000).toFixed(2),
            ounces: (kilograms * 35.27).toFixed(2),
        });

        if (kilograms === "") {
            this.setState(initialState);
        }
    };
    handlePounds = (e) => {
        const pounds = e.target.value;

        this.setState({
            pounds,
            grams: (pounds / 0.0022046).toFixed(2),
            kilograms: (pounds / 2.2046).toFixed(2),
            ounces: (pounds * 16).toFixed(2),
            cups: (pounds * 2.3255).toFixed(2),
        });

        if (pounds === "") {
            this.setState(initialState);
        }
    };

    handleOunces = (e) => {
        const ounces = e.target.value;

        this.setState({
            ounces,
            pounds: (ounces / 16).toFixed(2),
            kilograms: (ounces / 35.27).toFixed(2),
            grams: (ounces / 0.03527).toFixed(2),
        });

        if (ounces === "") {
            this.setState(initialState);
        }
    };
    handleCups = (e) => {
        const cups = e.target.value;

        this.setState({
            cups,
            pounds: (cups / 2.3255).toFixed(2),
            grams: (cups * 236.588).toFixed(2),
            kilograms: (cups * 0.236588).toFixed(2),
            ounces: (cups * 8).toFixed(2),
        });

        if (cups === "") {
            this.setState(initialState);
        }
    };

    handleFahrenheitChange = (e) => {
        const fahrenheit = e.target.value;

        this.setState({
            fahrenheit,
            celsius: ((fahrenheit - 32) / 1.8).toFixed(2),
            kelvin: ((fahrenheit - 32) / 1.8 + 273.15).toFixed(2),
        });
    };

    handleCelsiusChange = (e) => {
        const celsius = e.target.value;

        this.setState({
            celsius,
            fahrenheit: (celsius * 1.8 + 32).toFixed(2),
            kelvin: (parseFloat(celsius) + 273.15).toFixed(2),
        });
    };

    handleKelvinChange = (e) => {
        const kelvin = e.target.value;
        this.setState({
            kelvin,
            fahrenheit: ((kelvin - 273.15) * 1.8 + 32).toFixed(2),
            celsius: (kelvin - 273.15).toFixed(2),
        });
    };
    clearAll = () => {
        this.setState(initialState);
    };

    render() {
        return (
            <div className="global-container">
                <a href="/" className="back-button">
                    <MdOutlineChevronLeft />
                </a>
                <form className="converter-form" onSubmit={(e) => e.preventDefault()} noValidate autoComplete="off">
                    <h2>Converter</h2>
                    <div className="converter-container">
                        <div className="converter-inner-form">
                            <label htmlFor="grams">grams</label>
                            <input name="grams" value={this.state.grams} onChange={this.handleGrams} type="number" className="input-field" />
                            <label htmlFor="kilograms">kilograms</label>
                            <input name="kilograms" value={this.state.kilograms} onChange={this.handleKilograms} type="number" className="input-field" />
                            <label htmlFor="ounces">ounces</label>
                            <input name="ounces" value={this.state.ounces} onChange={this.handleOunces} type="number" className="input-field" />
                            <label htmlFor="pounds">pounds</label>
                            <input name="pounds" value={this.state.pounds} onChange={this.handlePounds} type="number" className="input-field" />
                            {/* <label htmlFor="cups">cups</label>
                            <input name="cups" value={this.state.cups} onChange={this.handleCups} type="number" className="input-field" /> */}
                        </div>
                        <div className="converter-inner-form">
                            <label htmlFor="fahrenheit">fahrenheit</label>
                            <input name="fahrenheit" value={this.state.fahrenheit} onChange={this.handleFahrenheitChange} type="number" className="input-field" />
                            <label htmlFor="celsius">celsius</label>
                            <input name="celsius" value={this.state.celsius} onChange={this.handleCelsiusChange} type="number" className="input-field" />
                            <label htmlFor="kelvin">kelvin</label>
                            <input name="kelvin" value={this.state.kelvin} onChange={this.handleKelvinChange} type="number" className="input-field" />
                        </div>
                    </div>
                    <button onClick={this.clearAll} className="submit-button converter-button">
                        Clear All
                    </button>
                </form>
            </div>
        );
    }
}

export default Converter;
