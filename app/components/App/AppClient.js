import React from 'react';
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from './../../layout/default';
import { RoutedContent } from './../../routes';
const config = require('../../../config');

const basePath = process.env.BASE_PATH || config.defaultBasePath;

const AppClient = () => {
    return (
        <Router basename={ basePath }>
            <AppLayout>
                <RoutedContent />
            </AppLayout>
        </Router>
    );
}

export default hot(module)(AppClient);