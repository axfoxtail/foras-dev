import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import environment from '../../environments';
import helper from '../../services/helper.service';


const img_facebook = require('../../assets/images/btn-facebook.png');

class ForasFacebookLogin extends React.Component {
    constructor(props) {
        super();
    }
    
    responseFacebook = (response) => {
        if(response.userID) {
            let profileObj = {
                name: response.name,
                email: response.email,
                first_name: response.first_name,
                last_name: response.last_name,
                logo: response.picture.data.url
            };
            this.props.handleFacebookLoginResponse(profileObj);
        } else {
            console.log('FB: ', response);
        }
        
    }

    render() {
        return (
            <FacebookLogin
                appId={environment.FacebookAppID}
                // autoLoad
                fields="name,email,first_name,last_name,picture"
                callback={this.responseFacebook}
                render={renderProps => (
                    <button className="social-btn icon-button" onClick={renderProps.onClick}>
                        <img src={img_facebook} className="social-icon" alt="Facebook" />
                    </button>
                )}
            />
        );
    }
}

export default ForasFacebookLogin;