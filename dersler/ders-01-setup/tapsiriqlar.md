# Dərs 1 — React layihəsinin qurulması

## Tapşırıq 1 — Node.js və npm quraşdırılması

### Windows istifadəçiləri

1. Aşağıdakı sayta daxil olun:

[https://nodejs.org](https://nodejs.org/)

2. LTS versiyasını yükləyin və quraşdırın.
3. Terminal açın və aşağıdakı komandaları yazın:

```bash
node -v
npm -v
```

4. Əgər versiyalar görünürsə, quraşdırma uğurludur.

---

### macOS istifadəçiləri

#### Variant 1 — Rəsmi sayt ilə

1. Aşağıdakı sayta daxil olun:

[https://nodejs.org](https://nodejs.org/)

2. LTS versiyasını yükləyin və quraşdırın.
3. Terminal açın və aşağıdakı komandaları yazın:

```bash
node -v
npm -v
```

---

#### Variant 2 — Homebrew ilə

Əgər Homebrew quraşdırılıbsa:

```bash
brew install node
```

Sonra:

```bash
node -v
npm -v
```

---

## Tapşırıq 2 — React layihəsi yaratmaq

Terminal açın və aşağıdakı əmri yazın:

```bash
npm create vite@latest
```

Daha sonra:

1. Layihə adı daxil edin
2. Framework olaraq `React` seçin
3. Variant olaraq `JavaScript` seçin

Layihə yaradıldıqdan sonra aşağıdakı komandaları yazın:

```bash
cd layihə-adı
npm install
npm run dev
```

Brauzerdə açılan linkə daxil olun və layihənin işlədiyini yoxlayın.

---

## Tapşırıq 3 — Fayl strukturunu analiz etmək

Layihədə aşağıdakı fayl və qovluqları tapın və nə üçün istifadə olunduğunu qısa qeyd edin:

* node_modules
* public
* src
* src/main.jsx
* src/App.jsx
* package.json
* vite.config.js

Cavabları `structure.txt` adlı faylda yazın.

---

## Tapşırıq 4 — Sadə dəyişikliklər

`App.jsx` faylını açın və aşağıdakı dəyişiklikləri edin:

* Öz adınızı yazın
* “Mən React öyrənirəm” yazın
* Başlığı dəyişin

Dəyişikliklərin brauzerdə göründüyünü yoxlayın.

---

## Tapşırıq 5 — İlk komponentin yaradılması

`src/components` qovluğu yaradın.

Daha sonra aşağıdakı faylı yaradın:

```text
src/
 ├─ components/
 │   └─ UserCard.jsx
```

`UserCard.jsx` komponenti yaradın və aşağıdakı məlumatları ekranda göstərin:

* Ad
* Yaş
* Peşə

İstifadə ediləcək HTML elementləri:

```html
<h2>
<p>
```

Nümunə görünüş:

```text
Ad: Kamran
Yaş: 20
Peşə: Frontend Developer
```

---

## Tapşırıq 6 — JSX daxilində dəyişənlərdən istifadə

`UserCard.jsx` daxilində aşağıdakı dəyişənləri yaradın:

```jsx
const ad = "Kamran";
const yash = 20;
const ish = "Frontend Developer";
```

Bu dəyişənləri JSX daxilində `{}` vasitəsilə ekranda göstərin.

Məsələn:

```jsx
<h2>{ad}</h2>
<p>{yash}</p>
<p>{ish}</p>
```

---

## Tapşırıq 7 — Komponenti App.jsx daxilində istifadə etmək

`UserCard` komponentini `App.jsx` faylına import edin.

Sonra komponenti ekranda göstərin:

```jsx
<UserCard />
```

Brauzerdə komponentin düzgün göründüyünü yoxlayın.

---

## Tapşırıq 8 — Yeni komponent yaratmaq

Aşağıdakı faylı yaradın:

```text
src/components/AboutMe.jsx
```

Komponent daxilində özünüz haqqında qısa məlumat yazın.

İstifadə ediləcək elementlər:

```html
<h2>
<p>
```

Komponenti `App.jsx` daxilində import edin və göstərin.

---

## Tapşırıq 9 — Dərslərin Siyahısı

Yeni komponent yaradın:

```text
src/components/DerslerinSiyahisi.jsx
```

Komponent daxilində aşağıdakı kimi siyahı göstərin:

```text
HTML
CSS
JavaScript
Laravel
React
```

İstifadə ediləcək elementlər:

```html
<h2>
<ul>
<li>
```

Komponenti `App.jsx` daxilində istifadə edin.

---

## Tapşırıq 10 — Yekun nəticə

Layihədə aşağıdakı komponentlər olmalıdır:

```text
App
├─ UserCard
├─ AboutMe
└─ DerslerHaqqinda
```

Bütün komponentlər `App.jsx` daxilində göstərilməlidir
