-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-06-30 16:14:27
-- 伺服器版本： 10.4.18-MariaDB
-- PHP 版本： 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `test`
--

-- --------------------------------------------------------

--
-- 資料表結構 `store`
--

CREATE TABLE `store` (
  `storeId` int(11) NOT NULL COMMENT '分店編號',
  `storeName` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '分店名稱',
  `phoneNum` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '手機號碼',
  `cityTalk` varchar(13) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '市話',
  `socialMedia` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '社交軟體',
  `address` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '地址',
  `storePhoto` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '照片名稱',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `store`
--

INSERT INTO `store` (`storeId`, `storeName`, `phoneNum`, `cityTalk`, `socialMedia`, `address`, `storePhoto`, `created_at`, `updated_at`) VALUES
(1, '大安店', '0906666265', '(02)2703-6003', '', '台北市大安區通化街28巷2號', NULL, '2021-06-30 22:13:53', '2021-06-30 22:13:53'),
(2, '松山店', '', '(02)2579-8608', '', '台北市松山區八德路三段12巷11號', NULL, '2021-06-30 22:13:53', '2021-06-30 22:13:53');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`storeId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `store`
--
ALTER TABLE `store`
  MODIFY `storeId` int(11) NOT NULL AUTO_INCREMENT COMMENT '分店編號', AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
