package com.zeldaguessr;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Location {
    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String imageFileName;
    private Float xPct;
    private Float yPct;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImageFileName() {
        return imageFileName;
    }

    public void setImageFileName(String imageName) {
        this.imageFileName = imageName;
    }

    public Float getxPct() {
        return xPct;
    }

    public void setxPct(Float xPct) {
        this.xPct = xPct;
    }

    public Float getyPct() {
        return yPct;
    }

    public void setyPct(Float yPct) {
        this.yPct = yPct;
    }
}
