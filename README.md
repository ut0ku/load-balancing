# Задание 22

Подготовлены и запущены 3 backend-сервера в докере, а также Nginx балансировщик
<img width="1475" height="681" alt="image" src="https://github.com/user-attachments/assets/8305509c-2584-4a03-a614-4dfcf3f6ce7b" />

Сервер на порту 3002 является backup сервером

Проверка балансировки (Nginx & Round Robin)
<img width="1302" height="876" alt="image" src="https://github.com/user-attachments/assets/00b37012-e8bf-457d-9fc0-a7650313ad28" />
<img width="1302" height="876" alt="image" src="https://github.com/user-attachments/assets/da622aa4-9561-4fa1-ae53-c397332becb5" />

Запросы последовательно распределяются между серверами

Проверка с отключением сервера (3000)
<img width="1469" height="593" alt="image" src="https://github.com/user-attachments/assets/89f445b3-41c9-4dc3-b64f-addda16af009" />
<img width="1302" height="876" alt="image" src="https://github.com/user-attachments/assets/32039a53-9f94-400b-9534-9155bdfd05f3" />

Проверка с отключением сервера (3001)
<img width="1302" height="876" alt="image" src="https://github.com/user-attachments/assets/ae0fd2b4-57a7-479f-8fbd-c44c8197022a" />

Проверка балансировки (Nginx & Least Connections)
Для проверки был отправлен медленный запрос localhost:80/slow, пока он выполнялся были быстро отправлены несколько запросов на localhost:80

Долгий запрос
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/cd07c8e1-05f5-442b-ace5-0c1f0037eff5" />

Короткие запросы
<img width="1212" height="807" alt="image" src="https://github.com/user-attachments/assets/e412ed8f-0ce2-4daf-bb4b-f5cc92c2ecb5" />
<img width="1208" height="810" alt="image" src="https://github.com/user-attachments/assets/4491405c-3f73-471c-828a-69cd9dbbd393" />

Новые запросы доходят до сервера без активных долгосрочных соединений

Проверка с отключением сервера (3000)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/80dfca5e-488f-44b0-bd55-f308e82b498a" />

Проверка с отключением сервера (3001)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/813f622c-f8dd-4e13-b1e0-315a29173a2c" />

Проверка балансировки (Nginx & IP Hash)

<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/0044dade-5287-4fa8-961c-b632b287a062" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/e092c9d5-7012-4e4d-bd5b-13e953059f85" />

Один IP клиента всегда маршрутизируется на один сервер

Проверка с отключением сервера (3000)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/a57efdc6-dac9-41ff-8068-9b261be17918" />

Проверка с отключением сервера (3001)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/a127296b-7da0-4635-bc72-2ffa7687f9fd" />

Проверка с отключением сервера (3002)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/bad001fd-70e4-437b-88a4-4a34a1df5c4d" />

Настроен альтернативный метод балансировки HAProxy
<img width="1479" height="376" alt="image" src="https://github.com/user-attachments/assets/0b63284b-2712-4f14-973a-a8f55b429486" />

Проверка балансировки (HAProxy & Round Robin)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/70084f07-3a8d-4f94-a4de-ef664d09a99c" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/dd4254d8-088e-4671-80ae-33357b873c75" />

Запросы последовательно распределяются между серверами

Проверка с отключением сервера (3000)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/e4dea24b-9e26-41e3-a353-09d822d61a28" />

Проверка с отключением сервера (3001)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/4a474fbe-05be-4b68-848c-f337ab650bae" />

Проверка балансировки (HAProxy & Least Connections)

Для проверки был отправлен медленный запрос localhost:9000/slow, пока он выполнялся были быстро отправлены несколько запросов на localhost:9000

Долгий запрос
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/729ab23c-ee88-42b2-9856-488bf7e10053" />

Короткие запросы
<img width="1211" height="812" alt="image" src="https://github.com/user-attachments/assets/ea6ddc55-78b2-44de-bfae-9d1f032286f5" />
<img width="1216" height="812" alt="image" src="https://github.com/user-attachments/assets/c964a70f-11fc-4a26-b7cb-28e3ac20d012" />

Новые запросы доходят до сервера без активных долгосрочных соединений

Проверка с отключением сервера (3000)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/a4aacded-26c9-4f59-8434-41d6bcc8f40c" />

Проверка с отключением сервера (3001)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/8a972c21-36f2-4dcd-a6ea-9bc8e1a71631" />

Проверка балансировки (HAProxy & IP Hash)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/76c8284d-3726-41e5-8940-901a30c8bae9" />
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/a36654ff-55e5-492f-a27e-0764bebd5087" />

Один IP клиента всегда маршрутизируется на один сервер

Проверка с отключением сервера (3000)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/f308a1eb-52b4-46ff-be38-cd7c2ec475ea" />

Проверка с отключением сервера (3001)
<img width="1305" height="876" alt="image" src="https://github.com/user-attachments/assets/1d76dcc0-bcae-4086-a00b-20a1c5da991d" />
