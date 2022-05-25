run-dev:
	docker-compose up -d

	//if you change docker you shouls rebuild
rebuild:
	docker-compose up -d --build