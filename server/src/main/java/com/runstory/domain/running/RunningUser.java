package com.runstory.domain.running;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.runstory.domain.user.entity.User;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class RunningUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name= "running_id", foreignKey = @ForeignKey(name="fk_runninguser_to_running"))
    private Running running;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name= "userId", foreignKey = @ForeignKey(name="fk_runninguser_to_user"))
    private User user;
}
