import http from './http.service';
import session from './session.service';

const path = {
    getNotifications: 'notifications',
};

export default {
    getNotifications: function() {
        const user = session.get('foras-user');
        const api_token = user ? user.api_token : '';
        const header = {
            Authorization: 'Bearer ' + api_token
        };

        return http.get(path.getNotifications, header);
    },
}