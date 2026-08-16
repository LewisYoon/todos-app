package io.nology.todos_app.config.seeders;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import io.nology.todos_app.category.CategoryRepository;
import io.nology.todos_app.category.entities.Category;
import io.nology.todos_app.todo.TodoRepository;
import io.nology.todos_app.todo.entities.Todo;

@Component
@Profile({ "dev" })
public class TodoDataSeeder implements CommandLineRunner {
    private final TodoRepository repo;
    private final CategoryRepository categoryRepo;

    public TodoDataSeeder(
            TodoRepository repo,
            CategoryRepository categoryRepo) {
        this.repo = repo;
        this.categoryRepo = categoryRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        if (repo.count() == 0) {
            System.out.println("creating todo");

            Category exercise = categoryRepo.findByName("exercise")
                    .orElseThrow();

            Todo benchPress = new Todo();
            benchPress.setTitle("bench press");
            benchPress.setCategory(exercise);

            repo.saveAndFlush(benchPress);
        }
    }
}