async function createPost(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value.trim();
  const body = document.querySelector("#body").value.trim();
  const response = await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({ title, body }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("good response");
    document.location.replace("/dashboard");
  } else {
    alert("Post Failed");
  }
  console.log(response);
}

document.querySelector("#createPost").addEventListener("click", createPost);
