import React from 'react';
// import { LinkedIn } from 'react-linkedin-login-oauth2';
import environment from '../../environments';
import helper from '../../services/helper.service';


const img_linkedin = require('../../assets/images/btn-linkedin.png');

// class ForasLinkedinLogin extends React.Component {
//     constructor(props) {
//         super();
//     }

//     handleSuccess = (response) => {
//         console.log('in-res: ', response);
//     }

//     handleFailure = (error) => {
//         console.log('in-err: ', error);
//     }
    
//     // responseFacebook = (response) => {
//     //     if(response.userID) {
//     //         let profileObj = {
//     //             name: response.name,
//     //             email: response.email,
//     //             first_name: response.first_name,
//     //             last_name: response.last_name,
//     //             logo: response.picture.data.url
//     //         };
//     //         this.props.handleFacebookLoginResponse(profileObj);
//     //     } else {
//     //         console.log('FB: ', response);
//     //     }
//     // }

//     render() {
//         return (
//             <LinkedIn
//                 clientId={environment.LinkedinAppID}
//                 scope="r_liteprofile,r_emailaddress,w_member_social"
//                 fields="id,firstName,lastName,emailAddress"
//                 onFailure={this.handleFailure}
//                 onSuccess={this.handleSuccess}
//                 redirectUri="https://eb44db0a.ngrok.io/"
//                 renderElement={({ onClick, disabled }) => (
//                     <button className="social-btn icon-button" onClick={onClick} disabled={disabled}>
//                         <img src={img_linkedin} className="social-icon" alt="Linkedin" />
//                     </button>
//                 )}
//             />
//         );
//     }
// }

// export default ForasLinkedinLogin;


class ForasLinkedinLogin extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount(){
        // (function() {
        //     var e = document.createElement("script");
        //     e.type = "text/javascript";
        //     e.async = true;
        //     e.src = "http://platform.linkedin.com/in.js?async=true";
        //     var t = document.getElementsByTagName("script")[0];
        //     t.parentNode.insertBefore(e, t)
        // })();   
    }
    
    //Trigger Login for LinkedIn
    linkedinLogin = () => {
        // window.IN.init({
        //     api_key : environment.LinkedinAppID
        // });
        this.getUserDetails()
        console.log( "Loaded" )
    }
    
    getUserDetails = () => {
        window.IN.User.authorize().then((res) => {
            console.log('res: ', res);
        });
        // window.IN.User.authorize( function(){ 
        //     window.IN.API.Profile("me")
        //         .fields(["id", "firstName", "lastName", "pictureUrl", "publicProfileUrl"])
        //         .result(function(result) {
        //             console.log(result);
        //             alert("Successfull login from linkedin : "+ result.values[0].firstName + " " + result.values[0].lastName);
        //         })
        //         .error(function(err) {
        //             console.log('Import error - Error occured while importing data')
        //         });
        // });
    }
    render(){
        return(
            <img src={img_linkedin} title="linkedin login" alt="linkedin" onClick={ () => this.linkedinLogin() }/>
        )
    }
}

export default ForasLinkedinLogin;