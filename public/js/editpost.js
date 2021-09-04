const editButton = document.getElementById("editButton");
const editBlogHandler = async (event) => {
    event.preventDefault();
    alert('buttonPushed')
    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
    const blog_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    // if (title && content) 
    {
      const response = await fetch(`/api/blogs`, {
        method: 'PUT',
        body: JSON.stringify({ title, content, blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert('Post edited!')
        document.location.replace('/');
      } else {
        alert('Failed to edit blog');
      }
    }
  };
  

  
  
  editButton.addEventListener("submit", editBlogHandler);