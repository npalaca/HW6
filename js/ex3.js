// Changes all paragraph elements to bold with yellow background
const changeParagraphs = () => {
  const paragraphs = document.querySelectorAll('p');
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontWeight = 'bold';
    paragraphs[i].style.backgroundColor = 'yellow';
  }
}

changeParagraphs();
