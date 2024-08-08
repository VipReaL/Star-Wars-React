# Проект Star Wars 🪐

[Посмотреть проект Star Wars 🪐](https://vipreal.github.io/Star-Wars-React/)
[Посмотреть storybook проектa Star Wars 🪐](https://vipreal.github.io/Star-Wars-React/storybook)

- На главной странице реализована возможность выбора темы со сменой фона и цвета текста
- На странице Персонажи выводится список ключевых персонажей вселенной звёздных войн, можно просматривать подробную статистику и добавлять в избранное.
- Реализован поиск по персонажам
- Реализована страница not-found
- Реализована страница fail

# ⛓️‍💥 Использованы API
- https://swapi.dev (основное API)
- https://swapi.py4e.com (запасное API - если основное не работает)
- https://starwars-visualguide.com (изображения для API)

# ⚙️ Использованы технологии
## React.js
- Разворачивание приложения с create-react-app
- Состояние компонента (хук useState)
- Жизненный цикл компонента (хук useEffect)
- Context API (хук useContext)
- Рефы и DOM (хук useRef)
- Создание собственных хуков
- Фрагменты
- Паттерн Higher-Order Component
- Паттерн Подъём состояния
- Обработка событий
- Controlled Components
- Подключение CSS, css-modules, библиотека classnames
- Библиотека prop-types для валидации props
## React Router
- Базовый роутинг
- URL Parameters
- Query Parameters
- Обработка страницы 404 (Not Found)
- Хуки useLocation и useHistory
## Redux
- Базовая структура react-redux-приложения
- Хуки useDispatch, useSelector
- Redux Middleware
- Создание асинхронных action с библиотекой redux-thunk
- Отслеживание состояния store с redux-devtools-extension
## Общее
- Задание Alias в React-приложении (библиотека react-app-rewire-alias)
- Деплой приложения на GitHub Pages (библиотека gh-pages)
- Создание Ui-Kit из визуальных компонентов и публикация в @storybook
- Библиотека lodash с готовыми функциями
- Visual Studio Code. Сниппеты и плагины
## JavaScript
- Методы работы с массивами: map, filter, forEach
- Асинхронность: Promise, Async Functions
- ES6-модули (import и export)
- Оператор разворота для объектов (props для компонента)
- Деструктуризация массивов и объектов
- Тернарные операторы
- Работа с Local Storage
- Работа с API с использованием Fetch
## Вёрстка
- CSS Custom Properties, изменение через JavaScript
- CSS Filters
- CSS Flexbox
- CSS Multi Columns
- Стилизация скроллбара
## Технологии
- TypeScript
- Firebase регистрация
- Material UI, стилизация через css-in-js
- Redux Thunk
- React Hook Form для обработки данных форм
## Функционал
- Роутер. Анимация при переходе между страницами
- Добавить шрифты

# 🛠 Установка и запуск
```bash
# Установка
npm i                    # установка зависимостей
```
```bash
# Основные команды
npm run start            # запустить приложение в режиме разработки
npm run storybook        # запустить storybook
npm run deploy           # развернуть приложение в Github Pages
```
```bash
# Deploy
npm run build            # builds the app for production
npm run build-storybook  # storybook build
npm run build-gh-pages   # deploy on Github Pages
```
```bash
# Not used
npm run eject            # remove the single build dependency
npm run deploy-storybook # storybook deploy
```

## NPM
```bash
npm i --save classnames lodash prop-types react react-dom react-redux react-router react-router-dom react-scripts redux redux-devtools-extension redux-thunk
```
```bash
npm i --save-dev @storybook/addon-actions @storybook/addon-essentials @storybook/addon-links @storybook/node-logger @storybook/preset-create-react-app @storybook/react @storybook/storybook-deployer gh-pages react-app-rewire-alias react-app-rewired
```
