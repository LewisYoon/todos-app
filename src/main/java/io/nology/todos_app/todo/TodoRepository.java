package io.nology.todos_app.todo;


import org.springframework.data.jpa.repository.JpaRepository;
import io.nology.todos_app.todo.entities.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {

}