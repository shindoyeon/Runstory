package com.runstory.domain.notificationtable;


import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Data
@DynamicInsert
public class Notification{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(length = 50, nullable = false)
    @Comment("알림 아이디")
    private long AlarmId;
    @Column(length = 50, nullable = false)
    @Comment("알림 듣는사람아이디")
    private String AlarmListenId;
    @Column(length = 50, nullable = false)
    @Comment("알림 보내는사람 아이디")
    private String AlarmSendId;
    @Column(columnDefinition = "int default 0", nullable = false)
    @Comment("알림종류")
    private int AlarmType;
    @Column(length = 50, nullable = false)
    @Comment("알림피드아이디")
    private String AlarmFeedId;
    @Column(length = 500, nullable = false)
    @Comment("알림내용")
    private String AlarmContent;
    @Column(columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP", nullable = false)
    @Comment("알림발생시간")
    private LocalDateTime AlarmTime;
    @Column(columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP", nullable = false)
    @Comment("알림확인시간")
    private LocalDateTime AlarmAcceptTime;
    @Column(columnDefinition = "boolean default FALSE", nullable = false)
    @Comment("알림확인유무")
    private boolean AlarmChecked;

}
