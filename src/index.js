import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/LoginPage';
import Registration from './pages/RegistrationPage';
import CreateTopic from './pages/CreateTopic';
import AllTopics from './pages/AllTopics';
import NotFound from './pages/NotFound';
import PostDetail from './pages/PostDetail';


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/registration",
    element: <Registration />

  },
  {
    path: "posts",
    element: <AllTopics />
  },
  {
    path: "/newPost",
    element: <CreateTopic />
  },
  {
    path: "/postDetails",
    element: <PostDetail />
  },
  {
    path: "*",
    element: <NotFound />
  }
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
