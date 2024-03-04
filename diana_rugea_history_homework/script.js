function loadNewContent() {
  history.pushState({}, "", "/new-content");
  fetch("page2.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error fetching content:", error);
    });
}
