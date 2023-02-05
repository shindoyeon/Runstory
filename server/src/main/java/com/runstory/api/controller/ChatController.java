package com.runstory.api.controller;

import com.runstory.domain.chat.dto.ChatRoomDto;
import com.runstory.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/chat")
public class ChatController {

    private final ChatService service;

    @PostMapping
    public ChatRoomDto createRoom(@RequestParam String name){
        return service.createRoom(name);
    }

    @GetMapping
    public List<ChatRoomDto> findAllRooms(){
        return service.findAllRoom();
    }
}