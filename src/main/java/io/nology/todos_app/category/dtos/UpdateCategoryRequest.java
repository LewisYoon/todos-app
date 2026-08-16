package io.nology.todos_app.category.dtos;

import jakarta.validation.constraints.Pattern;

public class UpdateCategoryRequest {
    @Pattern(regexp = ".*\\S.*", message = "Name can not be empty")
    private String name;

    public UpdateCategoryRequest() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "UpdateCategoryRequest [name=" + name + "]";
    }

}
