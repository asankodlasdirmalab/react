# Dərs 3: Fetching Data və State İdarəetməsi - Praktik Tapşırıqlar

Tələbələrin `useState`, `useEffect`, `fetch`, `loading/error/data` state-ləri və event handler-ləri dərindən mənimsəməsi üçün real-world layihə ssenarilərinə əsaslanan 20 tapşırıq.

---

## Mərhələ 1: `useState` və Event handling (`onClick`)

### Tapşırıq 1: `ToggleVisibility` (Göstər / Gizlət)

* **Məqsəd:** `useState` ilə boolean state idarə etmək.
* **Tələb:** Düymə yaradın. Düyməyə kliklədikdə altındakı mətn görünür və ya gizlənir. Düymənin mətni state-ə əsasən "Göstər" və ya "Gizlət" olaraq dəyişməlidir.

### Tapşırıq 2: Rəng Dəyişdirici

* **Məqsəd:** Dinamik inline CSS və `onClick` istifadəsi.
* **Tələb:** `useState` daxilində rəng kodunu saxlaya bilən komponent yazın. "Qırmızı", "Yaşıl" və "Göy" düymələri qoyun. Düyməyə kliklədikdə `div`-in `backgroundColor` dəyərini həmin rəngə dəyişin.

### Tapşırıq 3: Beğən (Like) Sayğacı

* **Məqsəd:** Ədədi state-ləri yeniləmək.
* **Tələb:** "❤️ Like" düyməsi yaratmaq. Hər klikdə sayı 1 vahid artırın. İkinci "Reset" düyməsi ilə sayı sıfırlayın.

---

## Mərhələ 2: `useEffect` Dependencies (`[]`, `[dep]`, heç nə olmadıqda)

### Tapşırıq 4: Səhifə Başlığı Yeniləyicisi (Document Title)

* **Məqsəd:** `useEffect`-in DOM effekti kimi tətbiqi.
* **Tələb:** Sayğac komponenti yaradın. `useEffect` daxilində `[count]` dependency istifadə edərək `document.title` dəyərini `"Klik sayı: X"` kimi yeniləyin.

### Tapşırıq 5: Console Logger Demo

* **Məqsəd:** Dependencies fərqini vizual olaraq anlamaq.
* **Tələb:** 2 fərqli state yaradın (`name` və `age`).
  1. Hər renderdə təkrar işləyən `useEffect`
  2. Yalnız ilk yüklənmədə çalışa `useEffect` (`[]`)
  3. Yalnız `name` dəyişəndə çalışan `useEffect` (`[name]`) yazaraq console-a mesajlar çıxarın.

### Tapşırıq 6: Avtomatik Sayğac (Interval)

* **Məqsəd:** `useEffect` daxilində timer başlatmaq və cleanup funksiyası.
* **Tələb:** Səhifə açılan kimi hər 1 saniyədən bir artan taymer yaradın. `useEffect`-in `[]` dependency hissəsini istifadə edin.

---

## Mərhələ 3: Sadə `fetch` və `Data` State-i

### Tapşırıq 7: Təsadüfi Zarafat (Joke Generator)

* **Məqsəd:** `fetch` ilə JSON datanı oxumaq.
* **Tələb:** Səhifə açıldıqda `https://official-joke-api.appspot.com/random_joke` API-sindən zarafat çəkin və state-ə yazaraq ekranda göstərin (`setup` və `punchline`).

### Tapşırıq 8: İstifadəçi Profil Kartı

* **Məqsəd:** Obyekt şəklində gələn datanı render etmək.
* **Tələb:** `https://jsonplaceholder.typicode.com/users/1` ünvanından 1 istifadəçinin adını, emailini və telefonunu gətirib xüsusi inline-styled kartda render edin.

### Tapşırıq 9: Məhsul Qiymət Valyutası

* **Məqsəd:** Valyuta API-sindən data çəkmək.
* **Tələb:** `https://api.exchangerate-api.com/v4/latest/USD` API-sindən istifadə edərək USD-nin AZN və EUR məzənnəsini göstərin.

---

## Mərhələ 4: `Loading`, `Error` və `Data` State-ləri

### Tapşırıq 10: Yüklənir və Xəta Ssenarisi

* **Məqsəd:** 3 əsas state-i (`data`, `loading`, `error`) idarə etmək.
* **Tələb:** `https://jsonplaceholder.typicode.com/posts` API-sinə sorğu atın. Məlumat gələnə qədər "Yüklənir...", xəta olduqda xəta mesajını, uğurlu halda isə post adlarını göstərin.

### Tapşırıq 11: Yanlış URL Testi (Error Handling)

* **Məqsəd:** `catch` blokunun işləməsini sınamaq.
* **Tələb:** Qəsdən səhv URL-ə (`https://jsonplaceholder.typicode.com/wrongurl`) sorğu atın. `res.ok` olmadığını yoxlayıb ekrana "Məlumat tapılmadı" qırmızı bildirişi çıxarın.

### Tapşırıq 12: Skeleton Loading Effect

* **Məqsəd:** Yüklənmə vaxtı vizual UX hazırlamaq.
* **Tələb:** `loading` `true` olduqda ekrana boz rəngli yerdaşıyan (placeholder) qutular çıxarın. Data gəldikdə əsl məzmunu göstərin.

---

## Mərhələ 5: `onClick` ilə API Sorğusunun Yenilənməsi (Trigger & Refetch)

### Tapşırıq 13: Yeni Zarafat Al Düyməsi

* **Məqsəd:** `onClick` ilə API funksiyasını təkrar çağırmaq.
* **Tələb:** Tapşırıq 7-dəki zarafat komponentinə "Yenisini gətir 🔄" düyməsi əlavə edin. Kliklədikdə yeni sorğu atsın və yüklənmə statusunu göstərsin.

### Tapşırıq 14: İki İstifadəçi Arasında Keçid

* **Məqsəd:** State dəyişikliyi ilə yeni data yükləmək.
* **Tələb:** `userId` state-i yaradın (ilkin dəyəri 1). "İstifadəçi 1" və "İstifadəçi 2" düymələri qoyun. Düyməyə kliklədikdə `userId` dəyişsin və `useEffect([userId])` vasitəsilə həmin istifadəçinin məlumatları gəlsin.

### Tapşırıq 15: Təsadüfi İt Şəkli (Dog CEO API)

* **Məqsəd:** Media məzmununu dynamic fetch etmək.
* **Tələb:** `https://dog.ceo/api/breeds/image/random` API-sindən istifadə edərək düyməyə hər kliklədikdə yeni it şəkli çıxarın.

---

## Mərhələ 6: Birləşdirilmiş Kompleks Tapşırıqlar

### Tapşırıq 16: Todo Siyahısı Fetcher

* **Məqsəd:** `.map()` və `fetch` sintezi.
* **Tələb:** `https://jsonplaceholder.typicode.com/todos?_limit=5` ünvanından 5 tapşırıq çəkin. Tamamlanmış olanların yanına "✅", tamamlanmayanların yanına "⏳" işarəsi qoyun.

### Tapşırıq 17: Post Axtarış ID-si (Input + Fetch)

* **Məqsəd:** Input `onChange` və `useEffect` idarə olunması.
* **Tələb:** Daxil edilən ID-yə (1-10) uyğun postu çəkən input yerləşdirin. ID dəyişdikdə `useEffect([postId])` işə düşsün.

### Tapşırıq 18: Re-fetch (Yenidən Yüklə) Mexanizmi

* **Məqsəd:** Səhifəni yeniləmədən datanı təzələmək.
* **Tələb:** İstifadəçi siyahısı çəkin. Yuxarıda "Yenilə" düyməsi yerləşdirin. Düymə sıxıldıqda loading yenidən aktiv olsun və data yenidən yüklənsin.

### Tapşırıq 19: Kateqoriyaya Görə Məhsul Filtri

* **Məqsəd:** Dinamik API parametri göndərmək.
* **Tələb:** `https://fakestoreapi.com/products/category/{category}` API-sindən istifadə edərək "electronics", "jewelery" düymələri qoyun. Kliklənən kateqoriyaya görə məhsulları gətirin.

### Tapşırıq 20: Tam Mini Layihə - "Günün Sitatı və Müəllifi"

* **Məqsəd:** Keçilən bütün mövzuların tam tətbiqi.
* **Tələb:**
  * Səhifə açıldıqda təsadüfi sitat çəkilsin (`https://api.quotable.io/random` və ya oxşar API).
  * `loading: true` olduqda "Mətn yüklənir..." yazısı çıxsın.
  * `error` olduqda xəta mesajı və "Yenidən cəhd et" düyməsi görünsün.
  * Uğurlu halda Sitat, Müəllif və "Başqa Sitat" düyməsi render olunsun.
  * Bütün elementlər inline CSS ilə səliqəli kart formasında tərtib edilsin.
