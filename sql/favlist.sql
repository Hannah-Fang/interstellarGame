-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-07-21 12:32:39
-- 伺服器版本： 10.4.20-MariaDB
-- PHP 版本： 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `interstellargame`
--

-- --------------------------------------------------------

--
-- 資料表結構 `favlist`
--

CREATE TABLE `favlist` (
  `favId` int(11) NOT NULL COMMENT '最愛編號',
  `userId` int(11) NOT NULL COMMENT '會員編號',
  `itemId` int(11) NOT NULL COMMENT '商品編號',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `favlist`
--

INSERT INTO `favlist` (`favId`, `userId`, `itemId`, `created_at`, `updated_at`) VALUES
(1, 3, 2, '2021-07-04 01:09:29', '2021-07-04 01:09:29'),
(2, 3, 4, '2021-07-04 01:09:50', '2021-07-04 01:09:50'),
(3, 3, 20, '2021-07-04 01:09:50', '2021-07-04 01:09:50'),
(4, 4, 5, '2021-07-21 13:51:23', '2021-07-21 13:51:23'),
(5, 4, 5, '2021-07-21 13:51:34', '2021-07-21 13:51:34'),
(6, 4, 10, '2021-07-21 13:51:34', '2021-07-21 13:51:34'),
(7, 4, 8, '2021-07-21 13:51:43', '2021-07-21 13:51:43'),
(8, 4, 1, '2021-07-21 13:51:43', '2021-07-21 13:51:43');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `favlist`
--
ALTER TABLE `favlist`
  ADD PRIMARY KEY (`favId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `favlist`
--
ALTER TABLE `favlist`
  MODIFY `favId` int(11) NOT NULL AUTO_INCREMENT COMMENT '最愛編號', AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
