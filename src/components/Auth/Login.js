import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshTokenSetup';

import classes  from "./Login.module.css";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const Login = () => {
    const onSuccess = res => {
        console.log('[Login Success] currentUser:', res.profileObj );
        refreshTokenSetup(res);
    };

    const onFailure = res => {
        console.log('[Login Failed:', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop: '100px'}}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;