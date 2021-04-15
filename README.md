# Дипломная работа Yandex-praktikum (Front-end)
---
### О проекте
___Movies-explorer-frontend___ является front-end частью cервиса movies-explorer, в котором можно найти фильмы по запросу и сохранить в личном кабинете. Включает в себя регистрацию, авторизацию пользователей, поиск фильмов по ключевым словам, сохранение фильмов, редактирование личного профиля.  
Ссылки на проект:
- https://aplby.students.nomoredomains.icu;  
Figma:  
- https://www.figma.com/file/mwu9ylluzZGB6zaBGvjbWM/Diploma-(%D0%9B%D0%BE%D0%B3%D1%83%D0%BD%D0%BE%D0%B2)?node-id=932%3A3407&viewport=-5088%2C-400%2C0.5543531775474548;   
 
### Роуты и эндпоинты  
 
#### возвращает информацию о пользователе (email и имя)
GET /users/me

#### обновляет информацию о пользователе (email и имя)
PATCH /users/me

#### возвращает все сохранённые пользователем фильмы
GET /movies

#### создаёт фильм с переданными в теле
#### country, director, duration, year, description, image, trailer, nameRU, nameEN, movieId, thumbnail 
POST /movies

#### удаляет сохранённый фильм по _id
DELETE /movies/movieId  

#### создаёт пользователя с переданными в теле
#### email, password и name
POST /signup

#### проверяет переданные в теле почту и пароль
# и возвращает JWT
POST /signin  

#### удаляет cookie c JWT на стороне клиента
POST /signout  

### Технологии использованные в проекте  
- React;
- React-Router-Dom;
- JavaScript;
- Fetch API;
- ООП;
- JSX;
- HTML5;
- CSS3;
- BEM;

