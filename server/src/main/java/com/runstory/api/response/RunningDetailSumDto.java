package com.runstory.api.response;

import com.runstory.domain.hashtag.dto.HashtagDto;
import com.runstory.domain.hashtag.dto.SelectedHashtagDto;
import com.runstory.domain.hashtag.entity.SelectedHashtag;
import com.runstory.domain.running.*;
import com.runstory.domain.running.dto.RunningBoardCommentDto;
import com.runstory.domain.running.dto.RunningDto;
import com.runstory.domain.running.dto.RunningUserDto;
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
    private String imgPathFile;
    private String imgFileName;
    private String crewName;
    private String runningContent;
    private String startLocation;
    private String endLocation;
    private LocalDateTime startTime;
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


    public RunningDetailSumDto(Running running, RunningDetail runningDetail){
        this.id = running.getRunningId();
        this.userId = running.getUser().getUserSeq();
        this.imgPathFile = running.getImgFilePath();
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

        for (SelectedHashtag selectedHashtag : running.getSelectedHashtags()){
            SelectedHashtagDto selectedHashtagDto = new SelectedHashtagDto(selectedHashtag);
            selectedHashtags.add(selectedHashtagDto);
        }
        // 댓글 기능
        for (RunningBoardComment comment : running.getRunningboardcomments()){
            RunningBoardCommentDto runningBoardCommentDto = RunningBoardCommentDto.builder()
                    .content(comment.getContent())
                    .regdate(comment.getRegdate())
                    .updatedate(comment.getUpdatedate())
                    .build();
            runningboardcomments.add(runningBoardCommentDto);
        }
        // 참가인원
        for (RunningUser user : running.getRunningusers()){
            RunningUserDto runningUserDto = RunningUserDto.builder()
                    .userId(user.getId())
                    .build();
            runningusers.add(runningUserDto);
        }
    }
}
