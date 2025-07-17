
import axios from "axios";

interface Post {
  userId: number; 
  id: number;
  title: string;
  body: string;
}

async function fetchPosts() {
  
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}

fetchPosts().then((posts) => {
  
  console.log(posts[0].title);
  console.log(posts[0].body);
  console.log(posts[0].id);
});

async function displayFirstPost() {
  const posts = await fetchPosts();
  if (posts && posts.length > 0) {
    const firstPost = posts[0];
    console.log(`\nFirst Post ID: ${firstPost.id}`);
    console.log(`First Post Title: ${firstPost.title}`);
    console.log(`First Post Body: ${firstPost.body.substring(0, 50)}...`);
  }
}

displayFirstPost();