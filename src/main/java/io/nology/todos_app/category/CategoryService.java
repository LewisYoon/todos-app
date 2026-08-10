package io.nology.todos_app.category;

import java.util.List;

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

}
