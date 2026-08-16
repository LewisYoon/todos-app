package io.nology.todos_app.todo.dtos;

import jakarta.validation.constraints.Pattern;

public class UpdateTodoRequest {
    @Pattern(regexp = ".*\\S.*", message = "Title can not be empty")
    private String title;

    private Long categoryId;

    public UpdateTodoRequest() {
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
