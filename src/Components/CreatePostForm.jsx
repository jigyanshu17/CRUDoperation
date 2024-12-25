import React, { useState, useEffect } from "react";
import { PencilLine } from "lucide-react";
import "./CreatePostForm.css";

const CreatePostForm = ({ onPostCreated, editingPost, onPostUpdated }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const maxTitleLength = 100;
  const maxBodyLength = 500;
  const isEditing = Boolean(editingPost);

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setBody(editingPost.body);
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = { title, body, userId: 1 };

    if (isEditing) {
      onPostUpdated(editingPost.id, postData);
    } else {
      onPostCreated(postData);
    }

    setTitle("");
    setBody("");
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <PencilLine className="form-icon" />
        <h2 className="form-title">
          {isEditing ? "Edit Post" : "Create New Post"}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your post title"
            maxLength={maxTitleLength}
            required
            className="form-input"
          />
          <small className="char-counter">
            {title.length}/{maxTitleLength}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="body" className="form-label">
            Content
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your post content here..."
            maxLength={maxBodyLength}
            required
            rows={5}
            className="form-textarea"
          />
          <small className="char-counter">
            {body.length}/{maxBodyLength}
          </small>
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={() => {
              setTitle("");
              setBody("");
            }}
            className="btn-clear"
          >
            Clear
          </button>
          <button type="submit" className="btn-submit">
            {isEditing ? "Save Changes" : "Publish Post"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
