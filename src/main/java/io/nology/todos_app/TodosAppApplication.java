package io.nology.todos_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "My API", version = "v1"))
public class TodosAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodosAppApplication.class, args);
	}

}
