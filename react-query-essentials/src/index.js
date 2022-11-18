import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Count from './Components/Count';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools} from 'react-query/devtools'

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
  <QueryClientProvider QueryClientProvider client={queryClient}>
    <Count />
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();