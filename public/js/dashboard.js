const createPostBtn = async () => {
  document.location.replace("/newpost");
};

const updatePost = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    document.location.replace(`/updatepost/${id}`);
  }
};

document.querySelector("#createPostBtn").addEventListener("click", createPostBtn);
document.querySelector("#mainBody").addEventListener("click", updatePost);
