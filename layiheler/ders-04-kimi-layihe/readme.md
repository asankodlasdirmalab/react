Aşağıda React-ə girişdən başlayaraq `react-hook-form` və `zod` inteqrasiyasına qədər bütün keçdiyiniz dərsləri əhatə edən, addım-addım qurulan böyük bir **Tapşırıq Siyahısı və Layihə Bələdçisi (Markdown)** hazırlanmışdır.

İstədiyiniz kimi layihənin HTML/CSS tərəfi sadə tutulub ki, diqqət tam olaraq React məntiqinə, state idarəetməsinə, API fetching və formalara yönəlsin.

Faylı `.md` kimi saxlayıb tələbələrinizə təqdim edə bilərsiniz:

**Markdown**

```
# 🚀 Mini E-Commerce & Product Management (React Master Project)

Bu layihə React-in əsaslarından başlayaraq `useState`, `useEffect`, API Fetching, Formalar, `React Hook Form` və `Zod` validation mövzularını əhatə edən adım-adım böyüyən real praktiki layihədir.

---

## 📌 Task 1: Layihənin Qurulması və İcra Edilməsi
**Mövzular:** Node.js, npm, Vite, Fayl Strukturu, `App.jsx`

1. Terminalı açın və Vite ilə yeni bir React layihəsi yaradın:
   ```bash
   npm create vite@latest product-app -- --template react
   cd product-app
   npm install
   npm run dev
```

2. `src/` qovluğunu təmizləyin və `App.jsx` daxilində sadə bir `<h1>` qaytararaq layihənin işlədiyini yoxlayın.
3. Layihəyə aşağıdakı sadə CSS stilini `src/index.css` faylı kimi əlavə edin və `main.jsx` daxilində import edin (`import './index.css'`):

**CSS**

```
/* src/index.css */
* { box-sizing: border-box; font-family: sans-serif; margin: 0; padding: 0; }
body { padding: 20px; background-color: #f4f5f7; color: #333; }
.container { max-width: 900px; margin: 0 auto; }
.card { background: white; padding: 15px; border-radius: 8px; margin-bottom: 12px; border: 1px solid #ddd; }
.btn { padding: 8px 12px; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; }
.btn:hover { background: #0052a3; }
.form-group { margin-bottom: 12px; display: flex; flex-direction: column; gap: 4px; }
input, select, textarea { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
.error { color: red; font-size: 12px; }
.badge { padding: 4px 8px; border-radius: 4px; font-size: 12px; }
.bg-green { background: #d4edda; color: #155724; }
.bg-red { background: #f8d7da; color: #721c24; }
```

## 📌 Task 2: İlk State və Dinamik UI Layout

**Mövzular:** `useState`, Dynamic JSX, `className`, Conditional Rendering (`? :` və `&&`)

1. `App.jsx` faylında tətbiqin başlığını və istifadəçinin daxil olub-olmadığını göstərən sadə bir state yaradın.
2. Ternary operator (`? :`) və logical AND (`&&`) istifadə edərək şərti kontent göstərin.

**JavaScript**

```
// src/App.jsx
import { useState } from 'react';

export default function App() {
  const [storeName, setStoreName] = useState("TechStore Dashboard");
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="container">
      <h1>{storeName}</h1>
      <p>
        Status: {isOnline ? <span className="badge bg-green">Aktiv</span> : <span className="badge bg-red">Deaktiv</span>}
      </p>

      {isOnline && <p style={{ marginTop: '10px' }}>Mağaza idarəetmə panelinə xoş gəlmisiniz!</p>}
    </div>
  );
}
```

## 📌 Task 3: Komponentlərin Yaradılması, Reusability, Props və `.map()`

**Mövzular:** Export/Import, Component Props, `.map()`, `key` prop

1. `src/components/` qovluğu yaradın.
2. `src/components/ProductCard.jsx` adında yeni bir komponent hazırlayın.
3. `App.jsx`-də məhsullar massivi (array) yaradın və `.map()` ilə bu komponentə props vasitəsilə ötürün.

**JavaScript**

```
// src/components/ProductCard.jsx
export default function ProductCard({ title, price, inStock, category }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Qiymət: <strong>${price}</strong></p>
      <p>Kateqoriya: {category}</p>
      <p>
        Anbar statusu: {inStock ? <span className="badge bg-green">Stokda var</span> : <span className="badge bg-red">Tükənib</span>}
      </p>
    </div>
  );
}
```

**JavaScript**

```
// src/App.jsx (Updated)
import { useState } from 'react';
import ProductCard from './components/ProductCard';

export default function App() {
  const [products] = useState([
    { id: 1, title: "Wireless Mouse", price: 25, inStock: true, category: "Electronics" },
    { id: 2, title: "Mechanical Keyboard", price: 75, inStock: false, category: "Electronics" },
  ]);

  return (
    <div className="container">
      <h1>Mağaza Məhsulları</h1>
      <div style={{ marginTop: '20px' }}>
        {products.map((item) => (
          <ProductCard category="{item.category}" inStock="{item.inStock}" key="{item.id}" price="{item.price}" title="{item.title}"/>
        ))}
      </div>
    </div>
  );
}
```

## 📌 Task 4: API-dən Məlumat Çəkilməsi (Fetching Data)

**Mövzular:** `useEffect`, `fetch`, Loading / Error / Data State-ləri, `onClick`

1. `useEffect` istifadə edərək pulsuz Fake API-dən (`https://fakestoreapi.com/products?limit=5`) məhsulları gətirin.
2. Yüklənmə (`loading`), Xəta (`error`) və Məlumat (`data`) state-lərini idarə edin.
3. Yeniləmə düyməsi (`onClick`) əlavə edərək məlumatları təkrar çəkin.

**JavaScript**

```
// src/App.jsx (Updated with Fetch)
import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = () => {
    setLoading(true);
    setError(null);
    fetch('[https://fakestoreapi.com/products?limit=4](https://fakestoreapi.com/products?limit=4)')
      .then((res) => {
        if (!res.ok) throw new Error("Məlumat gətirilə bilmədi!");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1>Məhsul Kataloqu (API)</h1>
      <button className="btn" onClick={fetchProducts} style={{ marginBottom: '20px' }}>
        Məlumatları Yenilə
      </button>

      {loading && <p>Yüklənir...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div>
          {products.map((item) => (
            <ProductCard category="{item.category}" inStock="{true}" key="{item.id}" price="{item.price}" title="{item.title}"/>
          ))}
        </div>
      )}
    </div>
  );
}
```

## 📌 Task 5: Ənənəvi Form İdarəetməsi (Basic Forms)

**Mövzular:** `onSubmit`, `e.preventDefault()`, `value`, `onChange`, `checkbox`, `radio`, `select`, `textarea`

Məhsul əlavə etmək üçün standart React state-ləri ilə sadə bir forma komponenti yaradın (`src/components/SimpleForm.jsx`).

**JavaScript**

```
// src/components/SimpleForm.jsx
import { useState } from 'react';

export default function SimpleForm({ onAddProduct }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('electronics');
  const [inStock, setInStock] = useState(true);
  const [condition, setCondition] = useState('new');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price) return alert("Bütün xanaları doldurun!");

    const newProduct = {
      id: Date.now(),
      title,
      price: Number(price),
      category,
      inStock,
      condition,
      description
    };

    onAddProduct(newProduct);
  
    // Formu sıfırlamaq
    setTitle('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Yeni Məhsul Əlavə Et (Basic Form)</h2>

      <div className="form-group">
        <label>Məhsul Adı:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Qiymət:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Kateqoriya:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="electronics">Elektronika</option>
          <option value="clothing">Geyim</option>
        </select>
      </div>

      <div className="form-group" style={{ flexDirection: 'row', gap: '8px' }}>
        <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} />
        <label>Stokda Var</label>
      </div>

      <div className="form-group">
        <label>Vəziyyəti:</label>
        <div>
          <input type="radio" value="new" checked={condition === 'new'} onChange={(e) => setCondition(e.target.value)} /> Yeni
          <input type="radio" value="used" checked={condition === 'used'} onChange={(e) => setCondition(e.target.value)} style={{ marginLeft: '10px' }} /> İşlənmiş
        </div>
      </div>

      <div className="form-group">
        <label>Təsvir:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <button type="submit" className="btn">Əlavə Et</button>
    </form>
  );
}
```

## 📌 Task 6: Peşəkar Formalar və Validation (`React Hook Form` + `Zod`)

**Mövzular:** `react-hook-form`, `@hookform/resolvers`, `zod`, `errors`, `setValue`, `reset`, `defaultValues`

1. Lazımi kitabxanaları quraşdırın:

   **Bash**

   ```
   npm install react-hook-form zod @hookform/resolvers
   ```
2. `src/components/HookForm.jsx` faylını yaradın və `zod` schema ilə validasiya tətbiq edin.

**JavaScript**

```
// src/components/HookForm.jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Zod ilə Validasiya Sxemi
const productSchema = z.object({
  title: z.string().min(3, "Məhsul adı ən azı 3 hərf olmalıdır"),
  price: z.coerce.number().min(1, "Qiymət müsbət ədəd olmalıdır"),
  category: z.string().min(1, "Kateqoriya seçin"),
  inStock: z.boolean(),
  description: z.string().min(10, "Təsvir ən azı 10 simvol olmalıdır"),
});

export default function HookForm({ onAddProduct }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: '',
      price: '',
      category: 'electronics',
      inStock: true,
      description: '',
    },
  });

  const onSubmit = (data) => {
    onAddProduct({ ...data, id: Date.now() });
    reset(); // Formu sıfırlayır
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card">
      <h2>Yeni Məhsul Əlavə Et (React Hook Form + Zod)</h2>

      <div className="form-group">
        <label>Məhsul Adı:</label>
        <input {...register('title')} />
        {errors.title && <span className="error">{errors.title.message}</span>}
      </div>

      <div className="form-group">
        <label>Qiymət:</label>
        <input type="number" {...register('price')} />
        {errors.price && <span className="error">{errors.price.message}</span>}
      </div>

      <div className="form-group">
        <label>Kateqoriya:</label>
        <select {...register('category')}>
          <option value="electronics">Elektronika</option>
          <option value="clothing">Geyim</option>
        </select>
        {errors.category && <span className="error">{errors.category.message}</span>}
      </div>

      <div className="form-group" style={{ flexDirection: 'row', gap: '8px' }}>
        <input type="checkbox" {...register('inStock')} />
        <label>Stokda Var</label>
      </div>

      <div className="form-group">
        <label>Təsvir:</label>
        <textarea {...register('description')} />
        {errors.description && <span className="error">{errors.description.message}</span>}
      </div>

      {/* Fast fill düyməsi (setValue nümunəsi) */}
      <button 
        type="button" 
        onClick={() => setValue('title', 'Sürətli Məhsul Nümunəsi')} 
        style={{ marginBottom: '10px', background: '#ccc', border: 'none', padding: '4px 8px', cursor: 'pointer' }}
      >
        Avto-Doldur (setValue)
      </button>

      <button type="submit" className="btn">Yadda Safla</button>
    </form>
  );
}
```

# 📌 Final Task: Bütün Hissələrin Birləşdirilməsi (`App.jsx`)

Bütün komponentləri, API fetching məntiqini və `HookForm`-u tək bir idarəetmə panelində birləşdirin.

**JavaScript**

```
// src/App.jsx (Final)
import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import HookForm from './components/HookForm';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('[https://fakestoreapi.com/products?limit=3](https://fakestoreapi.com/products?limit=3)')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  return (
    <div className="container">
      <h1>React Master Proyekti</h1>
  
      <HookForm onAddProduct="{handleAddProduct}"/>

      <h2>Məhsul Siyahısı</h2>
      {loading ? (
        <p>Yüklənir...</p>
      ) : (
        products.map((item) => (
          <ProductCard ?? category="{item.category}" inStock="{item.inStock" key="{item.id}" price="{item.price}" title="{item.title}" true}/>
        ))
      )}
    </div>
  );
}
```
