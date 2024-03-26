import React, { useState, useEffect } from 'react';
import './PostsList.css';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
        setTimeout(() => setLoading(false), 1000); // Delay loading indicator for 1 second
      } catch (error) {
        console.error('Error fetching posts:', error); // Log error to console //ideally a backend logging mechanism somewhere
        setError('Oops! Something went wrong. Please try again later.'); // Set user-friendly error message        
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleButtonClick = (postId) => {
    alert(`Clicked button for post ID: ${postId}`);
  };

  if (loading) {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        <div>Loading...</div> {/* Optional: Display text "Loading..." */}
      </div>
    );
  }  
  if (error) return <div>Error: {error}</div>; // Display user-friendly error message

  return (
    <div>
      <h1 className="text-center">Posts</h1>
      <div className="card-container">
        {posts.map(post => (
            <Card style={{ width: '18rem' }}>
            <Card.Body className="bg-light">
                <Card.Title className="text-primary">{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Button variant="primary" onClick={() => handleButtonClick(post.id)}>Click me</Button>
            </Card.Body>
            </Card>
            
        ))}
      </div>
    </div>
  );
};

export default PostList;
