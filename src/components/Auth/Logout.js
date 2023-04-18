import {GoogleLogout} from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const Logout = () => {
    const onSuccess = res => {
        alert('Logout made successfully');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onSuccess={onSuccess}
            />
        </div>
    );
}

export default Logout;