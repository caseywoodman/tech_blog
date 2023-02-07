const id = document.querySelector("#postId").getAttribute("data-id");
async function createComment(event) {
  event.preventDefault();
  document.location.replace(`/addcomment/${id}`);
}

document.querySelector("#createCommentBtn").addEventListener("click", createComment);
