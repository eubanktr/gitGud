const registerForm = async (event) => {

  event.preventDefault();

  const email = document.getElementById('newUser').value.trim(); // @@ form needs a newUser id
  const password = document.getElementById('newPw').value.trim(); // @@ form needs a newPw id
  const username = document.getElementById('userName').value.trim(); // @@ form needs a userName id
  const age = document.getElementById('userAge').value.trim(); // @@ form needs a userAge id
  const system_id = document.getElementById('userSys').value.trim(); // @@ form needs a userSys id

  if (email && password && username && age && system_id) {
                                  // @@ check route below// requesting to add the data to the server 
    const response = await fetch(`/api/users/register`, {
      method: 'POST', // @@ could be PUT ???
      body: JSON.stringify({ email, password, username, age, system_id}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Something went wrong, Please confirm valid email, PW, Age, System' + response.statusText);
    }
  }
};

document.querySelector('.register').addEventListener('submit', registerForm); // @@ register card/page needs a register class
