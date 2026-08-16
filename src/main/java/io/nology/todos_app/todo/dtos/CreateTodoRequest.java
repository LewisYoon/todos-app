package io.nology.todos_app.todo.dtos;

import jakarta.validation.constraints.NotBlank;

public class CreateTodoRequest {
    @NotBlank(message = "Title is required")
    private String title;
    private Long categoryId;

    public CreateTodoRequest() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
