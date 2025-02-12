CREATE TABLE `users` (
                         `id` int NOT NULL AUTO_INCREMENT COMMENT '用户主键ID',
                         `open_id` varchar(255) NOT NULL COMMENT 'openId 微信用户唯一标识',
                         `phone` varchar(255) COMMENT '手机号',
                         `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '微信用户' COMMENT '用户名',
                         `avatar_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132' COMMENT '用户头像',
                         `create_time` datetime NOT NULL COMMENT '用户创建时间',
                         PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci