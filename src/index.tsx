import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { Router } from 'routes/Router';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ChakraProvider>
        <BrowserRouter>
            <div id="grid-layout">
                <Router />
            </div>
        </BrowserRouter>
    </ChakraProvider>
);
