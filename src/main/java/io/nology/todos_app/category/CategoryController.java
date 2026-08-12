package io.nology.todos_app.category;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.nology.todos_app.category.dtos.CreateCategoryRequest;
import io.nology.todos_app.category.entities.Category;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/categories")
@Tag(name = "Categories controller")
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping()
    public ResponseEntity<List<Category>> findAllCategories() {
        List<Category> allCategories = this.categoryService.findAll();
        return ResponseEntity.ok(allCategories);
    }

    @PostMapping()
    public ResponseEntity<Category> createCategory(@RequestBody CreateCategoryRequest data) {
        System.out.println(data);

        Category createdCategory = this.categoryService.create(data);
        return new ResponseEntity<Category>(createdCategory, HttpStatus.CREATED);
    }

}
