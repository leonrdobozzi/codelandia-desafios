const input = document.querySelector("input");
input.addEventListener("input", () => {
  const posts = document.querySelectorAll(".post");
  posts.forEach((post) => {
    if (
      !post.childNodes[3].childNodes[1].innerHTML.trim().includes(input.value)
    ) {
      post.style.display = "none";
    } else {
      post.style.display = "block";
    }
  });
});

function createPosts(data, index) {
  const post = document.createElement("div");
  post.setAttribute("class", "post");
  post.setAttribute("id", index);
  post.innerHTML = `
        <div class="header">
            <div class="date">${data.publishedAt}</div>
            <div class="heart" id="heart-${index}">
              <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.25 4.46872C22.1239 3.97527 21.9293 3.50191 21.6718 3.06247C21.4245 2.60533 21.1083 2.18899 20.7343 1.82809C20.1921 1.28768 19.55 0.857828 18.8437 0.562468C17.4221 -0.0209855 15.8278 -0.0209855 14.4062 0.562468C13.7386 0.845028 13.1253 1.24156 12.5937 1.73434L12.5156 1.82809L11.5 2.84372L10.4843 1.82809L10.4062 1.73434C9.87456 1.24156 9.26125 0.845028 8.5937 0.562468C7.17207 -0.0209855 5.57783 -0.0209855 4.1562 0.562468C3.44992 0.857828 2.80781 1.28768 2.26558 1.82809C1.52396 2.5497 0.998968 3.46437 0.749951 4.46872C0.617474 4.97875 0.554405 5.50432 0.562451 6.03122C0.562451 6.52653 0.624951 7.02028 0.749951 7.49997C0.880941 7.98441 1.0698 8.45132 1.31245 8.89059C1.57451 9.34217 1.89498 9.75721 2.26558 10.125L11.5 19.3593L20.7343 10.125C21.1046 9.76091 21.4218 9.34372 21.6718 8.89059C22.1793 8.02357 22.4438 7.03582 22.4375 6.03122C22.4456 5.50432 22.3825 4.97874 22.25 4.46872V4.46872ZM20.6875 7.01559C20.5003 7.72953 20.1285 8.3816 19.6093 8.90622L11.4687 17.0312L3.32808 8.90622C3.0628 8.63906 2.83185 8.33988 2.64058 8.01559C2.46059 7.69478 2.31899 7.35389 2.2187 6.99997C2.13864 6.64609 2.09673 6.28465 2.0937 5.92184C2.09582 5.54866 2.13772 5.17677 2.2187 4.81247C2.31605 4.45753 2.45779 4.11629 2.64058 3.79684C2.82808 3.46872 3.05933 3.17184 3.32808 2.90622C3.72948 2.51019 4.20104 2.19229 4.7187 1.96872C5.76185 1.55141 6.92555 1.55141 7.9687 1.96872C8.48433 2.18278 8.94995 2.49684 9.3437 2.89059L11.4687 5.03122L13.5937 2.89059C13.9872 2.49615 14.4544 2.18291 14.9687 1.96872C16.0118 1.55141 17.1756 1.55141 18.2187 1.96872C18.7359 2.19216 19.2078 2.51091 19.6093 2.90622C19.8812 3.16403 20.1093 3.46403 20.2812 3.79684C20.6431 4.43507 20.8316 5.15691 20.8281 5.89059C20.8493 6.26813 20.8178 6.64678 20.7343 7.01559H20.6875V7.01559Z" fill="#574AE8"/>
                <path class="fillHeart" d="M3.5 2L5.5 1.5H6.5L8.5 2L9.5 3L11.5 4.8125L13.5 3L15 2L17.5 1.5L19.5 2L20.5 3.5L21.5 5.5L20.5 7.5L11.5 17.5L2 8V6.5L2.5 4L3.5 2Z" fill="#574AE8" stroke="#574AE8"/>
              </svg>
            </div>
        </div>
        <div class="post-body">
            <h3 class="title">${data.title}</h3>
            <p class="text">${data.description ? data.description : ""}</p>
        </div>
    `;
  document.querySelector(".posts-container").appendChild(post);
}

fetch(
  "https://newsapi.org/v2/top-headlines?country=br&apiKey=464b5d6bf7fb4469a135cea805380318",
)
  .then((response) => response.json())
  .then((data) => {
    data.articles.forEach((article, index) => createPosts(article, index));
  })
  .finally(() => {
    const likes = document.querySelectorAll(".heart");
    function likeCheck(like, item) {
      if (localStorage.getItem(like.parentNode.parentNode.id) === "true") {
        localStorage.setItem(like.parentNode.parentNode.id, false);
        document.querySelector("#" + item + " .fillHeart").style.opacity = 1;
      } else {
        localStorage.setItem(like.parentNode.parentNode.id, true);
        document.querySelector("#" + item + " .fillHeart").style.opacity = 0;
      }
    }
    likes.forEach((like) => {
      likeCheck(like, like.id);
      like.addEventListener("click", () => {
        likeCheck(like, like.id);
      });
    });
  });
