package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.previewPhotoEntity.PreviewPhoto;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface PreviewPhotoMapper {

    @Select("SELECT * FROM preview_photos WHERE goodi_id = #{good_id}")
    PreviewPhoto selectPreviewPhotoById(String good_id);

    @Insert("Insert into preview_photo (id,name,good_id) VALUE (#{id},#{name},#{good_id})")
    Boolean insertPreviewPhoto(String id,String name,String good_id);

}
