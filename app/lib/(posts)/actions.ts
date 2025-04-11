
// Function to fetch posts from the API
export async function fetchPosts() {
    const response = await fetch("https://dev.to/api/articles", {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
  
    const data = await response.json();
    return data;
  }
  