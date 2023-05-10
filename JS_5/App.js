import { Nav, NewsList } from "./components/index.js";

const appJs = () => {
  Nav();
  NewsList();
  const apiKey = "3189378d99a44aec99dd2ea2e875d1ae";
  let page = 1;
  const pageSize = 5;

  function makeNews() {
    let liAll = document.querySelector(".active");
    let category = liAll.id;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      category === "all" ? "" : category
    }&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
    axios
      .get(url)
      .then((response) => {
        let articles = response.data.articles;
        const newsList = document.querySelector(".news-list");
        newsList.innerHTML = "";
        for (let i = 0; i < articles.length; i++) {
          const article = articles[i];
          const { title, description, url, urlToImage } = article; // 구조 분해 할당으로 필요한 데이터 추출

          const newsItem = document.createElement("section");
          newsItem.classList.add("news-item");

          const thumbnail = document.createElement("div");
          thumbnail.classList.add("thumbnail");

          const contents = document.createElement("div");
          contents.classList.add("contents");

          const thumbA = document.createElement("a");
          thumbA.href = url;
          thumbA.target = "_blank";
          thumbA.rel = "noopener noreferrer";

          let image = document.createElement("img");
          if (article.urlToImage !== null) {
            image.src = urlToImage;
          } else {
            image.src =
              "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
          }
          image.alt = "thumbnail";

          const titleElement = document.createElement("h2");

          const urlElement = document.createElement("a");
          urlElement.href = url;
          urlElement.target = "_blank";
          urlElement.rel = "noopener noreferrer";
          urlElement.innerHTML = title;

          const descriptionElement = document.createElement("p");
          descriptionElement.innerHTML = description;

          newsList.appendChild(newsItem);

          newsItem.appendChild(thumbnail);
          newsItem.appendChild(contents);

          thumbnail.appendChild(thumbA);
          thumbA.appendChild(image);

          contents.appendChild(titleElement);
          titleElement.appendChild(urlElement);
          contents.appendChild(descriptionElement);
        }
      })
      .catch((error) => console.log(error));
  }

  function addNews() {
    let liAll = document.querySelector(".active");
    let category = liAll.id;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      category === "all" ? "" : category
    }&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
    axios
      .get(url)
      .then((response) => {
        let articles = response.data.articles;
        const newsList = document.querySelector(".news-list");
        for (let i = 0; i < articles.length; i++) {
          const article = articles[i];
          const { title, description, url, urlToImage } = article; // 구조 분해 할당으로 필요한 데이터 추출

          const newsItem = document.createElement("section");
          newsItem.classList.add("news-item");

          const thumbnail = document.createElement("div");
          thumbnail.classList.add("thumbnail");

          const contents = document.createElement("div");
          contents.classList.add("contents");

          const thumbA = document.createElement("a");
          thumbA.href = url;
          thumbA.target = "_blank";
          thumbA.rel = "noopener noreferrer";

          let image = document.createElement("img");
          if (article.urlToImage !== null) {
            image.src = urlToImage;
          } else {
            image.src =
              "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
          }
          image.alt = "thumbnail";

          const titleElement = document.createElement("h2");

          const urlElement = document.createElement("a");
          urlElement.href = url;
          urlElement.target = "_blank";
          urlElement.rel = "noopener noreferrer";
          urlElement.innerHTML = title;

          const descriptionElement = document.createElement("p");
          descriptionElement.innerHTML = description;

          newsList.appendChild(newsItem);

          newsItem.appendChild(thumbnail);
          newsItem.appendChild(contents);

          thumbnail.appendChild(thumbA);
          thumbA.appendChild(image);

          contents.appendChild(titleElement);
          titleElement.appendChild(urlElement);
          contents.appendChild(descriptionElement);
        }
      })
      .catch((error) => console.log(error));
  }

  const ul = document.querySelector("ul");
  const setActiveCategory = (category) => {
    const active_l = document.querySelector(".category-item.active");
    if (active_l) {
      active_l.classList.remove("active");
    }
    const target_l = document.querySelector(`#${category}`);
    target_l.classList.add("active");
  };

  ul.addEventListener("click", (e) => {
    if (e.target.nodeName === "LI") {
      page = 1;
      let category = e.target.id;
      setActiveCategory(category);
      makeNews();
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        page += 1;
        addNews();
        console.log(page);
      }
    });
  });
  const target = document.querySelector(".scroll-observer");
  observer.observe(target);
};
appJs();
