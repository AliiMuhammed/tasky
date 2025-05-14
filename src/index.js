import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { routes } from "./Router";
import './style/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
);


