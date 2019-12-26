import http from './http.service';
import session from './session.service';

const path = {
    getFavoriteIndividuals: 'favorites/individuals',
    toggleFavoriteIndividual: 'favorites/individuals/toggle',
    toggleFavoriteCorporate: 'favorites/corporates/toggle',
    toggleFavoriteJob: 'favorites/jobs/toggle',
};

export default {
    getFavoriteIndividuals: function() {
        const user = session.get('foras-user');
        const api_token = user ? user.api_token : '';
        const header = {
            Authorization: 'Bearer ' + api_token
        };
        return http.get(path.getFavoriteIndividuals, header);
    },
    toggleFavoriteIndividual: function(body) {
        const user = session.get('foras-user');
        const api_token = user ? user.api_token : '';
        const header = {
            Authorization: 'Bearer ' + api_token
        };
        return http.post(path.toggleFavoriteIndividual, body, header);
    },
    toggleFavoriteCorporate: function(body) {
        const user = session.get('foras-user');
        const api_token = user ? user.api_token : '';
        const header = {
            Authorization: 'Bearer ' + api_token
        };
        return http.post(path.toggleFavoriteCorporate, body, header);
    },
    toggleFavoriteJob: function(body) {
        const user = session.get('foras-user');
        const api_token = user ? user.api_token : '';
        const header = {
            Authorization: 'Bearer ' + api_token
        };
        return http.post(path.toggleFavoriteJob, body, header);
    }
}