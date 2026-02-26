// 9️ Product API Fetch using Promises

function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            console.log("Products:", data);
        })
        .catch(error => {
            console.error("Error fetching products:", error);
        })
        .finally(() => {
            console.log("Product fetch attempt finished.");
        });
}

module.exports = { fetchProducts };
