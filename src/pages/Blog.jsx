import { useParams } from 'react-router-dom';

export default function Blog() {
    const { postId } = useParams();
    return <div>Blog post {postId}</div>;
}
