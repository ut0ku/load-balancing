# Задание 22

Подготовлены и запущены 3 backend-сервера в докере, а также Nginx и HAProxy балансировщики
добавлены настройки отказоустойчивости через max_fails и fail_timeout

<img width="1445" height="373" alt="image" src="https://github.com/user-attachments/assets/26ddcd32-5efa-42ae-ba7c-5f44147f2c15" />

Сервер на порту 3002 является backup сервером

Nginx
Round Robin - http://localhost:80/
Least Connections - http://localhost:8080/
IP Hash - http://localhost:8081/

HAProxy
Round Robin - http://localhost:9000/
Least Connections - http://localhost:9001/
IP Hash - http://localhost:9002/

Проверка балансировки (Nginx & Round Robin)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/a97f0eaf-2dce-48bd-81ad-b2b034583955" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/26cf9411-d4ff-44ab-9413-133153803038" />

Запросы последовательно распределяются между серверами

Проверка с отключением сервера (3000)
<img width="1458" height="365" alt="image" src="https://github.com/user-attachments/assets/457bf660-41c2-40c4-9f21-0b58ca12ae70" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/a9a4a921-652a-4238-932a-efc2afb23e28" />

Проверка с отключением сервера (3001)
<img width="1449" height="377" alt="image" src="https://github.com/user-attachments/assets/e132b7bd-0481-4e52-8e28-90064d3e458f" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/5c013b26-f332-4826-ab1c-9d91bd4a5716" />

Проверка с отключением серверов (3000 & 3001)
<img width="1462" height="376" alt="image" src="https://github.com/user-attachments/assets/c9492587-c82d-4b52-b190-a0f69b6db2c6" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/6f2a20c2-6373-48b1-8f21-dabf2129a88c" />

Проверка балансировки (Nginx & Least Connections)
Для проверки был отправлен медленный запрос localhost:8080/slow, пока он выполнялся были быстро отправлены несколько запросов на localhost:8080/

Долгий запрос
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/4356d0e8-f60c-4d31-97c1-98e1deb27b63" />

Короткие запросы
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/f61cf906-8688-4f3a-8c8b-78b3203f931c" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/dc33ccfd-1274-4abc-a6bc-ac6c9968c466" />

Новые запросы доходят до того сервера, который без активных долгосрочных соединений

Проверка с отключением сервера (3000)
<img width="1439" height="366" alt="image" src="https://github.com/user-attachments/assets/904aac62-8d49-4977-bca7-6c3641c630a4" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/82ee0803-58ca-4330-a19d-86f29b449c3c" />

Проверка с отключением сервера (3001)
<img width="1438" height="361" alt="image" src="https://github.com/user-attachments/assets/be21b3f2-4129-473a-a793-b330a41c8d3d" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/4afdb808-e94a-44ee-8f36-33b8eedb0e4b" />

Проверка с отключением серверов (3000 & 3001)
<img width="1438" height="366" alt="image" src="https://github.com/user-attachments/assets/995338e6-e398-446e-a233-f5b229689f75" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/71d99332-57ee-476b-9cc7-35e5947e0c2e" />

Проверка балансировки (Nginx & IP Hash)

<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/b094f8d6-1da1-492b-9f8d-31a28e85ae23" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/0c3715eb-33b4-4b1b-9727-7fbcf772cbe6" />

Один IP клиента всегда маршрутизируется на один сервер

Проверка с отключением сервера (3000)
<img width="1449" height="372" alt="image" src="https://github.com/user-attachments/assets/f8a7deab-0987-4711-8fd7-1978f6973860" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/3eeb2f3b-602a-4f0b-b801-16c5ffc31d6d" />

Проверка с отключением сервера (3001)
<img width="1443" height="369" alt="image" src="https://github.com/user-attachments/assets/eac59000-6060-4fc4-9cc1-0825e8a2d249" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/2c166bd1-4c60-44b3-bfda-7ebe5a5eee71" />

Проверка с отключением серверов (3000 & 3001)
<img width="1445" height="366" alt="image" src="https://github.com/user-attachments/assets/67dbbad2-a6cd-49af-9b61-d9afde5c67bd" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/87fd983a-8e86-4ff6-a19c-f94f24984759" />

Проверка балансировки (HAProxy & Round Robin)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/9524e193-e42b-425b-a273-77af9bde93f6" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/2bb7309e-414f-4433-ae63-03f1914b596a" />

Запросы последовательно распределяются между серверами

Проверка с отключением сервера (3000)
<img width="1433" height="398" alt="image" src="https://github.com/user-attachments/assets/ea00fb2b-0cb1-4d75-a925-c4378e7c21e6" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/3e875bf6-8c8f-4eb9-a38b-4a8d28510e86" />

Проверка с отключением сервера (3001)
<img width="1442" height="373" alt="image" src="https://github.com/user-attachments/assets/10c70038-0ed7-435a-822e-d034319f70d7" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/b3eba247-f950-42ac-926c-1d5c4508cb3e" />

Проверка с отключением серверов (3000 & 3001)
<img width="1450" height="365" alt="image" src="https://github.com/user-attachments/assets/b97e62a7-c12b-418d-a026-8a8631ad4b0e" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/5d717b4a-8dcd-4cf2-8843-dfb352adc29d" />

Проверка балансировки (HAProxy & Least Connections)

Для проверки был отправлен медленный запрос localhost:9001/slow, пока он выполнялся были быстро отправлены несколько запросов на localhost:9001/

Долгий запрос
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/e6bc86ee-d3de-4aa6-8fe4-af4c772d6740" />

Короткие запросы
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/9edb1477-bd46-44e6-8d2b-80bfe53cc884" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/d8b65d23-1394-4eb9-a6e7-60a288a58ab1" />

Новые запросы доходят до того сервера, который без активных долгосрочных соединений

Проверка с отключением сервера (3000)
<img width="1453" height="373" alt="image" src="https://github.com/user-attachments/assets/911f0296-c8a0-4438-a972-6363ece29e1c" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/4e1f7f81-bd20-4f51-b724-39e77c0d7030" />

Проверка с отключением сервера (3001)
<img width="1434" height="374" alt="image" src="https://github.com/user-attachments/assets/5cc53ce1-8c1d-430a-a4d4-75b1533bcf4a" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/6452ed22-7a6d-4463-90c8-29046f84c560" />

Проверка с отключением серверов (3000 & 3001)
<img width="1467" height="370" alt="image" src="https://github.com/user-attachments/assets/348f278e-f1eb-442b-8825-6272bd545286" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/3553781b-1ed4-410d-b2be-b71984f4582c" />

Проверка балансировки (HAProxy & IP Hash)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/ac5df978-9e46-4d6e-b2d9-1249be0b2f10" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/bd83c621-d68d-429c-85c9-ce8bd6753d81" />

Один IP клиента всегда маршрутизируется на один сервер

Проверка с отключением сервера (3000)
<img width="1434" height="378" alt="image" src="https://github.com/user-attachments/assets/66f794d9-1811-4341-b661-865c072eb335" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/38beb0b4-b9c2-46f6-866d-884963d8bf0c" />

Проверка с отключением сервера (3001)
<img width="1429" height="374" alt="image" src="https://github.com/user-attachments/assets/3a3d0a03-5974-4849-a259-b468d6d2af50" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/c6bdebf5-bc71-48ec-b41f-4b95a8acc7c1" />

Проверка с отключением серверов (3000 & 3001)
<img width="1442" height="372" alt="image" src="https://github.com/user-attachments/assets/61e21faf-5810-4662-8a76-88aebc27e859" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/4e614c49-940f-44c3-a4a1-bc9f5b1778c8" />

# Задание 23

Добавлен Backend docker profile
Backend-сервисы отвечают на запросы /GET с указаниями индификтора {"server": "backend-1"}, {"server": "backend-2"}, {"server": "backend-3"}
Настроен Nginx в роли балансировщика нагрузки
docker-compose.yml описывает все сервисы и объединет их в одну сеть
Настроен Dockerfile для backend-сервиса

Все сервера запущены на порту 8080
<img width="1464" height="445" alt="image" src="https://github.com/user-attachments/assets/6e292cac-eec6-4b8e-be57-474ce915465e" />

Проверка балансировки
(при повторных запросах к http://localhost/ ответы должны поочередно приходить от разных серверов)

1 запрос (backend-1)
<img width="1310" height="878" alt="image" src="https://github.com/user-attachments/assets/c5e43d28-866c-44d6-b22e-3aa04f81beb0" />

2 запрос (backend-2)
<img width="1312" height="879" alt="image" src="https://github.com/user-attachments/assets/2519ea57-c076-4ff7-a8ce-cb9e057d8102" />

Добавлены настройки отказоустойчивости (max_fails и fail_timeout) в Nginx
<img width="476" height="67" alt="image" src="https://github.com/user-attachments/assets/15b2f43f-b535-485b-afa3-1f144a6863fb" />

Проверка отказоустойчивости
При отключении сервера, Nginx должен перестать направлять на него запросы и продолжить обслуживать трафик через оставшиеся сервера.

Отключение backend-2
<img width="1437" height="109" alt="image" src="https://github.com/user-attachments/assets/6016338a-fa65-460f-9d36-124534ccceb2" />

Отправка запроса
<img width="1312" height="879" alt="image" src="https://github.com/user-attachments/assets/e0878786-4cde-47a1-8845-33c1a0298295" />

Отключение backend-1 & backend-2

Отправка запроса
<img width="1312" height="879" alt="image" src="https://github.com/user-attachments/assets/bd3e4bbe-a2d5-4c8b-806e-f9bcba09d3c1" />
