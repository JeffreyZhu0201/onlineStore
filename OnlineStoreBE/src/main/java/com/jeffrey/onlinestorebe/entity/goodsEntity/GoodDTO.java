package com.jeffrey.onlinestorebe.entity.goodsEntity;

import com.jeffrey.onlinestorebe.entity.previewPhotoEntity.PreviewPhoto;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class GoodDTO {
    String id;
    String title;
    double price;
    String content;
    List<String> previewImage;
}
