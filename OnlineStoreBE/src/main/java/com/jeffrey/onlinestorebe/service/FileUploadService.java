package com.jeffrey.onlinestorebe.service;

import com.jeffrey.onlinestorebe.utils.Result;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class FileUploadService {

    public Result<Map<String,String>> commonUpload(MultipartFile file,String uploadDir) throws IOException {
        // Create the directory if it doesn't exist
        File directory = new File(uploadDir);
        if (!directory.exists()) {
            directory.mkdirs();
        }
        String originalFileName = file.getOriginalFilename();
        assert originalFileName != null;
        String fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
        String newFileName = UUID.randomUUID().toString() + fileExtension;

        // Save the file file.getOriginalFilename()
        Path filePath = Paths.get(uploadDir, newFileName);
        Files.write(filePath, file.getBytes());
        // Create file download URI
//            URIString fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
//                    .path("/uploads/")
//                    .path(Objects.requireNonNull(newFileName))
//                    .toUriString();

        Map<String,String> res = new HashMap<>();
        res.put("fileName",newFileName);
        return new Result<Map<String,String>>(200,"文件上传成功",res);
    }


}
