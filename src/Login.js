import React, { useState } from "react";
import "./App.css";

function Login(props) {
    const [token, setToken] = useState('');
    const login = () => {
        fetch('https://na1.staging.nice-incontact.com/public/authentication/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "email": "dhana@so32naia.com", "password": "Password1", "getUserDetails": false }),
        }).then(response => response.json())
            .then(data => {
                setToken(data.token);
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (<>
        {props.expanded ?
            <div className="sidenavs ">
                {token !== '' ? <div>LoggedIn Success</div> : <div className="innerLogin">
                    <label className="ipTxt"> UserName : </label><input className="ipTxt" defaultValue="UserName"></input><br></br>
                    <label className="ipTxt"> Password : </label><input type="password" className="ipTxt" ></input><br></br>
                    <div className="loginBtn" onClick={login}><button>Login</button><br></br>
                        <a href="void()">Forgot your password?</a><br></br>
                    </div>
                </div>}
                {/* <img alt="loading"
                        height="450px"
                        width="250px"
                        src={process.env.PUBLIC_URL +"/Login-1.jpg"}></img> */}
            </div>
            :
            <p>Login</p>
        }
        {

        }
    </>
    );
}

export default Login;
