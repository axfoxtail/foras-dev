import React from 'react';
import CorporateProfileHeader from '../CorporateProfileHeader';
import CorporateProfileBody from '../CorporateProfileBody';
import CorporateProfileFooter from '../CorporateProfileFooter';

class CorporateProfile extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="corporate-profile">
                <CorporateProfileHeader user={this.props.user} />
                <CorporateProfileBody user={this.props.user} />
                <CorporateProfileFooter user={this.props.user} />
            </div>
        );
    }
}

export default CorporateProfile;