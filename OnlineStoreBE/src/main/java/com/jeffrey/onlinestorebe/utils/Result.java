package com.jeffrey.onlinestorebe.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
public class Result<T> implements Serializable {
    private Integer code;
    private String message;
    private T data;

    public Result(int code, String message, T data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public static <T> Result<T> success() {
        return new Result<>(0, "success", null);
    }

    public static <T> Result<T> success(String message, T data) {
        return new Result<>(0, message, data);
    }

    public static <T> Result<T> success(T data) {
        return new Result<>(0, "success", data);
    }

    public static <T> Result<T> failure(String message) {
        return new Result<>(1, message, null);
    }

    public static <T> Result<T> failure(Integer code, String message) {
        return new Result<>(code, message, null);
    }

    public static <T> Result<T> failure(Integer code, String message, T data) {
        return new Result<>(code, message, data);
    }
}