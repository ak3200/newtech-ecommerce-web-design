function trendingProducts() {
  var newarrivals = document.getElementById("newarrivals");
  var trendingproducts = document.getElementById("trendingproducts");
  var newarrivalsbtn = document.getElementById("newarrivalsbtn");
  var trendingproductsbtn = document.getElementById("trendingproductsbtn");

  newarrivals.classList.add("d-none");
  trendingproducts.classList.remove("d-none");
  newarrivalsbtn.classList.remove("btn-primary");
  newarrivalsbtn.classList.add("btn-outline-primary");
  trendingproductsbtn.classList.remove("btn-outline-primary");
  trendingproductsbtn.classList.add("btn-primary");
}

function newArrivals() {
  var newarrivals = document.getElementById("newarrivals");
  var trendingproducts = document.getElementById("trendingproducts");
  var newarrivalsbtn = document.getElementById("newarrivalsbtn");
  var trendingproductsbtn = document.getElementById("trendingproductsbtn");

  newarrivals.classList.remove("d-none");
  trendingproducts.classList.add("d-none");
  newarrivalsbtn.classList.remove("btn-outline-primary");
  newarrivalsbtn.classList.add("btn-primary");
  trendingproductsbtn.classList.remove("btn-primary");
  trendingproductsbtn.classList.add("btn-outline-primary");
}