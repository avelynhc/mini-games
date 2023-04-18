export const refreshTokenSetup = res => {
    // timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600-5*60)*1000;
    const refreshToken = async() => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600-5*60)*1000;
        console.log('newAuthRes:', newAuthRes);
        console.log('new auth token', newAuthRes.id_token);
        setTimeout(refreshToken, refreshTiming); // set up other timer after the first one
    }
    setTimeout(refreshToken, refreshTiming); // set up first refresh timer
}

export default refreshTokenSetup;