package com.michau.carstoriesserver.models;

import lombok.Data;

import java.util.List;

@Data
public class GarageEvent {

    private String eventDate;
    private String currentMileage;
    private LabourDone labourDone;
    private List<ReplacedPart> parts;


}
