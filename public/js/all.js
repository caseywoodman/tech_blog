const viewComments = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    document.location.replace(`/comment/${id}`);
  }
};

document.querySelector("#mainBody").addEventListener("click", viewComments);
