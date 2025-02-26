package com.jeffrey.onlinestorebe.controller;

import com.jeffrey.onlinestorebe.service.FileUploadService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/files")
public class FileUploadController {

    @Resource
    FileUploadService fileUploadService;

    @Value("${file.upload-dir}")
    private String uploadDir;

    @PostMapping("/upload")
    public Result<Map<String,String>> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            if(file.getSize() > 10*1024*1024){
                return new Result<Map<String,String>>(400,"文件体积不得大于10M",null);
            }
            return fileUploadService.commonUpload(file,uploadDir);
        } catch (IOException e) {
            Map<String,String> res = new HashMap<>();
            res.put("err",HttpStatus.INTERNAL_SERVER_ERROR.toString());
            res.put("message",e.getMessage());
            return new Result<Map<String,String>>(400,"发生未知错误",res);
        }
    }
}