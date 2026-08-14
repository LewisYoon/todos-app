package io.nology.todos_app.category;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import io.nology.todos_app.category.dtos.CreateCategoryRequest;
import io.nology.todos_app.category.entities.Category;

@Service
public class CategoryService {
    private final CategoryRepository repo;

    public CategoryService(CategoryRepository repo) {
        this.repo = repo;
    }

    public List<Category> findAll() {
        return this.repo.findAll();

    }

    public Category create(CreateCategoryRequest data) {
        Category createdCategory = new Category();
        createdCategory.setName(data.getName().trim());
        this.repo.saveAndFlush(createdCategory);
        return createdCategory;

    }

    public Optional<Category> findById(Long id) {
        return this.repo.findById(id);
    }

    public boolean deleteById(Long id) {
        Optional<Category> result = this.findById(id);
        if (result.isEmpty()) {
            return false;
        }
        this.repo.delete(result.get());
        return true;
    }

}
