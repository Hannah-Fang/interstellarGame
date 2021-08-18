-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-07-21 17:03:07
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
-- 資料表結構 `message`
--

CREATE TABLE `message` (
  `messageId` int(20) NOT NULL COMMENT '留言編號',
  `memberId` int(20) NOT NULL COMMENT '會員編號',
  `storeId` int(20) NOT NULL COMMENT '分店編號',
  `content` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '留言內容',
  `replyId` int(10) NOT NULL COMMENT '回文編號',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `message`
--

INSERT INTO `message` (`messageId`, `memberId`, `storeId`, `content`, `replyId`, `created_at`, `updated_at`) VALUES
(1, 3, 1, '尋找明天下午想一起玩阿瓦隆的捧油們，人越多越好, 不過希望至少兩個女生OwO', 0, '2021-07-13 18:22:33', '2021-07-15 14:20:14'),
(2, 2, 1, '我可以+1嗎^^', 1, '2021-07-13 18:24:45', '2021-07-15 14:20:27'),
(3, 1, 1, '還敢群聚喔彎彎= =', 1, '2021-07-13 18:27:47', '2021-07-15 14:20:33'),
(4, 4, 1, '我好想上實體課', 1, '2021-07-13 18:28:39', '2021-07-15 14:20:39'),
(5, 5, 1, '打球有點膩想改打桌遊 有人要PLAY ONE嗎', 0, '2021-07-13 18:29:45', '2021-07-15 14:20:42'),
(6, 5, 2, '詹姆士的分店留言測試', 0, '2021-07-16 00:26:59', '2021-07-16 00:31:44'),
(7, 1, 2, '回應分店測試', 6, '2021-07-16 00:29:54', '2021-07-16 00:29:54');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`messageId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `message`
--
ALTER TABLE `message`
  MODIFY `messageId` int(20) NOT NULL AUTO_INCREMENT COMMENT '留言編號', AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
