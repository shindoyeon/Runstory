package com.runstory.service;

import com.runstory.api.request.UserFindDto;
import com.runstory.api.request.UserRegisterPostReq;
import com.runstory.domain.hashtag.HashtagType;
import com.runstory.domain.hashtag.entity.Hashtag;
import com.runstory.domain.hashtag.entity.SelectedHashtag;
import com.runstory.domain.user.dto.UserDto;
import com.runstory.domain.user.entity.User;
import com.runstory.repository.HashtagRepository;
import com.runstory.repository.SelectedHashtagRepository;
import com.runstory.repository.UserRepository;
import java.io.File;
import java.io.IOException;
import java.net.InetAddress;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
 */
@Service("userService")
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {

	@Autowired UserRepository userRepository;
	@Autowired PasswordEncoder passwordEncoder;
	@Autowired HashtagRepository hashtagRepository;
	@Autowired SelectedHashtagRepository selectedHashtagRepository;

	@Override
	@Transactional
	public User createUser(UserRegisterPostReq userRegisterInfo) {
		//이미 회원가입 한 회원인지 체크하기
		User user = userRepository.findByUserId(userRegisterInfo.getUserId());
		if(user != null){
			return null;
		}

		user = new User();
		user.setUserId(userRegisterInfo.getUserId());
		//보안을 위해서 유저 패스워드 암호화 하여 디비에 저장.
		user.setUserPwd(passwordEncoder.encode(userRegisterInfo.getUserPwd()));
		user.setUserName(userRegisterInfo.getUserName());
		user.setUserNickname(userRegisterInfo.getUserNickname());
		user.setEmailAuth(userRegisterInfo.isEmailAuth());
		user.setPhoneNum(userRegisterInfo.getPhoneNum());
		user.setGender(userRegisterInfo.getGender());
		user.setAddress(userRegisterInfo.getAddress());
		user.setAge(userRegisterInfo.getAge());
		user.setRoleType(userRegisterInfo.getRoleType());
		user.setRegType(userRegisterInfo.getRegType());
		userRepository.save(user);
		List<Long> list = userRegisterInfo.getHashtags();
		for (Long hashtagId : list) {
			Hashtag hashtag = hashtagRepository.findHashtagByHashtagId(hashtagId);
			SelectedHashtag selectedHashtag = new SelectedHashtag();

			selectedHashtag.setHashtag(hashtag);
			selectedHashtag.setUser(user);
			selectedHashtag.setHashtagType(HashtagType.valueOf("USER"));
			selectedHashtagRepository.save(selectedHashtag);
		}
		return user;
	}

	@Override
	public User getUserByUserId(String userId) {
		// 디비에 유저 정보 조회 (userId 를 통한 조회).
		User user = userRepository.findByUserId(userId);
//		User user = userRepositorySupport.findUserByUserId(userId).get();
		return user;
	}

	@Override
	public User getUserProfileByUserSeq(Long userSeq) {
		User user = userRepository.findByUserSeq(userSeq);
		return user;
	}

	@Override
	public UserDto getUserInfoByUserId(String userId) {
		User user = userRepository.findByUserId(userId);
		UserDto userDto = new UserDto(user);
		return userDto;
	}

	@Override
	public User getUserByUserNickname(String userNickname) {
		User user = userRepository.findByUserNickname(userNickname);
		return user;
	}

	@Override
	@Transactional
	public boolean isTokenSaved(String userId, String token) {
		User user = userRepository.findByUserId(userId);
		user.setToken(token);
		try {
			userRepository.save(user);
			return true;
		}catch (Exception e){
			return false;
		}
	}

	@Override
	public User findId(UserFindDto userFindDto) {
		User user = userRepository.findByUserName(userFindDto.getUserName());
		if(userFindDto.getPhoneNum().equals(user.getPhoneNum()))
			return user;
		return null;
	}

	@Override
	public User findPwd(UserFindDto userFindDto) {
		User user = userRepository.findByUserId(userFindDto.getUserId());
		if(userFindDto.getUserName().equals(user.getUserName()))
			return user;
		return null;
	}

	@Override
	public void changePwd(String userId, String pwd) {
		//보안을 위해서 유저 패스워드 암호화 하여 디비에 저장.
		User user = userRepository.findByUserId(userId);
		if(user!=null){
			user.setUserPwd(passwordEncoder.encode(pwd));
			userRepository.save(user);
		}
	}

	@Override
	@Transactional
	public void deleteUser(String userId) {
		//기존 해시태그 삭제
		User user = userRepository.findByUserId(userId);
		selectedHashtagRepository.deleteSelectedHashtagByUserId(user.getUserSeq());

		userRepository.deleteUserByUserId(userId);
	}

	@Override
	public void changeUserInfo(String type, String userId, String value) {
		User user = userRepository.findByUserId(userId);
		if("nickname".equals(type)){
			//닉네임 중복 체크하는 부분
			User duplicatedUser = userRepository.findByUserNickname(value);
			if(duplicatedUser == null){
				user.setUserNickname(value);
			}else{
				System.out.println("중복됨");
			}
		}else if("address".equals(type)){
			user.setAddress(value);
		}
		userRepository.save(user);
	}

	@Override
	@Transactional
	public void changeUserImage(boolean isRegistered, String userId, MultipartFile image) throws Exception{
		User user = userRepository.findByUserId(userId);
		// 수정하는 경우 기존 파일 삭제
		if (!isRegistered) {
			File file = new File(user.getProfileImgFilePath());
			boolean result = file.delete();
			System.out.println("파일 삭제 결과 : "+result);
		}

		String hostname = InetAddress.getLocalHost().getHostName();

		//서버에 파일 저장
		String imageFileName = image.getOriginalFilename();
		String path="";
		if(hostname.substring(0,7).equals("DESKTOP")){
			path = "C:/runTogether/uploads/user/"+ UUID.randomUUID()+imageFileName;
		}else{
			path = "/home/ubuntu/runstory/uploads/client/runtogether/public/user/"+ UUID.randomUUID()+imageFileName;
		}

		File file = new File(path);
		if(!file.getParentFile().exists())
			file.getParentFile().mkdir();

		Path imagePath = Paths.get(path);
		try {
			Files.write(imagePath, image.getBytes());
		} catch (IOException e) {
			throw new RuntimeException(e);
		}

		// DB 변경
		user.setProfileImgFilePath(path);
		user.setProfileImgFileName(imageFileName);
		userRepository.save(user);
	}
	@Override
	@Transactional
	public void changeUserHashtage(String userId, List<Long> list) {
		User user = userRepository.findByUserId(userId);

		//기존 해시태그 삭제
		selectedHashtagRepository.deleteSelectedHashtagByUserId(user.getUserSeq());

		// 새로운 해시태그 추가
		for(Long hashtagId : list){
			Hashtag hashtag = hashtagRepository.findHashtagByHashtagId(hashtagId);
			SelectedHashtag selectedHashtag = new SelectedHashtag();

			selectedHashtag.setHashtag(hashtag);
			selectedHashtag.setUser(user);
			selectedHashtag.setHashtagType(HashtagType.valueOf("USER"));
			selectedHashtagRepository.save(selectedHashtag);
		}
	}

	@Override
	public String getToken(String userId) {
		User user = userRepository.findByUserId(userId);
		return user.getToken();
	}
}
