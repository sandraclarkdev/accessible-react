import React from 'react';
import ReactDOM from 'react-dom';

import {ThemeProvider, createTheme} from '@material-ui/core/styles'
import App from './App';
import {store} from './app/store';
import {Provider} from 'react-redux';

const theme = createTheme();

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
