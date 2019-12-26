import React from 'react';
import GoogleMapReact from 'google-map-react';
import './foras-opportunity-map.scss';
import environment from '../../environments';
import session from '../../services/session.service';
import FilterModal from '../FilterModal';

const marker_me = require('../../assets/images/marker-me.png');
const marker_foras = require('../../assets/images/marker-foras.png');
const img_map_footer = require('../../assets/images/map-footer.png');

class ForasOpportunityMap extends React.Component {
    constructor(props) {
        super();

        this.state = {
            myLocation: {},
        }
    }

    componentDidMount() {
        const user = session.get('foras-user');
        if(user) {
            const myLocation = {
                lat: Number(user.latitude),
                lng: Number(user.longitude)
            };
            this.setState({myLocation: myLocation});
        }
    }

    static defaultProps = {
        center: {
          lat: 59.954564,
          lng: 30.334654
        },
        zoom: 5.5
    };

    render() {
        return (
            <div className="map-container">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: environment.GoogleMapAPIKEY }}
                    defaultCenter={this.state.myLocation}
                    defaultZoom={this.props.zoom}
                >
                    <MarkerMe
                        lat={this.state.myLocation.lat}
                        lng={this.state.myLocation.lng}
                    />
                    {/* jobs map */}
                    {(this.props.userRole === 'individual' && this.props.data) && 
                        this.props.data.map((obj, index) =>
                            <MarkerForas 
                                key={index}
                                lat={Number(obj.users.latitude)} 
                                lng={Number(obj.users.longitude)}
                            />
                        )
                    }
                    {/* individuals map */}
                    {(this.props.userRole === 'corporate' && this.props.data) && 
                        this.props.data.map((obj, index) =>
                            <MarkerForas 
                                key={index}
                                lat={Number(obj.latitude)} 
                                lng={Number(obj.longitude)}
                            />
                        )
                    }
                </GoogleMapReact>
                <FilterModal />
                <img src={img_map_footer} className="map-footer" alt="map-footer" />
            </div>
        );
    }
}

export default ForasOpportunityMap;

function MarkerMe() {
    return(
        <div className="marker-me">
            <img src={marker_me} className="marker-me-img" alt="marker-me" />
        </div>
    );
}

function MarkerForas() {
    return(
        <div className="marker-foras">
            <img src={marker_foras} className="marker-foras-img" alt="marker-foras" />
        </div>
    );
}