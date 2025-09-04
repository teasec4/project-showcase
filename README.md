# Портфолио проектов

Современное React приложение для демонстрации ваших проектов с красивым интерфейсом и удобной навигацией.

## Особенности

- 🎨 Современный дизайн с градиентами и анимациями
- 📱 Адаптивный дизайн для всех устройств
- 🔄 Навигация между проектами с кнопками вперед/назад
- 📊 Счетчик проектов
- 🔗 Ссылки на GitHub репозитории
- 📞 Контактная информация в навбаре
- 📄 Возможность скачивания резюме

## Структура проекта

```
src/
├── components/
│   ├── Navbar.jsx          # Навигационная панель
│   ├── Navbar.css          # Стили навигации
│   ├── ProjectShowcase.jsx # Основной компонент демонстрации проектов
│   └── ProjectShowcase.css # Стили демонстрации проектов
├── data/
│   └── projects.js         # Данные проектов
├── App.jsx                 # Главный компонент
└── App.css                 # Общие стили
```

## Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone <your-repo-url>
cd resume
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите проект в режиме разработки:
```bash
npm run dev
```

4. Откройте [http://localhost:5173](http://localhost:5173) в браузере.

## Настройка

### 1. Обновите данные проектов

Отредактируйте файл `src/data/projects.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Название вашего проекта",
    description: "Описание проекта",
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "Функция 1",
      "Функция 2",
      "Функция 3"
    ],
    githubUrl: "https://github.com/yourusername/your-project",
    imageUrl: "/images/your-project-screenshot.png"
  }
  // Добавьте больше проектов...
];
```

### 2. Обновите контактную информацию

Отредактируйте файл `src/components/Navbar.jsx`:

```javascript
// Замените на ваши данные
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourusername">LinkedIn</a>
```

### 3. Добавьте скриншоты проектов

1. Поместите изображения в папку `public/images/`
2. Обновите `imageUrl` в данных проектов

### 4. Добавьте резюме

1. Поместите файл резюме (PDF) в папку `public/`
2. Обновите путь в `Navbar.jsx`:

```javascript
link.href = '/your-resume.pdf';
link.download = 'your-resume.pdf';
```

## Деплой на GitHub Pages

1. Создайте репозиторий на GitHub

2. Добавьте скрипт для деплоя в `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Установите gh-pages:
```bash
npm install --save-dev gh-pages
```

4. Обновите `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/'
})
```

5. Деплойте:
```bash
npm run deploy
```

## Сборка для продакшена

```bash
npm run build
```

## Технологии

- React 18
- Vite
- CSS3 с градиентами и анимациями
- Font Awesome иконки
- Responsive Design

## Лицензия

MIT
