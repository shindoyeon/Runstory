package com.runstory.api.response;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class ApiResponse<T> {

    private final static int SUCCESS = 200;
    private final static int NOT_FOUND = 400;
    private final static int FAILED = 500;
    private final static String SUCCESS_MESSAGE = "SUCCESS";
    private final static String NOT_FOUND_MESSAGE = "NOT FOUND";
    private final static String FAILED_MESSAGE = "서버에서 오류가 발생하였습니다.";
    private final static String INVALID_ACCESS_TOKEN = "유효하지 않은 access token.";
    private final static String INVALID_REFRESH_TOKEN = "유효하지 않은 refresh token.";
    private final static String NOT_EXPIRED_TOKEN_YET = "만료되지 않은 토큰 입니다";
    private final int statusCode;
    private final String message;
    private final T data;

    public static <T> ApiResponse<T> success(T body) {
        return new ApiResponse(SUCCESS, SUCCESS_MESSAGE, body);
    }

    public static <T> ApiResponse<T> fail() {
        return new ApiResponse(FAILED, FAILED_MESSAGE, null);
    }

    public static <T> ApiResponse<T> invalidAccessToken() {
        return new ApiResponse(FAILED, INVALID_ACCESS_TOKEN, null);
    }

    public static <T> ApiResponse<T> invalidRefreshToken() {
        return new ApiResponse(FAILED, INVALID_REFRESH_TOKEN, null);
    }

    public static <T> ApiResponse<T> notExpiredTokenYet() {
        return new ApiResponse(FAILED, NOT_EXPIRED_TOKEN_YET, null);
    }
}