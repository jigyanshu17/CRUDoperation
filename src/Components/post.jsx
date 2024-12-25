import React, { useState, useEffect } from "react";
import { fetchPosts, deletePost, createPost, updatePost } from "../API/postapi";
import "./post.css";
import StyledDeleteButton from "./ui/StyledDeleteButton";
import CreatePostForm from "./CreatePostForm";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post.id !== id));
      console.log("Post deleted:", id);

      alert("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post. Please try again.");
    }
  };

  const handleCreatePost = async (postData) => {
    try {
      const newPost = await createPost(postData);
      setPosts([newPost, ...posts]);
      console.log("Post created:", newPost);

      alert("Post created successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    }
  };

  const handleUpdatePost = async (id, postData) => {
    try {
      const updatedPost = await updatePost(id, postData);
      setPosts(
        posts.map((post) =>
          post.id === id ? { ...post, ...updatedPost } : post
        )
      );
      setEditingPost(null);
      console.log("Post updated:", updatedPost);

      alert("Post updated successfully!");
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Failed to update post. Please try again.");
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    // Scroll to the form
    document.querySelector(".form-container").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="posts-section">
      <h1 className="posts-heading">posts</h1>
      <CreatePostForm
        onPostCreated={handleCreatePost}
        onPostUpdated={handleUpdatePost}
        editingPost={editingPost}
      />
      <ul className="posts-list">
        {posts.map((post) => {
          const { id, title, body } = post;
          return (
            <li key={id} className="post-item">
              <h2 className="post-title">{title}</h2>
              <p className="post-body">{body}</p>
              <div className="post-actions">
                <button
                  className="post-button edit-button"
                  onClick={() => handleEdit(post)}
                >
                  {editingPost?.id === id ? "Editing..." : "Edit"}
                </button>
                <StyledDeleteButton id={id} handleDelete={handleDelete} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Post;
