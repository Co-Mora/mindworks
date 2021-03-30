import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { BaseProvider, LightTheme, styled } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { useStyletron } from 'baseui';
import Analytics from './modules/dashboard/views/analytics'
const engine = new Styletron();

export const App: React.FC = () => {
    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                <Analytics />
            </BaseProvider>
        </StyletronProvider>

    )
};
