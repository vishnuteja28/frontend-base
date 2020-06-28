package com.blackhawk.demo.models;

import lombok.Data;

@Data
public class ProductDetails {

    private String id;
    private String name;
    private String description;
    private Float price;
    private String availability;
    private String imageUrl;
    private String rating;
}
