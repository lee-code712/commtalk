package com.commtalk.dto;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import com.commtalk.model.Attachment;
import com.commtalk.model.Comment;
import com.commtalk.model.Post;
import com.commtalk.model.PostHashtag;

import lombok.Data;

@Data
public class PostDetailDTO {

	private Long postId;
	private String createdAt;
	private String updatedAt;
	private String title;
	private String content;
	private Long views;
	private Long likes;
	private Long scraps;
	private MemberSimpleDTO author;
	private BoardSimpleDTO board;
	private int commentCnt;
	private List<CommentDTO> comments;
	private List<AttachmentSimpleDTO> attachments;
	private List<PostHashtagSimpleDTO> hashtags;
	private boolean isCommentable;
	private boolean isLiked;
	private boolean isScraped;
	
	public PostDetailDTO(Post post, boolean isLiked, boolean isScraped) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); // 날짜 포맷 지정
		
		this.postId = post.getId();
		this.createdAt = sdf.format(post.getCreatedAt());
		this.updatedAt = sdf.format(post.getUpdatedAt());
		this.title = post.getTitle();
		this.content = post.getContent();
		this.views = post.getViews();
		this.likes = post.getLikes();
		this.scraps = post.getScraps();
		this.author = new MemberSimpleDTO(post.getAuthor());
		if (post.getIsAnonymous()) {
			this.author.setNickname("익명"); // 익명여부를 확인하여 닉네임을 익명으로 변경
		}
		this.board = new BoardSimpleDTO(post.getBoard());
		this.commentCnt = 0;
		this.comments = new ArrayList<>();
		this.attachments = new ArrayList<>();
		this.hashtags = new ArrayList<>();
		this.isCommentable = post.getIsCommentable();
		this.isLiked = isLiked;
		this.isScraped = isScraped;
	}

	public void setComments(List<CommentDTO> comments) {
		this.commentCnt = comments.size();
		for (CommentDTO comment : comments) {
			this.commentCnt += comment.getChildCnt();
		}
		this.comments = comments;
	}
	
	public void setAttachments(List<Attachment> attachments) {
		for (Attachment attachment : attachments) {
			this.attachments.add(new AttachmentSimpleDTO(attachment));
		}
	}
	
	public void setHashtags(List<PostHashtag> hashtags) {
		for (PostHashtag hashtag : hashtags) {
			this.hashtags.add(new PostHashtagSimpleDTO(hashtag));
		}
	}
	
}
