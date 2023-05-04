import './App.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Layout from './ui';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import Blog from './pages/Blog';
import { BlogProvider } from './Provider';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/add-post" element={<AddPost />} />
                <Route path="/blog/:postId" element={<Blog />} />
            </Route>
        )
    );
    return (
        <BlogProvider>
            <RouterProvider router={router} />
        </BlogProvider>
    );
}

export default App;
