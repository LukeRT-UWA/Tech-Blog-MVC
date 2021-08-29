const commentAdd = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#comment-title').value.trim();
    const content = document.querySelector('#comment-text').value.trim();
  
    const blog_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    console.log(blog_id)

    if (title && content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ title, content, blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // document.location.replace('/');
        
      } else {
        alert('Failed to create comment');
      }
    }
  };
  

  
  document
    .addEventListener('submit', commentAdd);