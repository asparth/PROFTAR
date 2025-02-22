document.addEventListener('DOMContentLoaded', () => {
    const profileContent = document.querySelector('.profile-content');

    // Function to create a new post
    function createPost(type, content) {
        const post = document.createElement('div');
        post.classList.add('post');

        if (type === 'text') {
            post.innerHTML = `<p>${content}</p>`;
        } else if (type === 'image') {
            post.innerHTML = `<img src="${content}" alt="Post Image">`;
        } else if (type === 'video') {
            post.innerHTML = `<video controls>
                                <source src="${content}" type="video/mp4">
                                Your browser does not support the video tag.
                              </video>`;
        }

        // Add interaction buttons
        const interactionBar = document.createElement('div');
        interactionBar.classList.add('interaction-bar');
        interactionBar.innerHTML = `
            <button class="like-btn">❤️</button>
            <button class="comment-btn">💬</button>
            <button class="gift-btn">🎁</button>
        `;
        post.appendChild(interactionBar);

        // Add comments section
        const commentsSection = document.createElement('div');
        commentsSection.classList.add('comments-section');
        commentsSection.innerHTML = `
            <input type="text" class="comment-input" placeholder="Add a comment...">
            <div class="comments-list"></div>
        `;
        post.appendChild(commentsSection);

        profileContent.appendChild(post);
    }

    // Example posts
    createPost('text', 'This is a text post.');
    createPost('image', 'path/to/image.jpg');
    createPost('video', 'path/to/video.mp4');

    // Event delegation for interaction buttons
    profileContent.addEventListener('click', (event) => {
        if (event.target.classList.contains('like-btn')) {
            alert('Liked!');
        } else if (event.target.classList.contains('comment-btn')) {
            const commentInput = event.target.closest('.post').querySelector('.comment-input');
            commentInput.focus();
        } else if (event.target.classList.contains('gift-btn')) {
            alert('Gift sent!');
        }
    });

    // Event delegation for adding comments
    profileContent.addEventListener('keypress', (event) => {
        if (event.target.classList.contains('comment-input') && event.key === 'Enter') {
            const commentText = event.target.value;
            if (commentText.trim() !== '') {
                const commentsList = event.target.closest('.comments-section').querySelector('.comments-list');
                const comment = document.createElement('p');
                comment.textContent = commentText;
                commentsList.appendChild(comment);
                event.target.value = '';
            }
        }
    });
});
