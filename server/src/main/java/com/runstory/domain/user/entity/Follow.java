package com.runstory.domain.user.entity;

import lombok.Data;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Data
@DynamicInsert
public class Follow {

    @Id
    @GeneratedValue
    private Long followId;
    @Comment("팔로워")
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="from_user_id", foreignKey = @ForeignKey(name="fk_from_user_id_follow_user"))
    private User from;
    @Comment("팔로잉")
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="to_user_id", foreignKey = @ForeignKey(name="fk_to_user_id_follow_user"))
    private User to;
}
