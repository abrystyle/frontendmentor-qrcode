import App from './App';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

const root = createRoot(document.getElementById('root')!);   // notice the '!'
root.render(<App />);