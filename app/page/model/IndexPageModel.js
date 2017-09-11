function getLogInActionPanelConfiguration() {
    return [{
        'label': 'Username',
        'type': 'text',
        'id': 'page-index-login-username'
    }, {
        'label': 'Password',
        'type': 'password',
        'id': 'page-index-login-password'
    }];
}

module.exports = {
    getLogInActionPanelConfiguration: getLogInActionPanelConfiguration
};