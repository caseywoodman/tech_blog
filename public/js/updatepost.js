async function updatePost(event) {
  const title = document.querySelector("#title").value.trim();
  const body = document.querySelector("#body").value;
  const id = document.querySelector("#postId").getAttribute("data-id");
  console.log(title, body, id);
  const response = await fetch(`/api/post/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, body }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("good response");
    document.location.replace("/dashboard");
  } else {
    alert("Update Failed");
  }
  console.log(response, "test");
}

document.querySelector("#savePost").addEventListener("click", updatePost);
