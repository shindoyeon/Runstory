package com.runstory.domain.feed;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Entity
@Data
public class FeedFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long feedFileId;
    private long feedId;
    @Column(length = 500)
    private String filePath;
    @Column(length = 500)
    private String fileName;
}
