package com.runstory.api.controller;

import com.runstory.api.request.UserFindDto;
import com.runstory.api.request.UserRegisterPostReq;
import com.runstory.api.response.UserInfoDto;
import com.runstory.api.response.UserResDto;
import com.runstory.common.auth.SsafyUserDetails;
import com.runstory.common.model.response.BaseResponseBody;
import com.runstory.domain.user.entity.User;
import com.runstory.service.AuthService;
import com.runstory.service.UserService;
//import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import javax.websocket.server.PathParam;
import javax.xml.transform.Source;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

/**
 * 유저 관련 API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "유저 API", tags = {"User"})
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService userService;

	@Autowired
	AuthService authService;
	
	@PostMapping(value = "/signup",consumes = {"multipart/form-data"})
	@ApiOperation(value = "회원 가입", notes = "<strong>아이디와 패스워드</strong>를 통해 회원가입 한다.")
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> register(
			UserRegisterPostReq registerInfo) { //@ApiParam(value="회원가입 정보", required = true)
		System.out.println("회원가입 : "+registerInfo.getUserId());
		//임의로 리턴된 User 인스턴스. 현재 코드는 회원 가입 성공 여부만 판단하기 때문에 굳이 Insert 된 유저 정보를 응답하지 않음.
		User user = userService.createUser(registerInfo);
		// 프로필 사진 변경
		userService.changeUserImage(true,user.getUserId(),registerInfo.getProfileImg());
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}

	@GetMapping()
	@ApiOperation(value = "회원 본인 정보 조회", notes = "로그인한 회원 본인의 정보를 응답한다.")
	@ApiResponses({
		@ApiResponse(code = 200, message = "성공"),
		@ApiResponse(code = 401, message = "인증 실패"),
		@ApiResponse(code = 404, message = "사용자 없음"),
		@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<?> getUserInfo(@ApiIgnore Authentication authentication) {
		/**
		 * 요청 헤더 액세스 토큰이 포함된 경우에만 실행되는 인증 처리이후, 리턴되는 인증 정보 객체(authentication) 통해서 요청한 유저 식별.
		 * 액세스 토큰이 없이 요청하는 경우, 403 에러({"error": "Forbidden", "message": "Access Denied"}) 발생.
		 */
		SsafyUserDetails userDetails = (SsafyUserDetails) authentication.getDetails();
		System.out.println(userDetails);
		String userId = userDetails.getUsername();
		UserInfoDto user = userService.getUserInfoByUserId(userId);

		if(user!= null){
			return ResponseEntity.status(200).body(user);
		}
		return ResponseEntity.status(404).body(BaseResponseBody.of(404, "일치한 회원이 없습니다."));
	}

	@DeleteMapping()
	@ApiOperation(value = "회원 탈퇴", notes = "해당 회원의 정보를 삭제한다.")
	@ApiResponses({
		@ApiResponse(code = 200, message = "성공"),
		@ApiResponse(code = 401, message = "인증 실패"),
		@ApiResponse(code = 404, message = "사용자 없음"),
		@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<?> deleteUser(@ApiIgnore Authentication authentication) {
		/**
		 * 요청 헤더 액세스 토큰이 포함된 경우에만 실행되는 인증 처리이후, 리턴되는 인증 정보 객체(authentication) 통해서 요청한 유저 식별.
		 * 액세스 토큰이 없이 요청하는 경우, 403 에러({"error": "Forbidden", "message": "Access Denied"}) 발생.
		 */
		SsafyUserDetails userDetails = (SsafyUserDetails) authentication.getDetails();
		String userId = userDetails.getUsername();
		userService.deleteUser(userId);
		User user = userService.getUserByUserId(userId);
		if(user == null){
			return ResponseEntity.status(200).body(BaseResponseBody.of(200, "회원 탈퇴 성공"));
		}
		return ResponseEntity.status(404).body(BaseResponseBody.of(404, "회원 탈퇴 실패."));
	}

	@GetMapping("/nickname/{nickname}")
	@ApiOperation(value = "닉네임 중복 체크", notes = "변경할 닉네임 중복 체크")
	@ApiResponses({
		@ApiResponse(code = 200, message = "성공"),
		@ApiResponse(code = 401, message = "인증 실패"),
		@ApiResponse(code = 404, message = "사용자 없음"),
		@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<? extends BaseResponseBody> checkNickname(
		@PathVariable String nickname) { //@ApiParam(value="회원가입 정보", required = true)
		System.out.println("닉네임 : "+nickname);
		User user = userService.getUserByUserNickname(nickname);
		if(user == null){
			return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
		}else{
			return ResponseEntity.status(200).body(BaseResponseBody.of(404, "중복된 닉네임 입니다."));
		}
	}
	
	@PostMapping("/find/id")
	@ApiOperation(value = "아이디 찾기", notes = "회원 이름과 전화번호를 입력하는 경우 아이디를 반환해준다.")
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<?> findId(@RequestBody UserFindDto userFindDto) {

		User user = userService.findId(userFindDto);
		if(user != null)
			return ResponseEntity.status(200).body(user.getUserId());

		return ResponseEntity.status(404).body(BaseResponseBody.of(404,"일치하지 않는 정보입니다."));
	}

	@PostMapping("/find/pwd")
	@ApiOperation(value = "비밀번호 찾기", notes = "회원 이름과 아이디를 입력하는 경우 아이디를 반환해준다.")
	@ApiResponses({
		@ApiResponse(code = 200, message = "성공"),
		@ApiResponse(code = 401, message = "인증 실패"),
		@ApiResponse(code = 404, message = "사용자 없음"),
		@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<?> findPwd(@RequestBody UserFindDto userFindDto) {

		User user = userService.findPwd(userFindDto);
		if(user != null){
			// 이메일 인증 코드 전송
			try {
				String id = user.getUserId();
				String confirm = authService.sendSimpleMessage(id);
				userService.changePwd(id,confirm);
				return ResponseEntity.ok(BaseResponseBody.of(200,"성공"));
			} catch (Exception e) {
				return ResponseEntity.ok(BaseResponseBody.of(500, "BAD REQUEST"));
			}
		}
		return ResponseEntity.status(404).body(BaseResponseBody.of(404,"일치하지 않는 정보입니다."));
	}

	@PutMapping("/nickname")
	@ApiOperation(value = "닉네임 변경", notes = "회원의 닉네임을 변경 해준다.")
	@ApiResponses({
		@ApiResponse(code = 200, message = "성공"),
		@ApiResponse(code = 401, message = "인증 실패"),
		@ApiResponse(code = 404, message = "사용자 없음"),
		@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<?> changeNickname(@ApiIgnore Authentication authentication, @RequestBody UserRegisterPostReq userRegisterPostReq) {
		SsafyUserDetails userDetails = (SsafyUserDetails) authentication.getDetails();
		String userId = userDetails.getUsername();

		userService.changeUserInfo("nickname", userId,userRegisterPostReq.getUserNickname());

		return ResponseEntity.ok(BaseResponseBody.of(200,"성공"));
	}

	@PutMapping("/pwd")
	@ApiOperation(value = "비밀번호 변경", notes = "회원의 닉네임 변경")
	@ApiResponses({
		@ApiResponse(code = 200, message = "성공"),
		@ApiResponse(code = 401, message = "인증 실패"),
		@ApiResponse(code = 404, message = "사용자 없음"),
		@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<?> changePwd(@ApiIgnore Authentication authentication, @RequestBody UserRegisterPostReq userRegisterPostReq) {
		SsafyUserDetails userDetails = (SsafyUserDetails) authentication.getDetails();
		String userId = userDetails.getUsername();
		String newPwd = userRegisterPostReq.getUserPwd();
		userService.changePwd(userId,newPwd);
		return ResponseEntity.ok(BaseResponseBody.of(200,"성공"));
	}

	@PutMapping("/address")
	@ApiOperation(value = "주소 변경", notes = "회원의 주소 변경")
	@ApiResponses({
		@ApiResponse(code = 200, message = "성공"),
		@ApiResponse(code = 401, message = "인증 실패"),
		@ApiResponse(code = 404, message = "사용자 없음"),
		@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<?> changeAddress(@ApiIgnore Authentication authentication, @RequestBody UserRegisterPostReq userRegisterPostReq) {
		SsafyUserDetails userDetails = (SsafyUserDetails) authentication.getDetails();
		String userId = userDetails.getUsername();

		userService.changeUserInfo("hashtag", userId,userRegisterPostReq.getAddress());

		return ResponseEntity.ok(BaseResponseBody.of(200,"성공"));
	}

	@PutMapping("/hashtag")
	@ApiOperation(value = "주소 변경", notes = "회원의 주소 변경")
	@ApiResponses({
		@ApiResponse(code = 200, message = "성공"),
		@ApiResponse(code = 401, message = "인증 실패"),
		@ApiResponse(code = 404, message = "사용자 없음"),
		@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<?> changeHashtags(@ApiIgnore Authentication authentication, @RequestBody UserRegisterPostReq userRegisterPostReq) {
		SsafyUserDetails userDetails = (SsafyUserDetails) authentication.getDetails();
		String userId = userDetails.getUsername();

		List<String> list = userRegisterPostReq.getHashtags();
		for(String str : list){
			System.out.println("컨트롤러  :"+str);
		}

		userService.changeUserHashtage(userId,userRegisterPostReq.getHashtags());

		return ResponseEntity.ok(BaseResponseBody.of(200,"성공"));
	}
	@PutMapping("/profileimg")
	@ApiOperation(value = "프로필 이미지 변경", notes = "회원의 프로필 이미지 변경")
	@ApiResponses({
		@ApiResponse(code = 200, message = "성공"),
		@ApiResponse(code = 401, message = "인증 실패"),
		@ApiResponse(code = 404, message = "사용자 없음"),
		@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<?> changeProfileImg(@ApiIgnore Authentication authentication, @RequestBody MultipartFile image) {
		SsafyUserDetails userDetails = (SsafyUserDetails) authentication.getDetails();
		String userId = userDetails.getUsername();

		try {
			userService.changeUserImage(false,userId,image);
		}catch (Exception e){
			System.out.println("에러 : "+e);
		}

		return ResponseEntity.ok(BaseResponseBody.of(200,"성공"));
	}
}
