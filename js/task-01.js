const category = document.querySelectorAll(".item");
console.log(`Number of categories: ${category.length}`);

category.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("ul li").length}`);
});
