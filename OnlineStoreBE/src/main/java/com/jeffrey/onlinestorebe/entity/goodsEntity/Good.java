package com.jeffrey.onlinestorebe.entity.goodsEntity;

import com.jeffrey.onlinestorebe.mapper.PreviewPhotoMapper;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class Good {
    String id;
    String title;
    double price;
    String content;
    String photo;
    List<String> previewImage;
}
