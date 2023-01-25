package com.runstory.domain.chat;

import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;
import javax.print.attribute.standard.MediaSize.NA;
import lombok.Data;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Data
@DynamicInsert
public class ChatMessage {
    @Comment("채팅 방 메시지 아이디")
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ChatMessageId;

    @Comment("관련 채팅 방")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chat_room_id", foreignKey = @ForeignKey(name="fk_chat_room_id_chat_room_chat_room_id"))
    private ChatRoom chatRoom;

    @Comment("사용자 아이디")
    @Column(nullable = false)
    private Long userId;

    @Comment("메시지 내용")
    @Column(length = 100)
    private String content;

    @Comment("등록일자")
    @Column(columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP", nullable = false)
    private LocalDateTime regdate;
}
