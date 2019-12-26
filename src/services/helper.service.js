import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export default {
    showToast: function(title, message, type_code) {
        let type = 'default';
        
        switch(type_code) {
            case 1 : 
                type = 'success';
                break;
            case 2 : 
                type = 'warning';
                break;
            case 3 : 
                type = 'danger';
                break;
            case 4 : 
                type = 'info';
                break;
            default : 
                type = 'default';
                break;
        }
        
        store.addNotification({
            title: title,
            message: message,
            type: type,                         // 'default', 'success', 'info', 'warning'
            container: 'bottom-left',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
            dismiss: {
              duration: 3000 
            }
        });
    }
}