var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
  createPostArea.style.display = 'block';

  // deferredPrompt is provided by app.js, this code is to prompt the user to add to homescreen on a button click
  if (deferredPrompt){
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then( (choice) => {
        console.log(choice.outcome);
        if(choice.outcome === 'dismissed'){
            console.log('User cancelled installation');
        } else {
            console.log('User added to homescreen')
        }
    });
  };
};

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
