import React from 'react';
import GoogleLogin from 'react-google-login';
import environment from '../../environments';
import helper from '../../services/helper.service';


const img_google = require('../../assets/images/btn-google.png');

class ForasGoogleLogin extends React.Component {
    constructor(props) {
        super();
    }
    
    responseSuccessGoogle = (response) => {
        if (response.profileObj) {
            let profileObj = {
                email: response.profileObj.email,
                name: response.profileObj.name,
                logo: response.profileObj.imageUrl,
                first_name: response.profileObj.givenName,
                last_name: response.profileObj.familyName,
                login_type: 'google'
            };
            this.props.handleGoogleLoginResponse(profileObj);
        }
    }

    responseFailureGoogle = (error) => {
        console.log('onFailure: ', error);
    }

    render() {
        return (
            <GoogleLogin
                clientId={environment.GoogleSigninClientID}
                render={renderProps => (
                    <button className="social-btn icon-button mx-5" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <img src={img_google} className="social-icon" alt="Google" />
                    </button>
                )}
                buttonText="Login"
                onSuccess={this.responseSuccessGoogle}
                onFailure={this.responseFailureGoogle}
                cookiePolicy={'single_host_origin'}
            />
        );
    }
}

export default ForasGoogleLogin;