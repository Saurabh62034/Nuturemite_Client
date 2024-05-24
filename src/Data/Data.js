export async function fetchData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  sessionStorage.setItem("products", JSON.stringify(data));
}
