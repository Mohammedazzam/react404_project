// export function getProducts() {
//   return fetch("https://api.storerestapi.com/products").then((res) =>
//     res.json()
//   );
// }

// export function getCategories() {
//     return fetch("https://api.storerestapi.com/categories").then((res) =>
//       res.json()
//     );
//   }
  


const API_URL = "https://api.storerestapi.com"

export function getProducts() {
    return fetch(`${API_URL}/products`).then((res) =>
      res.json()
    );
  }
  export function getCategories() {
      return fetch(`${API_URL}/categories`).then((res) =>
        res.json()
      );
    }
    