package com.runstory.api.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.runstory.domain.hashtag.dto.HashtagDto;
import com.runstory.domain.hashtag.dto.SelectedHashtagDto;
import com.runstory.domain.hashtag.entity.SelectedHashtag;
import com.runstory.domain.running.*;
import com.runstory.domain.running.dto.RunningBoardCommentDto;
import com.runstory.domain.running.dto.RunningDibsDto;
import com.runstory.domain.running.dto.RunningDto;
import com.runstory.domain.running.dto.RunningUserDto;
import com.runstory.domain.user.dto.UserDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class RunningDetailSumDto {
    private Long id;
    private Long userId; // 현재 로그인중인 userId
    private String imgFilePath;
    private String imgFileName;
    private String crewName;
    private String runningContent;
    private String startLocation;
    private String endLocation;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime startTime;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime endTime;
    private float startLongitude;
    private float startLatitude;
    private float endLongitude;
    private float endLatitude;
    private float distance;

    // runningDetail에 대한 dto
    private GenderType genderType;
    private int man;
    private int women;
    private int total;
    private int minAge;
    private int maxAge;
    private boolean hasDog;

    private List<SelectedHashtagDto> selectedHashtags = new ArrayList<>(); // 해시태그
    private List<RunningBoardCommentDto> runningboardcomments = new ArrayList<>(); // 댓글
    private List<RunningUserDto> runningusers = new ArrayList<>(); // 참여 인원

    // 해당 사람이 작성자인지 달리는 사람인지를 확인
    private boolean isCreater;
    private boolean isRunner;
    private boolean isDibs;


    public RunningDetailSumDto(Running running, RunningDetail runningDetail, Long userseq){
        this.id = running.getRunningId();
        this.userId = running.getUser().getUserSeq();
        this.imgFilePath = running.getImgFilePath();
        this.imgFileName = running.getImgFileName();
        this.crewName = running.getCrewName();
        this.runningContent = running.getRunningContent();
        this.startLocation = running.getStartLocation();
        this.endLocation = running.getEndLocation();
        this.startTime = running.getStartTime();
        this.endTime = running.getEndTime();
        this.startLongitude = running.getStartLongitude();
        this.startLatitude = running.getStartLatitude();
        this.endLongitude = running.getEndLongitude();
        this.endLatitude = running.getEndLatitude();
        this.distance = running.getDistance();
        this.genderType = runningDetail.getGenderType();
        this.man = runningDetail.getMan();
        this.women = runningDetail.getWomen();
        this.total = runningDetail.getTotal();
        this.minAge = runningDetail.getMinAge();
        this.maxAge = runningDetail.getMaxAge();
        this.hasDog = runningDetail.isHasDog();
        this.isCreater = false;
        this.isRunner = false;
        this.isDibs = false;

        // 생성자인지를 확인하는 방법
        if (running.getUser().getUserSeq().equals(userseq)){
            this.isCreater = true;
        }else{
            this.isCreater = false;
        }

        for (SelectedHashtag selectedHashtag : running.getSelectedHashtags()){
            SelectedHashtagDto selectedHashtagDto = new SelectedHashtagDto(selectedHashtag);
            selectedHashtags.add(selectedHashtagDto);
        }
        // 댓글 기능
        for (RunningBoardComment comment : running.getRunningboardcomments()){
            String userid = comment.getUser().getUserId();
            RunningBoardCommentDto runningBoardCommentDto = RunningBoardCommentDto.builder()
                    .userId(userid)
                    .content(comment.getContent())
                    .regdate(comment.getRegdate())
                    .build();
            runningboardcomments.add(runningBoardCommentDto);
        }
        // 참가인원
        for (RunningUser user : running.getRunningusers()){
            RunningUserDto runningUserDto = RunningUserDto.builder()
                    .userId(user.getId())
                    .build();
            runningusers.add(runningUserDto);
            if (userseq.equals(user.getUser().getUserSeq())){
                this.isRunner = true;
            }
        }
        // 찜했는지를 확인하는 기능
        for (RunningDibs dibs : running.getRunningDibs()){
            if (userseq.equals(dibs.getUser().getUserSeq())){
                this.isDibs = true;
                break;
            }
        }

    }
}
