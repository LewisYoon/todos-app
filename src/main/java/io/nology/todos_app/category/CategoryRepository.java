package io.nology.todos_app.category;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import io.nology.todos_app.category.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Optional<Category> findByName(String name);
}