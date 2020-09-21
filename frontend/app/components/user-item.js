import Component from '@ember/component';
import {inject as service} from '@ember/service';
import axios from 'npm:axios';

export default Component.extend({
    tagName: "li",
    isShowingModal: false,
    session: service(),
    currentUser: service(),
    actions: {
        toggleDone(e) {
            const instance = axios.create({
                baseURL: 'http://127.0.0.1:8000/api/',
                timeout: 1000,
                headers: {'Authorization': `Bearer ${this.get('session.data.authenticated').access_token}`},
                data: {}
            });
            const user = this.get('user')
            const todoId = this.get('todoId')

            if (e.target.checked) {
                instance.post('todos/' + todoId + '/users/' + user.get('id'))
                    .then(function (response) {
                        // handle success
                        console.log(response);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })

            } else {
                instance.delete('todos/' + todoId + '/users/' + user.get('id'),)
                    .then(function (response) {
                        // handle success
                        console.log(response);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            }
        },
    }
});


