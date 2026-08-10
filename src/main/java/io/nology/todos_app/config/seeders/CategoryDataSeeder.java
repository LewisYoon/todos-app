package io.nology.todos_app.config.seeders;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import io.nology.todos_app.category.CategoryRepository;
import io.nology.todos_app.category.entities.Category;

@Component
@Profile({ "dev" })
public class CategoryDataSeeder implements CommandLineRunner {
    private final CategoryRepository repo;

    public CategoryDataSeeder(CategoryRepository repo) {
        this.repo = repo;
    }

    @Override
    public void run(String... args) throws Exception {
        if (repo.count() == 0) {
            System.out.println("creating category");
            Category exercise = new Category();
            exercise.setName("exercise");
            repo.saveAndFlush(exercise);

            Category study = new Category();
            study.setName("study");
            repo.saveAndFlush(study);
        }
    }

}
