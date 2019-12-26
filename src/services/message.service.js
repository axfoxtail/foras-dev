import http from './http.service';
import session from './session.service';

const path = {
    getMessages: 'messages',
    sendMessage: 'messages/create',
};

export default {
    getMessages: function() {
        const user = session.get('foras-user');
        const api_token = user ? user.api_token : '';
        const header = {
            Authorization: 'Bearer ' + api_token
        };

        return http.get(path.getMessages, header);
    },
    sendMessage: function(body) {
        const user = session.get('foras-user');
        const api_token = user ? user.api_token : '';
        const header = {
            Authorization: 'Bearer ' + api_token
        };

        return http.post(path.sendMessage, body, header);
    },
}