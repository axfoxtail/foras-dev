import http from './http.service';
import session from './session.service';

const path = {
    register: 'web/register',
    login: 'auth/login',
    socialLogin: 'auth/login/socials',
    getIndividuals: 'users/individuals',
    getCorporates: 'users/corporates',
    individualDetail: 'users/individuals',
    corporateDetail: 'users/corporates',
    getReviews: 'reviews',
};

export default {
    register: function(user) {
        return http.post(path.register, user, {});
    },
    login: function(user) {
        return http.post(path.login, user, {});
    },
    socialLogin: function(profileObj) {
        return http.post(path.socialLogin, profileObj, {});
    },
    getIndividuals: function(body) {
        const user = session.get('foras-user');
        const api_token = user ? user.api_token : '';
        const header = {
            Authorization: 'Bearer ' + api_token
        };

        return http.post(path.getIndividuals, body, header);
    },
    getCorporates: function(body) {
        const user = session.get('foras-user');
        const api_token = user ? user.api_token : '';
        const header = {
            Authorization: 'Bearer ' + api_token
        };

        return http.post(path.getCorporates, body, header);
    },
    individualDetail: function(param) {
        const user = session.get('foras-user');
        const api_token = user ? user.api_token : '';
        const header = {
            Authorization: 'Bearer ' + api_token
        };

        return http.get(`${path.individualDetail}/${param}`, header);
    },
    corporateDetail: function(param) {
        const user = session.get('foras-user');
        const api_token = user ? user.api_token : '';
        const header = {
            Authorization: 'Bearer ' + api_token
        };

        return http.get(`${path.corporateDetail}/${param}`, header);
    },
    getReviews: function() {
        const user = session.get('foras-user');
        const api_token = user ? user.api_token : '';
        const header = {
            Authorization: 'Bearer ' + api_token
        };

        return http.get(`${path.getReviews}`, header);
    },
}