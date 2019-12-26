import React from 'react';
import './individual-detail.scss';
import IndividualDetailHeader from '../../../components/IndividualDetailHeader';
import IndividualDetailBody from '../../../components/IndividualDetailBody';
import userApi from '../../../services/user.service';

class IndividualDetail extends React.Component {
    constructor(props) {
        super();
        this.state = {
            individual: {},
            reviews: [],
        }
    }

    componentDidMount() {
        const param = window.location.href.split('/individuals/')[1];
        userApi.individualDetail(param)
            .then((response) => {
                if(response.status !== 200 || !response.data) {
                    window.location.href='/individuals';
                }
                this.setState({
                    individual: response.data.individual,
                    reviews: response.data.reviews,
                });
            })
            .catch((error) => {
                console.log('err: ', error);
            })
    }

    render() {
        return (
            <div className="main bg-detail-header">
                <IndividualDetailHeader data={this.state.individual} />
                <IndividualDetailBody data={this.state.individual} reviews={this.state.reviews} />
            </div>
        );
    }
}

export default IndividualDetail;