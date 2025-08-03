# NestJS + MongoDB CRUD API (Dockerized)

โครงการนี้เป็นตัวอย่างระบบ CRUD อย่างง่ายด้วย **NestJS + MongoDB** ที่รันใน **Docker** โดยใช้ **Docker Compose** และมีไฟล์ Postman Collection สำหรับทดสอบ API

## Features

- สร้าง/อ่าน/แก้ไข/ลบ (CRUD) สำหรับ resource `Item`
- ใช้ Docker และ Docker Compose ในการพัฒนา
- Postman collection สำหรับทดสอบ API
- ใช้ MongoDB แบบ containerized

## Start Quickly

### 1. Clone project

```bash
git clone <repo-url>
cd nest-mongo-crud
```

### 2. Build and Run with Docker Compose

```bash
docker compose up --build
```

> API จะพร้อมใช้งานที่: [http://localhost:3000/items](http://localhost:3000/items)

## 📦 API Endpoints

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| GET    | `/items`     | Get all items   |
| GET    | `/items/:id` | Get item by ID  |
| POST   | `/items`     | Create new item |
| PUT    | `/items/:id` | Update item     |
| DELETE | `/items/:id` | Delete item     |

## Project Structure

```
nest-mongo-crud/
├── docker-compose.yml        # Docker Compose config
├── Dockerfile                # Docker build for NestJS
├── .env                      # Environment variables
├── src/
│   └── items/                # CRUD module
├── postman/
│   └── collection.json       # Postman collection
├── package.json
└── tsconfig.json
```

## Test with Postman

1. เปิด Postman
2. ไปที่ `Import`
3. เลือกไฟล์ `postman/collection.json`
4. ใช้งาน endpoints ได้ทันที

> ใช้ตัวแปร `{{itemId}}` หลังจากสร้าง item เพื่อใช้งาน GET/PUT/DELETE by ID

## .env ตัวอย่าง

```env
MONGO_URI=mongodb://mongodb:27017/nestcrud
PORT=3000
```

## Tech Stack

- [NestJS](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Postman](https://www.postman.com/)
