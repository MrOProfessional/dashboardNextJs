import { fetchPosts } from "@/app/lib/(posts)/actions";
import Posts from "@/app/ui/posts/posts";

export default async function Page() {
    // Fetch posts at build time
    const posts = await fetchPosts();
  
    return (
      <main>
        <Posts posts={posts} />
      </main>
    );
  }