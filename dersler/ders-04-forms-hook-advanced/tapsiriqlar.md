# Dərs 4B: React Hook Form, Zod & CRUD — Tapşırıqlar

## Tapşırıq 1: Zod Schema & Form Validation (Əsas)
`react-hook-form` və `@hookform/resolvers/zod` istifadə edərək **Məhsul Əlavə Etmə Forması** yaradın.

### Tələblər:
1. **Şema Sahələri (Zod):**
   - `title`: String, minimum 3 simvol.
   - `price`: Number, minimum 1 (AZN).
   - `category`: Enum (`electronics`, `clothing`, `books`).
   - `inStock`: Boolean (Checkbox).
2. Form submit olunduqda xətalar yoxdursa, məlumatları `console.log` edin.
3. Hər input altındakı xəta mesajlarını `formState.errors` vasitəsilə göstərin.

---

## Tapşırıq 2: Live Search & Filterable Table (Orta)
DummyJSON məhsullar API-dən (`https://dummyjson.com/products?limit=10`) məlumatları çəkin və cədvəldə göstərin.

### Tələblər:
1. `useEffect` ilə məhsulları çəkin.
2. Cədvəlin üstündə `search` input-u yerləşdirin.
3. Input-a yazı yazıldıqda cədvəldəki məhsulları `title` üzrə dinamik filtr edin (Case-insensitive).
4. Məhsul sayını cədvəlin üstündə göstərin (məsələn: *Tapılan məhsullar: 8*).

---

## Tapşırıq 3: Tam CRUD Tətbiqi (Mürəkkəb / Layihə)
Məhsullar üzərində tam **Create, Read, Update, Delete (CRUD)** sistemini qurun.

### Tələblər:
1. **Read:** `https://dummyjson.com/products` ünvanından 5 məhsul gətirin.
2. **Create (POST):**
   - Forma daxilində yeni məhsul yazın (`title`, `price`, `category`).
   - `https://dummyjson.com/products/add` endpoint-inə `POST` sorğusu göndərin.
   - API-dən qayıdan nəticəni React state-inə əlavə edin.
3. **Update (PUT):**
   - Cədvəldəki hər sətirdə "Redaktə et" düyməsi olsun.
   - Düyməyə tıklandıqda forma **Edit Mode**-a keçsin və `setValue` ilə input-lar doldurulsun.
   - Submit zamanı `https://dummyjson.com/products/{id}` ünvanına `PUT` sorğusu atın və state-də yeniləyin.
4. **Delete (DELETE):**
   - "Sil" düyməsinə tıklandıqda confirm dialoqu göstərin.
   - Təsdiqləndikdə `https://dummyjson.com/products/{id}` ünvanına `DELETE` sorğusu atın və siyahıdan çıxarın.

---

## 🚀 Bonus Tapşırıq: Custom Notification / Toast
Yuxarıdakı CRUD əməliyyatları (Əlavə etmə, Yeniləmə, Silmə) uğurla icra olunduqda ekranda 3 saniyəlik yaşıl **Toast Alert** (məsələn: *"Məhsul uğurla yeniləndi!"*) göstərin.
