# Trading-concept DEMO



![alt text](https://image.prntscr.com/image/uSGkWS86QSqXhOcKDAp_yg.png)



Front-end и Back-end: Все построено на сокетам (Socket.io) и стримах (Rx.JS). Для увелечения перфоманса в реал-тайм режиме.

Front-end:
В качестве фреймворка использовался React из-за быстрой скорости рендеринга. Для обновления данных в реал-тайм режиме использовался функционально реактивный подход с использование RxJS как имплементации. Построения графиков осуществлялось с помощью двух разных библиотек React-Stockcharts, Recharts (которые основаны на проверенном d3 движке). 

React 16 + MobX
Socket.io
Rx.JS
React-Stockcharts, Recharts

Back-end:
Использовался NodeJS и Koa в качестве фреймворка. База данных PostgreSQL и knex как sql quiry builder (другими словами ORM). Бэкенд построен  таким образом, чтобы можно было в будущем подключить GraphQL и Elastic Search.

NodeJS + Koa
PostgreSQL
Socket.io
Rx.JS


