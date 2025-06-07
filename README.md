# Notification Service API

## Deployed Link

**Base URL:**  
[https://notification-service-vx0z.onrender.com](https://notification-service-vx0z.onrender.com)

---

## API Endpoints

### 1. Send Notification

- **POST** `/api/notifications`  
- Sends a notification via **email**, **SMS**, or **in-app**.
  
### 2. Get User Notifications

- **GET** `/api/users/:id/notifications`  
- Retrieves all notifications (email, SMS, and in-app) sent to the specified user.

**Path Parameter:**

- `:id` — The ID of the user whose notifications you want to fetch.

**Request Body Example for Send Notification:**

```json
{
  "userId": "user123",
  "type": "email",                 // "email", "sms", or "in-app"
  "destination": "user@gmail.com", // email or phone number 
  "message": "Hello from the notification service!"
}



