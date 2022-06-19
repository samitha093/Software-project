
# Event Ticketing Web APP

Event Organizers can Sell their tickets And Event
Lovers Can get their chance with our platform.


## Deployment

To Deploy Dev. mode on Docker

```bash
  docker-compose up -d --build
```
To Deploy Production mode on Docker

```bash
  docker-compose -f docker-compose.production.yml  up -d --build
```

## Development User-Guid

For Nextjs App
```bash
  http://localhost/
```

For API Service

```bash
  http://localhost/api/
```
For API Document (Swagger)

```bash
  http://localhost/swagger/
```
For Mongodb Database (Mongo express)

```bash
  http://localhost:8081/
```
## Documentation
Mongodb Compass Login

```bash
  mongodb://root:password@localhost:27017/
```
Server has Port 22, 80, 443 & 27017 , others are blocked to public network from iptable.
All incomming Trafics are Acccept.
## Tests For Next APP

To run tests, run the following command On client Directory

```bash
  npm run Dev
```


## 🚀 Developer Team
Lakshan Pathiraja

Poorna Manujaya Amarasinghe

Rashmi Thennakoon

Aroshan Wanigasundara

