const NewsList = () => {
  const root = document.querySelector("#root");

  const newsListContainer = document.createElement("div");
  newsListContainer.classList.add("news-list-container");
  root.appendChild(newsListContainer);

  const newsList = document.createElement("article");
  newsList.classList.add("news-list");
  newsListContainer.appendChild(newsList);

  const scrollObserver = document.createElement("div");
  scrollObserver.classList.add("scroll-observer");
  newsListContainer.appendChild(scrollObserver);

  const scrollImg = document.createElement("img");
  scrollImg.src = "img/ball-triangle.svg";
  scrollImg.alt = "Loading...";
  scrollObserver.appendChild(scrollImg);
};

export default NewsList;
