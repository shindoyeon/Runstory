package com.runstory.api.controller;

import com.runstory.domain.chat.MessageType;
import com.runstory.domain.chat.dto.ChatMessageDto;
import java.util.ArrayList;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Controller
@Slf4j
public class ChatController {

    @Autowired
    private SimpMessageSendingOperations messagingTemplate;

    ArrayList<String> users = new ArrayList<String>();

    // 새로운 사용자가 웹 소켓을 연결할 때 실행됨
    // @EventListener은 한개의 매개변수만 가질 수 있다.
    @EventListener
    public void handleWebSocketConnecListener(SessionConnectEvent event) {
        log.info("Received a new web socket connection");
    }

    // 사용자가 웹 소켓 연결을 끊으면 실행됨
    @EventListener
    public void handleWebSocketDisconnectListener(SessionDisconnectEvent event) {
        StompHeaderAccessor headerAccesor = StompHeaderAccessor.wrap(event.getMessage());
        String username = (String) headerAccesor.getSessionAttributes().get("username");

        if(username != null) {
            log.info("User Disconnected : " + username);

            users.remove(username);
            System.out.println(users);

            ChatMessageDto chat = new ChatMessageDto(MessageType.LEAVE, null, username);
            messagingTemplate.convertAndSend("/roomname/public", chat);
        }
    }

    // /message/sendMessage로 요청이 들어오면 해당 메소드로 처리된다.
    @MessageMapping("/sendMessage")
    @SendTo("/roomname/public")
    public ChatMessageDto sendMessage(@Payload ChatMessageDto chat) {
        return chat;
    }

    // /message/addUser로 요청이 들어오면 해당 메소드로 처리된다.
    @MessageMapping("/addUser")
    @SendTo("/roomname/public")
    public ChatMessageDto addUser(@Payload ChatMessageDto chat, SimpMessageHeaderAccessor headerAccessor) {
        headerAccessor.getSessionAttributes().put("username", chat.getSender());
        users.add(chat.getSender());
        return chat;
    }
}
