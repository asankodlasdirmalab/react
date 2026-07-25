### React Dərs 2: Komponent tapşırıqlar

#### Tapşırıq 1: `Header` Komponenti

* **Məqsəd:** Sadə JSX qaytaran ilk komponenti yazmaq.
* **Tələb:** `Header` adlı komponent yaradın. Daxilində saytın başlığını (`<h1>`) və qısa şüarını (`<p>`) render edin. `App` komponentində 1 dəfə çağırın.

#### Tapşırıq 2: `Footer` Komponenti

* **Məqsəd:** Statik məlumat verən köməkçi komponent yazmaq.
* **Tələb:** `Footer` adlı komponent yaradın. Daxilində müəllif hüquqları qeydini (`© 2026 Bütün hüquqlar qorunur`) və sosial media linklərini göstərin.

#### Tapşırıq 3: `Sidebar` Layout Komponenti

* **Məqsəd:** Komponent strukturunu formalaşdırmaq.
* **Tələb:** `Sidebar` komponenti yaradın. Daxilində `<ul>` və `<li>` teqləri ilə navigation menusu (Ana Səhifə, Haqqımızda, Əlaqə) yerləşdirin.

#### Tapşırıq 4: E-ticarət `ProductCard` Skeleti

* **Məqsəd:** Statik kart strukturu qurmaq.
* **Tələb:** `ProductCard` komponenti yaradın. Hələlik statik olaraq şəkil yeri, məhsul adı, qiymət və "Səbətə at" düyməsini qaytarsın.

### Mərhələ 2: Props İlə Məlumat Ötürülməsi

#### Tapşırıq 5: Dinamik `UserProfile` Kartı

* **Məqsəd:** Obyekt şəklində props qəbul etmək.
* **Tələb:** `UserProfile` komponenti yaradın. `name`, `role`, və `avatarUrl` prop-larını qəbul edib istifadəçinin profil kartını formalaşdırın. `App`-də 2 müxtəlif istifadəçi üçün çağırın.

#### Tapşırıq 6: Xüsusi `Button` Komponenti

* **Məqsəd:** Reusable UI elementi yaratmaq.
* **Tələb:** `Button` komponenti yaradın. `label` (düymə mətni) və `variant` ("primary" və ya "danger") prop-ları qəbul etsin. Mətni düymə daxilində render edin.

#### Tapşırıq 7: `OrderSummary` (Sifariş Xülasəsi)

* **Məqsəd:** Ədədi prop-larla işləmək.
* **Tələb:** `OrderSummary` komponenti `subtotal` və `shippingFee` prop-larını qəbul etsin. Komponent daxilində cəmi məbləği (`subtotal + shippingFee`) hesablayıb ekrana çıxarın.

#### Tapşırıq 8: Qaydalar və Şərtlər `Alert` Kutusu

* **Məqsəd:** Mətn prop-u ilə mesajlaşdırma.
* **Tələb:** `Alert` komponenti yaradın. `type` ("success", "error", "warning") və `message` prop-ları qəbul etsin.

### Mərhələ 3: Şərtli Rendering (Ternary, `&&`, Early `return`)

#### Tapşırıq 9: Sistemə Giriş Statusu (Ternary)

* **Məqsəd:** Ternary operatorunu tətbiq etmək.
* **Tələb:** `AuthStatus` komponenti `isLoggedIn` (boolean) prop-u qəbul etsin. Əgər `true`-dursa "Xoş gəldiniz, Əli!", `false`-dursa "Lütfən daxil olun" mesajı və daxil olma düyməsi göstərin.

#### Tapşırıq 10: Səbətdəki Məhsul Sayı (`&&`)

* **Məqsəd:** Logical AND (`&&`) operatorundan istifadə.
* **Tələb:** `CartIcon` komponenti `itemCount` prop-u alsın. Əgər `itemCount > 0`-dırsa, icon-un yanında yaşıl badge daxilində sayı göstərin. 0 olduqda badge görünməsin.

#### Tapşırıq 11: Yüklənmə Indikatoru (Early `return`)

* **Məqsəd:** Yüklənmə halını erkən qaytarma ilə idarə etmək.
* **Tələb:** `DataFeed` komponenti `isLoading` (boolean) prop-u qəbul etsin. Əgər `isLoading` `true`-dursa, dərhal `<p>Məlumatlar yüklənir...</p>` qaytarsın. Əks halda əsas məzmunu render etsin.

#### Tapşırıq 12: Stokda Var/Yox Indicator (Ternary + Class Styling)

* **Məqsəd:** Props və şərtə əsasən UI vəziyyətini dəyişmək.
* **Tələb:** `StockBadge` komponenti `inStock` (boolean) prop-u qəbul etsin. `true` olduqda "Anbarda var" (yaşıl mətn), `false` olduqda "Tükəndi" (qırmızı mətn) render etsin.

#### Tapşırıq 13: Endirim Banners (`&&`)

* **Məqsəd:** Qeyri-məcburi məlumatları render etmək.
* **Tələb:** `ProductPrice` komponenti `price` və `discountPercent` prop-larını qəbul etsin. Əgər `discountPercent` varsa, əsas qiymətin yanında xüsusi endirim nişanını render etsin.

#### Tapşırıq 14: Qadağan Edilmiş Məzmun (Early `return`)

* **Məqsəd:** Yaş məhdudiyyəti nəzarəti.
* **Tələb:** `AgeRestrictedContent` komponenti `age` prop-u alsın. Əgər `age < 18`-dirsə, dərhal `<h3>Bu məzmuna baxmaq üçün yaşınız çatmır.</h3>` qaytarsın.

### Mərhələ 4: `.map()` və `key` Prop-u

#### Tapşırıq 15: Kursların Siyahısı

* **Məqsəd:** Massivdən siyahı yaratmaq.
* **Tələb:** `CourseList` komponenti yaradın. Massivdə olan 4 kurs adını (`id` və `title`) `.map()` ilə `<ul>` daxilində `key` istifadə edərək render edin.

#### Tapşırıq 16: İctimai Şəbəkə Linkləri

* **Məqsəd:** Obyekt massivi üzərində dövr.
* **Tələb:** `SocialLinks` komponenti `links` massivini (`id`, `platform`, `url`) qəbul etsin. `.map()` istifadə edərək hər biri üçün `<a>` teqi yaradın.

#### Tapşırıq 17: Tapşırıqlar Siyahısı (To-Do List)

* **Məqsəd:** Kompleks obyektləri dövrə salmaq.
* **Tələb:** `TodoList` komponenti daxilində `tasks` massivi yaradın (`id`, `task`, `completed`). `.map()` ilə həmin tapşırıqları render edin.

### Mərhələ 5: Bütün Konsepsiyaların Birləşməsi (Kompleks Tapşırıqlar)

#### Tapşırıq 18: Bildiriş Mərkəzi (Notification Center)

* **Məqsəd:** `map`, `key`, `&&` və `return` birlikdə.
* **Tələb:** `NotificationList` komponenti `notifications` massivini (`id`, `text`, `read`) qəbul etsin. Massiv boşdursa, "Oxunmamış bildiriş yoxdur" yazısı qaytarın. Dolu olduqda `.map()` ilə siyahını göstərin, `read: false` olanların yanına "Yeni" nişanı qoyun.

#### Tapşırıq 19: Blog Postlarının Siyahısı

* **Məqsəd:** Alt komponentə props və `key` ötürmək.
* **Tələb:** `BlogPost` (uşaq) və `BlogFeed` (valideyn) komponentləri yaradın. `BlogFeed` daxilində postlar massivi olsun. `.map()` daxilində hər post üçün `BlogPost` komponentini çağırıb məlumatları prop kimi ötürün.

#### Tapşırıq 20: Tələbə Qiymətləndirmə Paneli (Student Dashboard)

* **Məqsəd:** Tam real-world layihə ssenarisi.
* **Tələb:** `StudentList` komponenti tələbələr massivini daxilində saxlasın:
  * `{ id: 1, name: "Leyla", score: 85, isPassed: true }`
  * Massiv boşdursa early `return` ilə "Tələbə tapılmadı" qaytarın.
  * `.map()` vasitəsilə hər tələbə üçün `StudentCard` çağırın.
  * `StudentCard` daxilində Ternary ilə: balı 50-dən yuxarıdırsa "Keçdi 🟢", aşağıdırsa "Kəsildi 🔴" göstərin.
  * `isPassed` `true` olanlar üçün `&&` ilə "Sertifikat almağa hüququ çatır" yazısını çıxarın.
