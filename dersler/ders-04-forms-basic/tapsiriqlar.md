# Dərs 4A — Practical Tasks (Praktiki Tapşırıqlar)

Bu tapşırıqlar React-də form elementləri, `e.preventDefault()`, `value`, `onChange`, `checkbox`, `radio`, `select` və `textarea` mövzularını möhkəmləndirmək üçün nəzərdə tutulub.

---

### Tapşırıq 1: Sadə Mesaj Çapı
**İzah:** İstifadəçi input-a söz yazdıqda aşağıda `<h1>` teqi daxilində eyni sözü anlıq olaraq göstərin.  
**Gözlənilən Kod Nəticəsi:**  
* Input: `"Salam"`  
* Ekran: `<h1>Salam</h1>`

---

### Tapşırıq 2: Submit Düyməsi və Reload Block
**İzah:** Form daxilində bir input və submit düyməsi yaradın. Form submit edildikdə səhifənin reload olmasının qarşısını alın və alert daxilində input dəyərini göstərin.  
**Gözlənilən Kod Nəticəsi:**  
* Form Submit -> `e.preventDefault()` çağırılır -> Alert: `"Form göndərildi!"`

---

### Tapşırıq 3: Şifrə Göstər / Gizlət (Checkbox)
**İzah:** Input `type="password"` sahəsi və bir checkbox yaradın. Checkbox seçildikdə input tipi `"text"`, ləğv edildikdə `"password"` olsun.  
**Gözlənilən Kod Nəticəsi:**  
* Checkbox `checked: true` -> Input tipi `text`  
* Checkbox `checked: false` -> Input tipi `password`

---

### Tapşırıq 4: Dinamik Şəhər Seçimi (Select)
**İzah:** `<select>` menyusunda 3 şəhər adı yerləşdirin ("Bakı", "Gəncə", "Sumqayıt"). Seçilən şəhəri state-də saxlayın və ekranda təsvir edin.  
**Gözlənilən Kod Nəticəsi:**  
* Select: `"Gəncə"` -> Ekran: `<p>Seçilən şəhər: Gəncə</p>`

---

### Tapşırıq 5: Qeyd Sahəsi Simvol Sayğacı (Textarea)
**İzah:** `<textarea>` yaradın və altına daxil edilən simvolların sayını dinamik yazın (Məsələn: "Simvol sayı: 15").  
**Gözlənilən Kod Nəticəsi:**  
* Textarea: `"React Dərsi"` -> Ekran: `<p>Simvol sayı: 11</p>`

---

### Tapşırıq 6: Cins Seçimi (Radio Buttons)
**İzah:** İki radio button yaradın ("Kişi", "Qadın"). Seçilən dəyəri state-də saxlayın və düymələrin düzgün çalışdığını təmin edin (`checked={gender === 'male'}`).  
**Gözlənilən Kod Nəticəsi:**  
* "Kişi" radio seçildikdə -> Ekran: `<p>Cins: Kişi</p>`

---

### Tapşırıq 7: Şərtləri Qəbul Et (Submit Enable/Disable)
**İzah:** Form daxilində "Şərtlərlə razıyam" checkbox-ı yerləşdirin. Checkbox seçilməyibsə Submit düyməsi `disabled` olsun.  
**Gözlənilən Kod Nəticəsi:**  
* Checkbox `false` -> Button `<button disabled>Submit</button>`  
* Checkbox `true` -> Button `<button>Submit</button>`

---

### Tapşırıq 8: Form Təmizləmə (Reset)
**İzah:** Form submit olduqda input-dakı mətni təmizləyin (`setValue('')`).  
**Gözlənilən Kod Nəticəsi:**  
* Submit düyməsinə kliklədikdən sonra input daxili tamamilə boşalmalıdır (`""`).

---

### Tapşırıq 9: Dil Seçimi (Multi-Checkbox)
**İzah:** 3 fərqli dil checkbox-ı yaradın ("Azərbaycan", "İngilis", "Rus"). Seçilən dilləri massiv state-də saxlayın.  
**Gözlənilən Kod Nəticəsi:**  
* "Azərbaycan" və "İngilis" seçildikdə -> Ekran: `<p>Dillər: Azərbaycan, İngilis</p>`

---

### Tapşırıq 10: Rəng Mövzusu Seçimi (Select)
**İzah:** Select menyusunda "Açıq" (Light) və "Tünd" (Dark) seçimləri olsun. Seçilən mövzuya əsasən konteynerin arxa fon rəngini dinamik dəyişin.  
**Gözlənilən Kod Nəticəsi:**  
* Select `"Dark"` -> `<div style={{ backgroundColor: '#222', color: '#fff' }}>...</div>`

---

### Tapşırıq 11: Maksimum Simvol Məhdudiyyəti
**İzah:** Textarea sahəsinə maksimum 50 simvol yazmağa icazə verin. 50 simvol keçilə bilməsin.  
**Gözlənilən Kod Nəticəsi:**  
* `onChange` zamanı `e.target.value.length <= 50` şərti ilə state yenilənir.

---

### Tapşırıq 12: Ödəniş Üsulu Seçimi (Radio)
**İzah:** "Nağd" və "Kartla" radio düymələri yaradın. "Kartla" seçildikdə əlavə Kart Nömrəsi input-u görünsün.  
**Gözlənilən Kod Nəticəsi:**  
* Radio `"Kartla"` -> Kart input-u ekranda görünür.  
* Radio `"Nağd"` -> Kart input-u ekrandan gizlənir.

---

### Tapşırıq 13: Yaş Məhdudiyyəti Yoxlanışı
**İzah:** Yaş input-u yaradın. Form submit edildikdə yaş 18-dən kiçikdirsə alert çıxarın.  
**Gözlənilən Kod Nəticəsi:**  
* Input `16` + Submit -> Alert: `"Giriş üçün yaşınız çatmir!"`

---

### Tapşırıq 14: Böyük Hərfə Çevirici Input
**İzah:** Input-a yazılan hər bir hərf avtomatik böyük hərflərə çevrilərək state-ə yazılsın.  
**Gözlənilən Kod Nəticəsi:**  
* Input-a `"react"` yazıldıqda input görünüşü: `"REACT"`.

---

### Tapşırıq 15: Seçilmiş Qiymət Hesablayıcı (Select + Input)
**İzah:** Məhsul seçimi üçün `<select>` (Məhsul A: $10, Məhsul B: $20) və miqdar üçün `<input type="number">` yaradın. Ümumi qiyməti hesablayıb ekranda gösterin.  
**Gözlənilən Kod Nəticəsi:**  
* Select `Məhsul B ($20)` + Input `3` -> Ekran: `<p>Cəmi: $60</p>`

---

### Tapşırıq 16: İki Dəfə Şifrə Təkrarı Yoxlanışı
**İzah:** İki password input-u yaradın. Form submit olunduqda şifrələrin eyni olub-olmadığını yoxlayın.  
**Gözlənilən Kod Nəticəsi:**  
* Input 1 `"123"`, Input 2 `"12345"` + Submit -> Alert: `"Şifrələr üst-üstə düşmür!"`

---

### Tapşırıq 17: Auto-Focus Xüsusiyyətli Input
**İzah:** Səhifə açıldıqda input avtomatik fokuslansın və istifadəçi yazmağa başlayan kimi matn aşağıda görünsün.  
**Gözlənilən Kod Nəticəsi:**  
* `<input autoFocus value={text} onChange={...} />`

---

### Tapşırıq 18: Mesaj Göndərmə Simulyasiyası
**İzah:** Textarea və Submit düyməsi yaradın. Submit olunduqda mesaj aşağıda siyahı (`<ul><li>`) şəklində əlavə olunsun və textarea təmizlənsin.  
**Gözlənilən Kod Nəticəsi:**  
* Submit `"Salam"` -> `<ul><li>Salam</li></ul>`

---

### Tapşırıq 19: Ölkə və Şəhər Asılılığı (Select)
**İzah:** Birinci select-də ölkə ("Azərbaycan", "Türkiyə"), ikinci select-də isə seçilən ölkəyə uyğun şəhərlər göstərilsin.  
**Gözlənilən Kod Nəticəsi:**  
* Ölkə `"Azərbaycan"` -> Şəhər Select: `Bakı, Gəncə`  
* Ölkə `"Türkiyə"` -> Şəhər Select: `İstanbul, Ankara`

---

### Tapşırıq 20: Tam İstifadəçi Anketi (Bütün Elementlər Birlikdə)
**İzah:** Ad (Input), Haqqında (Textarea), Ölkə (Select), Cins (Radio) və Razılıq (Checkbox) olan vahid form yaradın. Submit etdikdə bütün məlumatları obyekt şəklində console-a çıxarın.  
**Gözlənilən Kod Nəticəsi:**  
* Form Submit -> `console.log({ name, bio, country, gender, agreed })`
