package io.nology.todos_app.category;

import org.springframework.data.jpa.repository.JpaRepository;

import io.nology.todos_app.category.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}