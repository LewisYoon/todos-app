package io.nology.todos_app.category;

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

import io.nology.todos_app.category.dtos.CreateCategoryRequest;
import io.nology.todos_app.category.dtos.UpdateCategoryRequest;
import io.nology.todos_app.category.entities.Category;
import io.nology.todos_app.common.exceptions.NotFoundException;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

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

    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable Long id) {
        Category result = this.categoryService.findById(id)
                .orElseThrow(() -> new NotFoundException("Could not find category with id " + id));
        return ResponseEntity.ok(result);

    }

    @PatchMapping("/{id}")
    public ResponseEntity<Category> updateCategoryById(@PathVariable Long id,
            @Valid @RequestBody UpdateCategoryRequest data) {
        Category result = this.categoryService.updateById(id, data)
                .orElseThrow(() -> new NotFoundException("Could not find category with id " + id));
        return ResponseEntity.ok(result);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategoryById(@PathVariable Long id) {
        boolean isDeleted = this.categoryService.deleteById(id);
        if (isDeleted) {
            return ResponseEntity.noContent().build();
        }
        throw new NotFoundException("Could not find category with id " + id);
    }
}
