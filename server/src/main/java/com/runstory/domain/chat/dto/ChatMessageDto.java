package com.runstory.domain.chat.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ChatMessageDto {
    private MessageType type;
    private String content;
    private String sender;

    public enum MessageType {
        CHAT,
        JOIN,
        LEAVE
    }
}
