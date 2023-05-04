import { useState, useCallback } from 'react';

const useFetchPosts = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchPosts = useCallback(async () => {
        try {
            const response = await fetch(
                'https://blog-react-789c5-default-rtdb.europe-west1.firebasedatabase.app/blogPosts.json'
            );
            if (!response.ok) {
                throw new Error('There is a problem with fetching data');
            }
            const data = await response.json();
            const dataArray = Object.entries(data).map(([key, value]) => ({
                id: key,
                ...value,
            }));
            setBlogPosts(dataArray);
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(true);
        }
    }, []);

    return { blogPosts, isLoading, setIsLoading, error, fetchPosts };
};

export default useFetchPosts;
