package com.runstory.domain.hashtag.dto;

import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class HashtagDto {
    private Long hashtagId;
    private String hashtagName;
}