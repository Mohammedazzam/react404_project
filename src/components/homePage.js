import { useEffect, useState } from "react";
import ProductCards from "./ProductCard";
import { getProducts,getCategories } from "../api";
import Categories from "./Categores";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //استخدام  الapi  في نفس الملف
    // fetch('https://api.storerestapi.com/products')
    // .then(response => response.json())
    // .then(json => setProducts(json))

    //استخدام الapi في ملف مستقل
    getProducts().then((products) => setProducts(products.data));
    // console.log('effect is Hear')
    getCategories().then((categories) => setCategories(categories.data));
  }, []);

  return (
    <>
      <h1>Home Pgae</h1>
      <Categories categories={categories}/>
      <div className="row">
        {products.map((product) => (
          <div className="col-4" key={product._id}>
            <ProductCards product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
