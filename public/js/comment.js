const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#comment-title').value.trim();
    const content = document.querySelector('#comment-text').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create comment');
      }
    }
  };
  

  
  document
    .addEventListener('submit', newFormHandler);