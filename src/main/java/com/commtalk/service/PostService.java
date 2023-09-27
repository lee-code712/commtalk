package com.commtalk.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.commtalk.model.EngagementAction;
import com.commtalk.repository.EngagementActionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.commtalk.dto.PostDTO;
import com.commtalk.dto.PostDetailDTO;
import com.commtalk.model.Attachment;
import com.commtalk.model.Post;
import com.commtalk.model.PostHashtag;
import com.commtalk.repository.AttachmentRepository;
import com.commtalk.repository.PostHashtagRepository;
import com.commtalk.repository.PostRepository;
import com.commtalk.util.JSONFactory;
import com.fasterxml.jackson.core.JsonProcessingException;

@Service
public class PostService {
	
	@Resource
	private PostRepository postRepo;
	@Resource
	private AttachmentRepository attachmentRepo;
	@Resource
	private PostHashtagRepository postHashtagRepo;
	@Resource
	private EngagementActionRepository engagementActionRepo;
	
	// 특정 게시판의 게시글 조회
	public String getPostsByBoard(Long boardId, Long memberId, Pageable pageable) throws JsonProcessingException {
		Map<String, Object> response = new HashMap<String, Object>();
		
		Page<Post> postPages = postRepo.findByBoardOrderByCreatedAt(boardId, pageable);
		response.put("totalPages", postPages.getTotalPages());
		response.put("pageNumber", postPages.getNumber());
		response.put("previous", postPages.previousPageable());
		response.put("next", postPages.nextPageable());
        
        List<PostDTO> postDTOs = new ArrayList<>();
		if (memberId != null) {
			boolean isLiked = false;
			boolean isScraped = false;

			for (Post post : postPages) {
				if (!post.getIsDeleted()) {
					List<EngagementAction> engagementActions = engagementActionRepo.findByMemberIdAndPostId(memberId, post.getId());
					for (EngagementAction engagementAction : engagementActions) {
						if (engagementAction.getAction() == EngagementAction.ActionType.like) {
							isLiked = true;
						}
						else if (engagementAction.getAction() == EngagementAction.ActionType.scrap) {
							isScraped = true;
						}
					}
					postDTOs.add(new PostDTO(post, isLiked, isScraped));
				}
			}
		}
		else {
			for (Post post : postPages) {
				if (!post.getIsDeleted()) {
					postDTOs.add(new PostDTO(post, false, false));
				}
			}
		}
		response.put("posts", postDTOs);

		return JSONFactory.getJSONStringFromMap(response);
	}
	
	// 게시글 상세 조회
	public String getPostById(Long postId) throws JsonProcessingException {

		Post post = postRepo.findById(postId).orElse(null);
		
		if (post != null) {
	        PostDetailDTO postDTO = new PostDetailDTO(post);
	        List<Attachment> attachments = attachmentRepo.findByPostIdOrderByUploadedAtAsc(post.getId());
	        postDTO.setAttachments(attachments);
	        List<PostHashtag> hashtags = postHashtagRepo.findByPostId(post.getId());
	        postDTO.setHashtags(hashtags);
	        
	        return JSONFactory.getJSONStringFromObject(postDTO);
		}
		
		return null;
	}
	
}
