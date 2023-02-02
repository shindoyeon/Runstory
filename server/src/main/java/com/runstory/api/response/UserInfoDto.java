package com.runstory.api.response;

import com.runstory.domain.chat.ChatRoomUser;
import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.running.RunningUser;
import com.runstory.domain.user.RegType;
import com.runstory.domain.user.RoleType;
import com.runstory.domain.user.entity.User;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Comment;

@Getter
@Setter
public class UserInfoDto {
    public UserInfoDto(User user){
        this.userId = user.getUserId();
        this.userPwd = user.getUserPwd();
        this.userName = user.getUserName();
        this.userNickname = user.getUserNickname();
        this.emailAuth = user.getEmailAuth();
        this.phoneNum = user.getPhoneNum();
        this.gender = user.getGender();
        this.address = user.getAddress();
        this.age = user.getAge();
        this.roleType = user.getRoleType();
        this.level = user.getLevel();
        this.experience = user.getExperience();
        this.profileImgFilePath = user.getProfileImgFilePath();
        this.profileImgFileName = user.getProfileImgFileName();
        this.regType = user.getRegType();
    }
    private String userId;
    private String userPwd;
    private  String userName;
    private String userNickname;
    private Boolean emailAuth;
    private String phoneNum;
    private int gender;
    private String address;
    private int age;
    private RoleType roleType;
    private int level;
    private int experience;
    private String profileImgFilePath;
    private String profileImgFileName;
    private RegType regType;
}
