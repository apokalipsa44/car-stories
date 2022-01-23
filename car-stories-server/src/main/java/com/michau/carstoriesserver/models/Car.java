package com.michau.carstoriesserver.models;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
public class Car {
    @Id
    private String id;

    private String make;
    private String model;
    private String engine;
    private EngineSpecks engineSpecks;
    private String year;
    private String gearbox;
    private String mileage;
    private PurchaseInfo purchaseInfo;
    private List<CarEvent> carEvents;
}
