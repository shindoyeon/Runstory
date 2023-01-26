package com.runstory.domain.feed;

import javax.persistence.*;

import lombok.Data;
import org.hibernate.annotations.Comment;

import static javax.persistence.FetchType.LAZY;

@Entity
@Data
public class FeedFile {

    @Comment("피드 파일 아이디")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedFileId;
    @Comment("피드 아이디")
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "feed_id")
    private Feed feed;
    @Comment("파일경로")
    @Column(length = 500)
    private String filePath;
    @Comment("파일명")
    @Column(length = 500)
    private String fileName;
}
