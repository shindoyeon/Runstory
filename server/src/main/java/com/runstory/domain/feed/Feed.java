package com.runstory.domain.feed;

import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import lombok.Data;

@Entity
@Data
public class Feed {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long feedId;
    @Column(length = 50)
    private String userId;
    @Column(length = 1000)
    private String content;
    @Transient
    private List<FeedFile> img;
    @Column(columnDefinition = "int DEFAULT 0")
    private int publicScope;
    @Column(columnDefinition = "datetime NOT NULL DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime regdate;
    @Column(columnDefinition = "datetime NOT NULL DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime updatedate;
}
