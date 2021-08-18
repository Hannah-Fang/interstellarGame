-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-07-21 12:32:29
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
-- 資料表結構 `members`
--

CREATE TABLE `members` (
  `userId` int(11) NOT NULL COMMENT '會員編號',
  `userEmail` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員電子郵件',
  `userPwd` char(40) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員密碼',
  `userName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員姓名',
  `userNickname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員暱稱',
  `userGender` char(1) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員性別',
  `userPhone` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員手機號碼',
  `userImg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員大頭貼',
  `userBirthday` date NOT NULL COMMENT '會員出生年月日',
  `userAddress` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員住址',
  `userBIN` int(11) NOT NULL COMMENT '會員信用卡號',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `members`
--

INSERT INTO `members` (`userId`, `userEmail`, `userPwd`, `userName`, `userNickname`, `userGender`, `userPhone`, `userImg`, `userBirthday`, `userAddress`, `userBIN`, `created_at`, `updated_at`) VALUES
(1, 'test000@gmail.com', '12345', '林志財', '財哥', '男', '0956701197', 'https://imgur.com/d8DfRrZ.jpg', '2001-04-11', '台北市信義區虎林街119號', 0, '2021-07-03 20:26:38', '2021-07-03 20:26:38'),
(2, 'bobo567@gmail.com', '12345', '林靜利', '小靜', '女', '0912539668', 'https://imgur.com/1910uUS.jpg', '2000-12-12', '雲林縣斗六市北平路272號', 0, '2021-07-03 20:30:20', '2021-07-03 20:30:20'),
(3, 'apple0918@gmail.com', '12345', '張佩璇', '佩璇', '女', '0928474076', 'https://imgur.com/FLvG67h.jpg', '1995-08-06', '新北市土城區中央路三段254號', 0, '2021-07-03 20:32:10', '2021-07-03 20:32:10'),
(4, 'panda@gmail.com', '12345', '雷胖達', 'panda', '男', '0988638961', 'https://imgur.com/aoU3gi3.jpg', '1899-11-29', '宜蘭縣羅東鎮興東路228號', 0, '2021-07-21 12:23:24', '2021-07-21 12:23:24');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`userId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `members`
--
ALTER TABLE `members`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT COMMENT '會員編號', AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
