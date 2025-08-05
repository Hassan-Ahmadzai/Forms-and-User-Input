import { useState } from "react";

export default function Login() {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: '',
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false,
    });

    function handleSubmit(event) {
        event.preventDefault();

        console.log(enteredValues); 
    };

    function handleInputChange(identifier, value) {
        setEnteredValues((prevValues) => ({
            ...prevValues,
            [identifier]: value,
        }));
    };

    function handleInputBlur(identifier) {
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input 
                        id='email'
                        type="email" 
                        name='email' 
                        // onBlur={}
                        value={enteredValues.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input 
                        id='password'
                        type="password" 
                        name='password'
                        value={enteredValues.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                    /> 
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button 
                    type='submit'
                    className="button"
                    // onClick={handleSubmit}
                >
                    Login
                </button>
            </p>
        </form>
    );
};