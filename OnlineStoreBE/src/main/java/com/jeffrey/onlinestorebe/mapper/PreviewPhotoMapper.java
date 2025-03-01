package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.previewPhotoEntity.PreviewPhoto;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface PreviewPhotoMapper {

    @Select("SELECT * FROM preview_photos WHERE good_id = #{good_id}")
    List<PreviewPhoto> selectPreviewPhotoByGoodId(String good_id);

    @Insert("Insert into preview_photo (id,name,good_id) VALUE (#{id},#{name},#{good_id})")
    Boolean insertPreviewPhoto(String id,String name,String good_id);

    @Delete("delete from preview_photo where good_id=#{good_id}")
    Boolean deletePreviewPhoto(String good_id);


}
