package com.runstory.domain.running;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.runstory.domain.user.entity.User;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class RunningUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name= "running_id")
    private Running running;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name= "userId")
    private User user;

    public RunningUser(Running running, User user){
        this.running = running;
        this.user = user;
    }
}
