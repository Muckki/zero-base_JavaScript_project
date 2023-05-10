const Nav = () => {
  const root = document.querySelector("#root");

  const categoryList = document.createElement("nav");
  categoryList.classList.add("category-list");
  root.appendChild(categoryList);

  const ul = document.createElement("ul");
  categoryList.appendChild(ul);

  const liOne = document.createElement("li");
  liOne.id = "all";
  liOne.classList.add("category-item", "active");
  liOne.innerHTML = "전체보기";
  ul.appendChild(liOne);
  const liTwo = document.createElement("li");
  liTwo.id = "business";
  liTwo.classList.add("category-item");
  liTwo.innerHTML = "비즈니스";
  ul.appendChild(liTwo);
  const liThree = document.createElement("li");
  liThree.id = "entertainment";
  liThree.classList.add("category-item");
  liThree.innerHTML = "엔터테인먼트";
  ul.appendChild(liThree);
  const liFour = document.createElement("li");
  liFour.id = "health";
  liFour.classList.add("category-item");
  liFour.innerHTML = "건강";
  ul.appendChild(liFour);
  const liFive = document.createElement("li");
  liFive.id = "science";
  liFive.classList.add("category-item");
  liFive.innerHTML = "과학";
  ul.appendChild(liFive);
  const liSix = document.createElement("li");
  liSix.id = "sports";
  liSix.classList.add("category-item");
  liSix.innerHTML = "스포츠";
  ul.appendChild(liSix);
  const liSeven = document.createElement("li");
  liSeven.id = "technology";
  liSeven.classList.add("category-item");
  liSeven.innerHTML = "기술";
  ul.appendChild(liSeven);
};

export default Nav;
