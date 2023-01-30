package com.runstory.service;

import com.runstory.api.request.UserFindDto;
import com.runstory.api.request.UserRegisterPostReq;
import com.runstory.api.response.UserInfoDto;
import com.runstory.domain.user.entity.User;
import org.springframework.web.multipart.MultipartFile;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface UserService {
	User createUser(UserRegisterPostReq userRegisterInfo);
	User getUserByUserId(String userId);
	UserInfoDto getUserInfoByUserId(String userId);
	User getUserByUserNickname(String userId);
	boolean isTokenSaved(String userId, String token);
	User findId(UserFindDto userFindDto);
	User findPwd(UserFindDto userFindDto);
	void changePwd(String userId, String pwd);
	void deleteUser(String userId);
	void changeUserInfo(String type, String userId,String value);
	void changeUserImage(boolean isRegistered, String userId, MultipartFile image);
}
