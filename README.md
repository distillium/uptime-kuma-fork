# Uptime Kuma Fork by distillium
## ⭐️ Большая благодарность [xK1t](https://github.com/xK1t) за идею и материалы!

Этот репозиторий содержит кастомизированный форк [Uptime Kuma](https://github.com/louislam/uptime-kuma) —  мониторинга аптайма с открытым исходным кодом.

- реализована принудительная RU-локализация на странице статуса
- исправлено отображение эмодзи (флагов) в браузерах на движке chromium

## Установка и запуск
Клонируйте репозиторий:
```
git clone https://github.com/distillium/uptime-kuma-fork.git
```
## Запустите Docker Compose:
Из корневой директории клонированного 
```
docker compose up -d
```
## Доступ к Uptime Kuma:
После успешного запуска контейнера Uptime Kuma будет доступна по адресу:
```
http://ВАШ_IP_СЕРВЕРА:3001 
```
При первом доступе к веб-интерфейсу вам будет предложено создать учетную запись администратора.
## Далее на свое усмотрение вы можете перейти к настройке своего reverse-proxy 
> [!IMPORTANT]
> **ДАННЫЙ ВАРИАНТ УСТАНОВКИ РАССЧИТАН ДЛЯ ПОЛЬЗОВАТЕЛЯ REMNAWAVE, ГДЕ СЕРВИС "UPTIME KUMA" УСТАНАВЛИВАЕТСЯ НА ТОМ ЖЕ СЕРВЕРЕ В ДОКЕР-СЕТИ "REMNAWAVE-NETWORK". ВЫ МОЖЕТЕ РЕДАКТИРОВАТЬ DOCKER-COMPOSE.YML ДЛЯ ДОСТИЖЕНИЯ ИНДТВИДУАЛЬНОГО РАЗМЕЩЕНИЯ СЕРВИСА ПО СВОЕМУ УСМОТРЕНИЮ** 
