package com.runstory.api.request;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SearchReqDto {
    private int type;
    private String keyword;
    private Long lastId;
    private final int size = 8;
}
