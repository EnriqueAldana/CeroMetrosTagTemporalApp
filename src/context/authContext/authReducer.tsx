import { AuthState } from './AuthContext';

type authAction= 
| {
    type:'signIn';
}
| {
    type:'signOut';
}

export const authReducer= (state: AuthState, action: authAction): AuthState =>{

            switch (action.type) {
                case 'signIn':
                    // no mutar el objeto
                    // asi state.isLoggedIn = true
                    return {
                        ...state,
                        isLoggedIn: true,
                        username: 'Non-username-yet'

                    }
                    break;
                    case 'signOut':
                        // no mutar el objeto
                        // asi state.isLoggedIn = true
                        return {
                            ...state,
                            isLoggedIn: false,
                            username: 'Non-username-yet'
    
                        }
                        break;
                default:
                    return state;
            }
    return state;
}