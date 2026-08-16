package io.nology.todos_app.todo;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import io.nology.todos_app.category.CategoryRepository;
import io.nology.todos_app.category.entities.Category;
import io.nology.todos_app.common.exceptions.NotFoundException;
import io.nology.todos_app.todo.dtos.CreateTodoRequest;
import io.nology.todos_app.todo.dtos.UpdateTodoRequest;
import io.nology.todos_app.todo.entities.Todo;

@Service
public class TodoService {
    private final TodoRepository repo;
    private final CategoryRepository categoryRepo;
    private final ModelMapper mapper;

    public TodoService(
            TodoRepository repo,
            CategoryRepository categoryRepo,
            ModelMapper mapper) {
        this.repo = repo;
        this.categoryRepo = categoryRepo;
        this.mapper = mapper;
    }

    public List<Todo> findAll() {
        return this.repo.findAll();
    }

    public Optional<Todo> findById(Long id) {
        return this.repo.findById(id);
    }

    public Todo create(CreateTodoRequest data) {
        Todo todo = this.mapper.map(data, Todo.class);

        if (data.getCategoryId() != null) {
            Category category = this.categoryRepo.findById(data.getCategoryId())
                    .orElseThrow(() -> new NotFoundException(
                            "Category not found with id " + data.getCategoryId()));

            todo.setCategory(category);
        }

        return this.repo.saveAndFlush(todo);
    }

    public Optional<Todo> updateById(Long id, UpdateTodoRequest data) {
        Optional<Todo> result = this.findById(id);

        if (result.isEmpty()) {
            return result;
        }

        Todo foundTodo = result.get();

        if (data.getCategoryId() != null) {
            Category category = this.categoryRepo.findById(data.getCategoryId())
                    .orElseThrow(() -> new NotFoundException(
                            "Category not found with id " + data.getCategoryId()));

            foundTodo.setCategory(category);
        }

        this.mapper.map(data, foundTodo);

        this.repo.saveAndFlush(foundTodo);

        return Optional.of(foundTodo);
    }

    public boolean deleteById(Long id) {
        if (!this.repo.existsById(id)) {
            return false;
        }

        this.repo.deleteById(id);
        return true;
    }
}