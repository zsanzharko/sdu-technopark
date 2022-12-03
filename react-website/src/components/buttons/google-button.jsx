import React, {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import defaultAvatar from "../../assets/images/blank.svg";
import './google-button.scss';

const GoogleButton = () => {

    const [user, setUser] = useState({});

    function handleCallbackResponse(response) {
        let userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById('sign-in').hidden = true;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById('sign-in').hidden = false;
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "449942815359-c3h9k9ug468bj8p26jj68l45hic0geb1.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        });

        google.accounts.id.renderButton(
            document.getElementById('sign-in'),
            { theme: 'outline', size: 'large' }
        );
    }, []);

    return (
        <div className="google-button">

            <div id='sign-in'></div>

            {Object.keys(user).length !== 0 &&
                <div className="mini-profile">
                    <b>{user.name.split(' ')[0]}</b>
                    <div className="avatar-frame" onClick={(e) => alert("Hi")}>
                        <img src={defaultAvatar} alt="logo" loading="lazy" />
                        <div className="dropdown-menu">
                            <a>Profile</a>
                            <a>Settings</a>
                            <a onClick={(e) => handleSignOut(e)}>Sign out</a>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default GoogleButton;