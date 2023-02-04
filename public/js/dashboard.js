const createPostBtn = async () => {
  document.location.replace("/newpost");
};

document.querySelector("#createPostBtn").addEventListener("click", createPostBtn);
