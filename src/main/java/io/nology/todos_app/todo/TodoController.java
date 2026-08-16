package io.nology.todos_app.todo;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.nology.todos_app.common.exceptions.NotFoundException;
import io.nology.todos_app.todo.dtos.CreateTodoRequest;
import io.nology.todos_app.todo.dtos.UpdateTodoRequest;
import io.nology.todos_app.todo.entities.Todo;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/todos")
@Tag(name = "Todos controller")
public class TodoController {

    private final TodoService service;

    public TodoController(TodoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Todo>> findAllTodos() {
        List<Todo> allTodos = this.service.findAll();
        return ResponseEntity.ok(allTodos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Todo> findTodoById(@PathVariable Long id) {
        Todo result = this.service.findById(id)
                .orElseThrow(() -> new NotFoundException(
                        "Could not find todo with id " + id));

        return ResponseEntity.ok(result);
    }

    @PostMapping
    public ResponseEntity<Todo> createTodo(
            @Valid @RequestBody CreateTodoRequest data) {

        Todo createdTodo = this.service.create(data);

        return new ResponseEntity<>(createdTodo, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Todo> updateTodoById(
            @PathVariable Long id,
            @Valid @RequestBody UpdateTodoRequest data) {

        Todo result = this.service.updateById(id, data)
                .orElseThrow(() -> new NotFoundException(
                        "Could not find todo with id " + id));

        return ResponseEntity.ok(result);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodoById(@PathVariable Long id) {
        boolean isDeleted = this.service.deleteById(id);

        if (isDeleted) {
            return ResponseEntity.noContent().build();
        }

        throw new NotFoundException(
                "Could not find todo with id " + id);
    }
}