package com.jeffrey.onlinestorebe.controller;

import com.jeffrey.onlinestorebe.utils.Result;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

@RestController
@RequestMapping("/api/files")
public class FileUploadController {

    @Value("${file.upload-dir}")
    private String uploadDir;

    @PostMapping("/upload")
    public Result<Map<String,String>> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
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
        } catch (IOException e) {
            Map<String,String> res = new HashMap<>();
            res.put("err",HttpStatus.INTERNAL_SERVER_ERROR.toString());
            res.put("message",e.getMessage());
            return new Result<Map<String,String>>(400,"发生未知错误",res);
        }
    }
}