import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import Index from './Index';

const App: React.FC = () => {

    return (
        <PaperProvider>
            <Index/>
        </PaperProvider>
    );
}

export default App;