const id = document.querySelector("#postId").getAttribute("data-id");

async function updatePost(event) {
  const title = document.querySelector("#title").value.trim();
  const body = document.querySelector("#body").value;
  const response = await fetch(`/api/post/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, body }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Update Failed");
  }
}

async function deletePost(event) {
  const response = await fetch(`/api/post/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("DELETE FAILED");
  }
}

document.querySelector("#savePost").addEventListener("click", updatePost);
document.querySelector("#deletePost").addEventListener("click", deletePost);
