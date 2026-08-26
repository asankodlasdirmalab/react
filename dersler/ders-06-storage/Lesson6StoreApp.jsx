import { useEffect, useState } from "react";
import "./Lesson6StoreApp.css";

export default function Lesson6StoreApp() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const [cart, setCart] = useState([]);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=8");
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  const toggleCart = (product) => {
 
  };

  const toggleFavorite = (productId) => {
 
  };

  const handleClearStorage = () => {
 
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const displayedProducts = showOnlyFavorites
    ? products.filter((prod) => favorites.includes(prod.id))
    : products;

  return (
    <div className="app-container">
      <div className="main-content">
        <header className="store-header">
          <div>
            <h1 className="header-title">React Store</h1>
            <p className="header-subtitle">
              Dərs 6: LocalStorage 
            </p>
          </div>

          <div className="header-actions">
            <div className="badge badge-cart">
              🛒 Səbət: <strong>{cart.length}</strong> (${totalPrice})
            </div>
            <div className="badge badge-favorites">
              ❤️ Bəyənilənlər: <strong>{favorites.length}</strong>
            </div>
            <button onClick={handleClearStorage} className="btn-reset">
              Sıfırla
            </button>
          </div>
        </header>

        <div className="filter-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showOnlyFavorites}
              onChange={(e) => setShowOnlyFavorites(e.target.checked)}
              className="checkbox-input"
            />
            Yalnız Bəyənilənləri Göstər ({favorites.length})
          </label>
        </div>

        {loading ? (
          <div className="loading-text">Məhsullar yüklənir...</div>
        ) : displayedProducts.length === 0 ? (
          <div className="empty-state">Heç bir məhsul tapılmadı.</div>
        ) : (
          <div className="product-grid">
            {displayedProducts.map((prod) => {
              const inCart = cart.some((item) => item.id === prod.id);
              const isFav = favorites.includes(prod.id);

              return (
                <div key={prod.id} className="product-card">
                  <div className="card-image-wrapper">
                    <img
                      src={prod.thumbnail}
                      alt={prod.title}
                      className="product-image"
                    />
                    <button
                      onClick={() => toggleFavorite(prod.id)}
                      className="btn-favorite"
                    >
                      {isFav ? "❤️" : "🤍"}
                    </button>
                  </div>

                  <div className="card-body">
                    <div>
                      <span className="category-tag">{prod.category}</span>
                      <h3 className="product-title">{prod.title}</h3>
                      <p className="product-price">${prod.price}</p>
                    </div>

                    <button
                      onClick={() => toggleCart(prod)}
                      className={`btn-cart ${
                        inCart ? "btn-cart-remove" : "btn-cart-add"
                      }`}
                    >
                      {inCart ? "Səbətdən Çıxar" : "Səbətə Əlavə Et"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}