package com.runstory.domain.runningtable;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Entity
@Data
public class RunningDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long runningId;
    private int GenderType;
    private int man;
    private int women;
    private int total;
    private int MinAge;
    private int MaxAge;
    private boolean HasDog;
}
