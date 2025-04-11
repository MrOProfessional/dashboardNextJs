// filepath: ./app/ui/posts/posts.tsx
interface Post {
    id: string;
    title: string;
    url: string;
}

const Posts = (props: { posts: Post[] }) => (
    <div className="w-full">
        <h1 className="text-2xl">Blog Posts</h1>
        <ul className="mt-4">
            {props.posts.map((post) => (
                <li key={post.id} className="mb-2">
                    <a href={post.url} className="text-blue-600 hover:underline">
                        {post.title}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default Posts;