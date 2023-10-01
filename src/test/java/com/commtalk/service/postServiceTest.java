package com.commtalk.service;

import com.commtalk.model.EngagementAction;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.commtalk.CommtalkApplication;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.HashMap;
import java.util.Map;

@SpringBootTest(classes=CommtalkApplication.class)
public class postServiceTest {

	@Autowired
	PostService postService;

	@Test
	public void getPostsByBoard() {
		try {
			Pageable pageable = (Pageable) PageRequest.of(0, 2);
			String jsonStr = postService.getPostsByBoard(1L, 10L, pageable);
			System.out.println(jsonStr);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
	}

	@Test
	public void getPostsByKeyword() {
		try {
			Pageable pageable = (Pageable) PageRequest.of(0, 2);
			String jsonStr = postService.getPostsByBoardAndKeyword("글", 1L, 10L, pageable);
			System.out.println(jsonStr);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
	}

	@Test
	public void getPostById() {
		try {
			String jsonStr = postService.getPostById(1L, 10L);
			System.out.println(jsonStr);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
	}

	@Test
	public void getCommentsByPost() {
		try {
			String jsonStr = postService.getCommentsByPost(1L, 10L);
			System.out.println(jsonStr);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
	}

	@Test
	public void changeEngagementAction() {
		try {
			Map<String, Object> command = new HashMap<>();
			command.put("refId", 1);
			command.put("actionType", "clike");
			Long refId = new Long((Integer) command.get("refId"));
			EngagementAction.ActionType action = EngagementAction.ActionType.valueOf(command.get("actionType").toString());
			String jsonStr = postService.changeEngagementAction(10L, refId, action);
			System.out.println(jsonStr);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
	}

}
