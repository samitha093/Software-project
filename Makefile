run-dev:
	docker-compose up -d

	//if you change docker you shouls rebuild
rebuild:
	docker-compose up -d --build
	
Production:
	docker-compose -f docker-compose.production.yml  up -d --build