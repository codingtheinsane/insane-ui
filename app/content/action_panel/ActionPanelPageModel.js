function getInitialActionPanelConfiguration() {
    return [{
        'label': 'Boolean Input',
        'type': 'boolean',
        'id': 'action-panel-boolean'
    },{
        'label': 'Date',
        'type': 'date',
        'id': 'action-panel-date'
    },{
        'label': 'Datetime',
        'type': 'datetime',
        'id': 'action-panel-datetime'
    },{
        'label': 'Decimal',
        'type': 'decimal',
        'id': 'action-panel-decimal'
    },{
        'label': 'Integer',
        'type': 'integer',
        'id': 'action-panel-integer'
    },{
        'label': 'Text',
        'type': 'text',
        'id': 'action-panel-text'
    },{
        'label': 'Password',
        'type': 'password',
        'id': 'action-panel-password'
    },{
        'label': 'Single Selection',
        'type': 'single-selection',
        'id': 'action-panel-single-selection',
        'values': ['First Value','Second Value','Third Value']
    },{
        'label': 'Single Selection with Search',
        'type': 'single-selection',
        'id': 'action-panel-single-selection-with-search',
        'values': ['First Value','Second Value','Third Value','Fourth Value', 'Fifth Value', 'Sixth Value']
    },{
        'label': 'Multiple Selection',
        'type': 'multiple-selection',
        'id': 'action-panel-multiple-selection',
        'values': ['First Value','Second Value','Third Value']
    },{
        'label': 'Multiple Selection with Search',
        'type': 'multiple-selection',
        'id': 'action-panel-multiple-selection-with-search',
        'values': ['First Value','Second Value','Third Value','Fourth Value', 'Fifth Value', 'Sixth Value']
    }];
}

module.exports = {
    getInitialActionPanelConfiguration: getInitialActionPanelConfiguration
};