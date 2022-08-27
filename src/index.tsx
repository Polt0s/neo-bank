import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Router } from 'routes';
import { ThemeContextProvider } from 'context';

import './index.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ChakraProvider>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ThemeContextProvider>
                    <Router />
                </ThemeContextProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </ChakraProvider>
);
