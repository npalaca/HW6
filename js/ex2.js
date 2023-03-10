// Display text for 400 level courses
const displayText400 = () => {
  const level400Lis = document.querySelectorAll('.400level');
  for (let i = 0; i < level400Lis.length; i++) {
    console.log(level400Lis[i].textContent);
  }
}

displayText400();
