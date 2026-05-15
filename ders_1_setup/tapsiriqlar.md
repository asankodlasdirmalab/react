# Dərs 1 — React layihəsinin qurulması

## Tapşırıq 1 — Node.js və npm quraşdırılması

### Windows istifadəçiləri

1. Aşağıdakı sayta daxil olun:

https://nodejs.org

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

https://nodejs.org

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

- node_modules
- public
- src
- src/main.jsx
- src/App.jsx
- package.json
- vite.config.js

Cavabları `structure.txt` adlı faylda yazın.

---

## Tapşırıq 4 — Sadə dəyişikliklər

`App.jsx` faylını açın və aşağıdakı dəyişiklikləri edin:

- Öz adınızı yazın
- “Mən React öyrənirəm” yazın
- Başlığı dəyişin

Dəyişikliklərin brauzerdə göründüyünü yoxlayın.
````
