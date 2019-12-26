import React from 'react';
import IndividualProfileHeader from '../IndividualProfileHeader';
import IndividualProfileBody from '../IndividualProfileBody';
import IndividualProfileFooter from '../IndividualProfileFooter';

class IndividualProfile extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="individual-profile">
                <IndividualProfileHeader user={this.props.user}  />
                <IndividualProfileBody user={this.props.user}  />
                <IndividualProfileFooter user={this.props.user} />
            </div>
        );
    }
}

export default IndividualProfile;