const postForm = async (event) => {
  event.preventDefault();

  const author = document.getElementById('author').value.trim();
  const game = document.getElementById('game').value.trim();
  const body = document.getElementById('body').value.trim();

  if (author && game && body) {
    const response = await fetch(`/api/posts/`, {
      method: 'POST',
      body: JSON.stringify({ author, game, body}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/api/posts/')
    } else {
      alert('POST not uploaded' + response.statusText);
    }
  }
};

document.querySelector('.post').addEventListener('submit', postForm);