
# Event Ticketing Web APP
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


Event Organizers can Sell their tickets And Event
Lovers Can get their chance with our platform.

## Environment variable

{root}/client

```bash
  HOST_IP={Your Static Ip or Local Ip Address}
```
{root}/server

```bash
  MONGO_URI=mongodb://root:password@mongo:27017/tickbid
  NEXT_HOST=http:///{Your Static Ip or Local Ip Address}/
  API_HOST=http://{Your Static Ip or Local Ip Address}/api
  SECRET= {Replace With Your Secreat key}
```


## Local Deployment Guid

Clone the project

```bash
  git clone https://github.com/samitha093/Software-project.git
```

Go to the project directory

```bash
  cd Software-project
```

Install Project (docker composer require*)

```bash
  docker-compose up -d --build
```
## Documentation (Use your network ip instead of localhost)

index 
```bash
  http://{IP or localhost}/
```
User Login
```bash
  http://{IP or localhost}/user
```
Remote Access
```bash
  http://{IP or localhost}/qr
```

For API Service

```bash
  http://{IP or localhost}/api/
```

For fastify Device tracker Service

```bash
  http://{IP or localhost}/fastify
```
For web socket

```bash
  http://{IP or localhost}/socket.io
```

For API Document (Swagger)

```bash
  http://{IP or localhost}/swagger/
```
For Mongodb Database (Mongo express)- Dev. use only

```bash
  http://{IP or localhost}:8081/
```
## Database login
Mongodb Compass

```bash
  mongodb://root:password@localhost:27017/
```
## Features

- User Registration 
- User login 
- Forget password  
- Add/remove - cart  
- Checkout as buyer  
- Checkout  as guest  
- Bid for ticket 
- Rebid for pending bid 
- Rebid for lost bid  
- logout users(all)  
- Ticket search - by name 
- Ticket search - by area 
- Ticket search - by category  
- Ticket search - by ticket level  
- View tickets by types - for buyer 
- View ticket - guest  
- user profile - change pw 
- user profile - view details 
- user profile - change sys. Feature 
- Seller dashboard - view analysis 
- Seller event view by type 
- Seller create event  
- Seller ticket create  
- Seller event/ticket edit 
- Seller view bidders for tickets  
- Seller ticket validation 
- Manager dashboard  view analysis 
- Manager view Event by type 
- Manager create approval event 
- Manager activate/deactivated sellers 
- Manager create/edit/delete area 
- Manager create/edit/delete category  

## Tech Stack

**Client:** Next.js, MaterialUI

**Server:** Express.js

**Database:** Mongodb

## 🚀 Developer Team
Lakshan Pathiraja

Poorna Manujaya Amarasinghe

Rashmi Thennakoon

Aroshan Wanigasundara


