package com.runstory.domain.notificationtable;


import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;
import org.hibernate.annotations.Comment;

@Entity
@Data
public class Notification{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Comment("알림 아이디")
    private long AlarmId;
    @Comment("알림 듣는사람아이디")
    private String AlarmListenId;
    @Comment("알림 보내는사람 아이디")
    private String AlarmSendId;
    @Comment("알림종류")
    private int AlarmType;
    @Comment("알림피드아이디")
    private String AlarmFeedId;
    @Comment("알림내용")
    private String AlarmContent;
    @Comment("알림발생시간")
    private LocalDateTime AlarmTime;
    @Comment("알림확인시간")
    private LocalDateTime AlarmAcceptTime;
    @Comment("알림확인유무")
    private boolean AlarmChecked;

}
