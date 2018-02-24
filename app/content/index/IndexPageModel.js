function getLogInActionPanelConfiguration() {
    return [{
        'label': 'Username',
        'type': 'text',
        'id': 'content-index-login-username'
    }, {
        'label': 'Password',
        'type': 'password',
        'id': 'content-index-login-password'
    }];
}

module.exports = {
    getLogInActionPanelConfiguration: getLogInActionPanelConfiguration
};