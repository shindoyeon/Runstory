package com.runstory.domain.hashtag.dto;

import com.runstory.domain.hashtag.entity.SelectedHashtag;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class HashtagDto {
    private String hashtagName;
}
