module.exports = {
    'left': [
        {
            'type': 'menu', 'run': 'Samples', 'children': [
            {'type': 'header', 'run': 'Panel'},
            {'type': 'link', 'run': 'Action Panel', 'link': '?/panel/ActionPanel/'}
        ]
        }
    ],
    'right': [
        {'type': 'active_link', 'run': 'Pedro Almeida', 'link': '?/'},
        {'type': 'text', 'run': 'Version 1.0'}
    ]
};