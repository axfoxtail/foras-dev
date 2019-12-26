import React from 'react';
import session from '../../services/session.service';
import './profile.scss';
import IndividualProfile from '../../components/IndividualProfile';
import CorporateProfile from '../../components/CorporateProfile';

class Profile extends React.Component {
    constructor(props) {
        super();
        this.state = {
            role: null,
            user: {},
        }
    }

    componentDidMount() {
        const user = session.get('foras-user');
        if(user) {
            this.setState({role: user.role, user: user});
        } else {
            window.location.href='/';
        }
    }

    render() {
        return (
            <div className="main bg-detail-header">
                {this.state.role === 'individual' && <IndividualProfile user={this.state.user} />}
                {this.state.role === 'corporate' && <CorporateProfile user={this.state.user} />}
            </div>
        );
    }
    
}

export default Profile;