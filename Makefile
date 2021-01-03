APP=wtc/frontend

docker-build:
	docker build -t $(APP) .

docker-run:
	docker run -e "API_URL=http://localhost:3000" -d -p 8080:8080 $(APP)

.PHONY: docker-build docker-run