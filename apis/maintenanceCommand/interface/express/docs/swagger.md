# swagger docs

### docker
```bash
docker run -p 8080:8080 -e SWAGGER_JSON=/doc/user.swagger.yaml -v ./apis/authCommand/interface/docs:/doc swaggerapi/swagger-ui
```