const registerForm = async (event) => {

  event.preventDefault();

  const newUser = document.getElementById('newUser').value.trim(); // @@ form needs a newUser id
  const userPw = document.getElementById('newPw').value.trim(); // @@ form needs a newPw id
  const userName = document.getElementById('userName').value.trim(); // @@ form needs a userName id
  const userAge = document.getElementById('userAge').value.trim(); // @@ form needs a userAge id
  const userSys = document.getElementById('userSys').value.trim(); // @@ form needs a userSys id

  if (newUser && userPw && userName && userAge && userSys) {
                                  // @@ check route below
    const response = await fetch(`/api/users/register`, {
      method: 'POST', // @@ could be PUT ???
      body: JSON.stringify({ newUser, userPw, userName, userAge, userSys}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Something went wrong, Please confirm valid email, PW, Age, System' + response.statusText);
    }
  }
};

document.querySelector('.register').addEventListener('sumbit', registerForm); // @@ register card/page needs a register class