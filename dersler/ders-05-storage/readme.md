# Dərs: Web Storage & Cookies (Client-Side Data Persistence)

## Dərs Haqqında Qısa Məlumat

Bu dərsdə istifadəçi datalarının brauzerdə saxlama üsullarını, təhlükəsizlik qaydalarını və React tətbiqində persistent (daimi) state yaradılmasını öyrənəcəksiniz.

## 1. Nəzəri İzah və İllüstrasiya

Brauzerdə datanı saxlamaq üçün 3 əsas mexanizm var:

| **Xüsusiyyət**           | **localStorage**  | **sessionStorage**  | **Cookies**                                   |
| -------------------------------- | ----------------------- | ------------------------- | --------------------------------------------------- |
| **Həcm**                  | ~5MB - 10MB             | ~5MB                      | ~4KB                                                |
| **Ömür (Lifetime)**      | Silinənədək qalır   | Tab bağlandıqda silinir | `Expires`/`Max-Age`göstəricisinə qədər     |
| **Serverə göndərilmə** | Göndərilmir           | Göndərilmir             | Hər HTTP sorğusunda avtomatik göndərilir        |
| **Təhlükəsizlik**       | XSS riskinə açıqdır | XSS riskinə açıqdır   | `HttpOnly`ilə XSS-dən qorunur,`CSRF`riski var |

> **Təhlükəsizlik Qeydi:** Həssas məlumatları (məsələn, JWT access token) `localStorage`-də saxlamaq XSS (Cross-Site Scripting) hücumlarına yol açır. Ən təhlükəsiz üsul tokenləri backend tərəfdən `HttpOnly`, `Secure` və `SameSite=Strict` flag-ləri ilə set olunmuş Cookie daxilində saxlayaraq göndərməkdir.

## 2. Təcrübə Nümunəsi: Bəyənilən Məhsullar (Favorites) Sisteminin Qurulması

Aşağıdakı nümunədə məhsulları `localStorage`-də saxlamaqla səhifə yeniləndikdə də bəyənilmiş statusun itməməsini təmin edirik.

### Addım 1: `useLocalStorage` Custom Hook-unun Yaradılması

`src/hooks/useLocalStorage.js`:

**JavaScript**

```
import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  // 1. Lazy initialization: İlkin state-i localStorage-dən oxuyuruq
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`localStorage error reading key "${key}":`, error);
      return initialValue;
    }
  });

  // 2. State dəyişdikdə localStorage-i güncəlləyirik
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`localStorage error setting key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
```

### Addım 2: React Komponentində İstifadəsi

`src/components/FavoritesApp.jsx`:

**JavaScript**

```
import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const PRODUCTS = [
  { id: 1, name: "Wireless Headphones", price: "$99" },
  { id: 2, name: "Mechanical Keyboard", price: "$149" },
  { id: 3, name: "Gaming Mouse", price: "$59" }
];

export default function FavoritesApp() {
  // Favorites siyahısını localstorage-də 'favorites_list' açarı ilə saxlayırıq
  const [favorites, setFavorites] = useLocalStorage("favorites_list", []);

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Məhsullar Catalog-u</h2>
      <button onClick={clearAllFavorites} style={{ marginBottom: "15px" }}>
        Bütün Seçilmişləri Təmizlə
      </button>

      <div style={{ display: "flex", gap: "10px" }}>
        {PRODUCTS.map((product) => {
          const isFav = favorites.includes(product.id);
          return (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "8px",
                width: "180px"
              }}
            >
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button
                onClick={() => toggleFavorite(product.id)}
                style={{
                  backgroundColor: isFav ? "#ff4d4f" : "#f0f0f0",
                  color: isFav ? "#fff" : "#000",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                {isFav ? "♥ Bəyənildi" : "♡ Bəyən"}
              </button>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: "20px" }}>
        <strong>Bəyənilən İD-lər (LocalStorage-də saxlanılır):</strong>{" "}
        {JSON.stringify(favorites)}
      </div>
    </div>
  );
}
```

## 3. Tələbələr Üçün Praktiki Tapşırıq

1. Yuxarıdakı mantıqdan istifadə edərək **Səbət (Cart)** sistemini hazırlayın.
2. Səbətə məhsul əlavə edildikdə məhsulun `id`, `quantity` (sayı) və `price` dəyərlərini obyekt şəklində massivdə (`[{ id: 1, qty: 2 }]`) `localStorage`-də saxlayın.
3. Brauzeri yenilədikdə səbətdəki ümumi məbləğ və məhsul sayının qaldığı kimi bərpa olunduğunu yoxlayın.
