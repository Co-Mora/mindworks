import React from 'react';
import Navigation from './navigation'
import configureStore from './modules/store';
import { Provider } from 'react-redux'

export const App: React.FC = () => {
    return (
        <Provider store={configureStore()}>
            <Navigation />
        </Provider >
    )
};
