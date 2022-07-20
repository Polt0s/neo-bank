import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';
import { Router } from 'routes/Router';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ChakraProvider>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <div id="grid-layout">
                    <Router />
                </div>
            </QueryClientProvider>
        </BrowserRouter>
    </ChakraProvider>
);
