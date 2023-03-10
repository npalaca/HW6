// Adds a link to the College of Business between the CSULB link and the IS link
const addCollegeLink = () => {
  const collegeLink = document.createElement('a');
  collegeLink.href = 'https://www.csulb.edu/college-of-business';
  collegeLink.textContent = 'College of Business';

  const isLink = document.querySelector('#is');
  isLink.parentNode.insertBefore(collegeLink, isLink);
}

addCollegeLink();
