// functionality for showing/hiding the comments section
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

showHideBtn.addEventListener('click', () => {
  const isHidden = commentWrapper.hidden;
  commentWrapper.hidden = !isHidden;
  showHideBtn.textContent = isHidden ? 'Hide comments' : 'Show comments';
  showHideBtn.setAttribute('aria-expanded', String(isHidden));
});

// functionality for adding a new comment via the comments form
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitComment();
});

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  namePara.textContent = nameField.value;
  commentPara.textContent = commentField.value;

  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);

  nameField.value = '';
  commentField.value = '';
  nameField.focus();
}
