"use client";
import FormSubmit from '@/components/form-submit';
import { useActionState } from 'react';

const FormAction = ({ action }) => {
  // Initialize the action state with an initial state (e.g., an empty object)
  const [state, formAction, isPending] = useActionState(action, {});

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
            required
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" required />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
      </form>
      {isPending && <p>Submitting...</p>} 
      {state.errors && state.errors.map((error, index) => (
        <p key={index} style={{ color: 'red' }}>{error}</p>
      ))} 
    </>
  );
};

export default FormAction;