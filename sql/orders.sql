-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2021 年 07 月 17 日 18:46
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
-- 資料庫： `react`
--

-- --------------------------------------------------------

--
-- 資料表結構 `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL COMMENT '流水號',
  `userId` int(11) NOT NULL COMMENT '會員編號',
  `paymentTypeId` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '付款方式',
  `deliveryTypeId` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '配送方式',
  `voucherId` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '優惠券',
  `orderName` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '訂購姓名',
  `orderMobile` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '訂購電話',
  `orderMail` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '訂購email',
  `orderAddress` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '訂購地址',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='訂單資料表';

--
-- 傾印資料表的資料 `orders`
--

INSERT INTO `orders` (`orderId`, `userId`, `paymentTypeId`, `deliveryTypeId`, `voucherId`, `orderName`, `orderMobile`, `orderMail`, `orderAddress`, `created_at`, `updated_at`) VALUES
(1, 0, NULL, NULL, NULL, '${this.orderName}', '${this.orderMobile}', '${this.orderMail}', '${this.orderAddress}', '2021-07-14 22:45:14', '2021-07-14 22:45:14'),
(2, 0, NULL, NULL, NULL, 'undefined', 'undefined', 'undefined', 'undefined', '2021-07-14 22:45:29', '2021-07-14 22:45:29'),
(3, 0, NULL, NULL, NULL, 'undefined', 'undefined', 'undefined', 'undefined', '2021-07-14 22:45:58', '2021-07-14 22:45:58'),
(4, 0, NULL, NULL, NULL, 'undefined', 'undefined', 'undefined', 'undefined', '2021-07-14 22:47:17', '2021-07-14 22:47:17'),
(5, 0, NULL, NULL, NULL, 'undefined', 'undefined', 'undefined', 'undefined', '2021-07-14 22:59:21', '2021-07-14 22:59:21'),
(6, 0, NULL, NULL, NULL, 'hi', 'hi', 'sss', 'undefined', '2021-07-14 23:03:18', '2021-07-14 23:03:18'),
(7, 0, NULL, NULL, NULL, 'hi', 'hi', 'sss', 'undefined', '2021-07-14 23:05:19', '2021-07-14 23:05:19'),
(8, 0, NULL, NULL, NULL, 'hi', 'hi', 'sss', 'undefined', '2021-07-14 23:07:08', '2021-07-14 23:07:08'),
(9, 0, NULL, NULL, NULL, 'hi', 'hi', 'sss', 'undefined', '2021-07-14 23:09:18', '2021-07-14 23:09:18'),
(10, 0, NULL, NULL, NULL, 'hi', 'hi', 'undefined', 'undefined', '2021-07-14 23:10:21', '2021-07-14 23:10:21'),
(11, 0, NULL, NULL, NULL, 'hi', 'hi', 'undefined', 'undefined', '2021-07-14 23:11:54', '2021-07-14 23:11:54'),
(12, 0, NULL, NULL, NULL, 'hi', 'hi', 'sss', 'undefined', '2021-07-14 23:12:26', '2021-07-14 23:12:26'),
(13, 0, NULL, NULL, NULL, 'hi', 'hi', 'sss', 'undefined', '2021-07-14 23:14:27', '2021-07-14 23:14:27'),
(14, 0, NULL, NULL, NULL, 'hidd', 'hiddd', 'addddd', 'undefined', '2021-07-14 23:14:40', '2021-07-14 23:14:40'),
(15, 0, NULL, NULL, NULL, 'hhh', 'hh', 'hhhhhhhh', 'undefined', '2021-07-14 23:20:41', '2021-07-14 23:20:41'),
(16, 0, NULL, NULL, NULL, '李小美', '0955555', 'a1003', 'undefined', '2021-07-14 23:29:36', '2021-07-14 23:29:36'),
(17, 0, NULL, NULL, NULL, '李小美', '0955555', 'a1003', 'undefined', '2021-07-14 23:30:22', '2021-07-14 23:30:22'),
(18, 0, NULL, NULL, NULL, '李小美', '0955555', 'a1003', '新北市仁愛區', '2021-07-14 23:31:33', '2021-07-14 23:31:33'),
(19, 0, NULL, NULL, NULL, 'sophia', '0955555', 'a100377787', '新北市仁愛區eeee', '2021-07-14 23:34:24', '2021-07-14 23:34:24'),
(20, 0, NULL, NULL, NULL, 'sophia', '0955555', 'a100377787', '新北市仁愛區eeee', '2021-07-15 01:47:49', '2021-07-15 01:47:49'),
(21, 0, NULL, NULL, NULL, '陳sss', 'hiii', 'hiiii', 'hhhh', '2021-07-15 02:14:28', '2021-07-15 02:14:28'),
(22, 0, NULL, NULL, NULL, 'undefined', 'undefined', 'undefined', 'undefined', '2021-07-15 11:25:24', '2021-07-15 11:25:24'),
(23, 0, NULL, NULL, NULL, 'undefined', 'undefined', 'undefined', 'undefined', '2021-07-15 11:28:59', '2021-07-15 11:28:59'),
(24, 0, NULL, NULL, NULL, 'undefined', 'undefined', 'undefined', 'undefined', '2021-07-15 11:29:33', '2021-07-15 11:29:33'),
(25, 0, NULL, NULL, NULL, 'ggg', 'ggg', 'ggg', 'ggg', '2021-07-15 11:32:53', '2021-07-15 11:32:53'),
(26, 0, NULL, NULL, NULL, 'hi', 'hiii', 'hiiii', 'dddddddddd', '2021-07-15 12:00:22', '2021-07-15 12:00:22'),
(27, 0, NULL, NULL, NULL, 'hi', 'hiii', 'hiiii', 'dddddddddd', '2021-07-15 12:01:06', '2021-07-15 12:01:06'),
(28, 0, NULL, NULL, NULL, 'hi', 'hiii', 'hiiii', 'dddddddddd', '2021-07-15 12:06:40', '2021-07-15 12:06:40'),
(29, 0, NULL, NULL, NULL, 'hi', 'hiii', 'hiiii', 'hhhh', '2021-07-15 12:13:06', '2021-07-15 12:13:06'),
(30, 0, NULL, NULL, NULL, 'hi', 'hiii', 'hiiii', 'hhhh', '2021-07-15 12:15:20', '2021-07-15 12:15:20'),
(31, 0, NULL, NULL, NULL, 'hi', 'hiii', 'hiiii', 'hhhh', '2021-07-15 13:07:33', '2021-07-15 13:07:33'),
(32, 0, NULL, NULL, NULL, 'hi', 'hiii', 'hiiii', 'hjjijkikklk', '2021-07-15 13:07:59', '2021-07-15 13:07:59'),
(33, 0, NULL, NULL, NULL, 'sophia', '091111', '1111', '1111', '2021-07-15 13:15:19', '2021-07-15 13:15:19'),
(34, 0, NULL, NULL, NULL, '', '', '', '', '2021-07-15 17:11:42', '2021-07-15 17:11:42'),
(35, 0, NULL, NULL, NULL, 'hi', '091111', 'hiiii', 'hhhh', '2021-07-15 18:14:41', '2021-07-15 18:14:41'),
(36, 0, NULL, NULL, NULL, 'hi', '091111', 'hiiii', '1111', '2021-07-15 22:26:57', '2021-07-15 22:26:57'),
(37, 0, NULL, NULL, NULL, 'sophia', 'hiii', 'hiiii', '1111', '2021-07-15 22:28:48', '2021-07-15 22:28:48'),
(38, 0, NULL, NULL, NULL, 'hi', 'hiii', 'hiiii', 'hhhh', '2021-07-15 22:35:14', '2021-07-15 22:35:14'),
(39, 0, NULL, NULL, NULL, '', '', '', '', '2021-07-15 22:37:21', '2021-07-15 22:37:21'),
(40, 0, NULL, NULL, NULL, 'hi', '091111', 'hiiii', 'hhhh', '2021-07-15 22:37:58', '2021-07-15 22:37:58'),
(41, 0, NULL, NULL, NULL, '', '', '', '', '2021-07-15 22:41:21', '2021-07-15 22:41:21'),
(42, 0, NULL, NULL, NULL, '', '', '', '', '2021-07-15 22:43:08', '2021-07-15 22:43:08'),
(43, 0, NULL, NULL, NULL, '', '', '', '', '2021-07-15 22:44:07', '2021-07-15 22:44:07'),
(44, 0, NULL, NULL, NULL, '${this.orderName}', '${this.orderMobile}', '${this.orderMail}', '${this.orderAddress}', '2021-07-15 23:05:47', '2021-07-15 23:05:47'),
(45, 0, NULL, NULL, NULL, '${this.orderName}', '${this.orderMobile}', '${this.orderMail}', '${this.orderAddress}', '2021-07-15 23:08:13', '2021-07-15 23:08:13'),
(46, 0, '${this.paymentTypeId}', '${this.deliveryTypeId}', NULL, '${this.orderName}', '${this.orderMobile}', '${this.orderMail}', '${this.orderAddress}', '2021-07-15 23:11:22', '2021-07-15 23:11:22'),
(47, 0, 'undefined', '取貨付款', NULL, 'sophia', '091111', 'hiiii', 'hhhh', '2021-07-15 23:13:24', '2021-07-15 23:13:24'),
(48, 0, 'undefined', '信用卡', NULL, 'sophia', '091111', 'hiiii', 'hhhh', '2021-07-15 23:14:53', '2021-07-15 23:14:53'),
(49, 0, 'undefined', '', NULL, 'ㄨ', 'sss', 'ss', 'ss', '2021-07-15 23:17:50', '2021-07-15 23:17:50'),
(50, 0, 'undefined', '信用卡', NULL, 'ㄨ', 'sss', 'ss', 'ss', '2021-07-15 23:20:10', '2021-07-15 23:20:10'),
(51, 0, 'undefined', '信用卡', NULL, 'ㄨ', 'sss', 'ss', 'ss', '2021-07-15 23:21:08', '2021-07-15 23:21:08'),
(52, 0, '取貨付款', 'undefined', NULL, '', '', '', '', '2021-07-15 23:26:40', '2021-07-15 23:26:40'),
(53, 0, '信用卡', 'undefined', NULL, '', '', '', '', '2021-07-15 23:27:15', '2021-07-15 23:27:15'),
(54, 0, '', 'undefined', NULL, '', '', '', '', '2021-07-15 23:27:47', '2021-07-15 23:27:47'),
(55, 0, '取貨付款', 'undefined', NULL, '', '', '', '', '2021-07-15 23:33:32', '2021-07-15 23:33:32'),
(56, 0, '信用卡', 'undefined', NULL, '', '', '', '', '2021-07-15 23:33:50', '2021-07-15 23:33:50'),
(57, 0, '', 'undefined', NULL, '', '', '', '', '2021-07-15 23:34:33', '2021-07-15 23:34:33'),
(58, 0, '${this.paymentTypeId}', '${this.deliveryTypeId}', NULL, '${this.orderName}', '${this.orderMobile}', '${this.orderMail}', '${this.orderAddress}', '2021-07-15 23:37:46', '2021-07-15 23:37:46'),
(59, 0, '信用卡', 'undefined', NULL, '', '', '', '', '2021-07-15 23:45:23', '2021-07-15 23:45:23'),
(60, 0, '信用卡', 'undefined', NULL, '', '', '', '', '2021-07-15 23:54:51', '2021-07-15 23:54:51'),
(61, 0, 'undefined', 'undefined', NULL, '', '', '', '', '2021-07-16 00:02:45', '2021-07-16 00:02:45'),
(62, 0, 'undefined', 'undefined', NULL, '', '', '', '', '2021-07-16 00:03:30', '2021-07-16 00:03:30'),
(63, 0, 'undefined', 'undefined', NULL, '', '', '', '', '2021-07-16 00:04:02', '2021-07-16 00:04:02'),
(64, 0, '取貨付款', 'undefined', NULL, '', '', '', '', '2021-07-16 00:04:30', '2021-07-16 00:04:30'),
(65, 0, '信用卡', 'undefined', NULL, '', '', '', '', '2021-07-16 00:20:30', '2021-07-16 00:20:30'),
(66, 0, 'undefined', 'undefined', NULL, '', '', '', '', '2021-07-16 00:40:12', '2021-07-16 00:40:12'),
(67, 0, '取貨付款', 'undefined', NULL, '', '', '', '', '2021-07-16 00:41:16', '2021-07-16 00:41:16'),
(68, 0, '信用卡', 'undefined', NULL, '', '', '', '', '2021-07-16 00:41:30', '2021-07-16 00:41:30'),
(69, 0, '信用卡', 'undefined', NULL, '', '', '', '', '2021-07-16 00:45:46', '2021-07-16 00:45:46'),
(70, 0, '信用卡', '宅配到府', NULL, 'sophia', '091111', '1111', '1111', '2021-07-16 00:48:31', '2021-07-16 00:48:31'),
(71, 0, '信用卡', '超商取貨', NULL, 'test', 'test', 'test', 'test', '2021-07-16 10:41:17', '2021-07-16 10:41:17'),
(72, 0, '信用卡', '超商取貨', NULL, 'test', 'test', 'test', 'test', '2021-07-16 10:45:11', '2021-07-16 10:45:11'),
(73, 0, '${this.paymentTypeId}', '${this.deliveryTypeId}', '${this.voucherId}', '${this.orderName}', '${this.orderMobile}', '${this.orderMail}', '${this.orderAddress}', '2021-07-16 11:02:42', '2021-07-16 11:02:42'),
(74, 0, '信用卡', '宅配到府', 'undefined', 'test', 'sss', 'ffffff', 'fffff', '2021-07-16 11:03:26', '2021-07-16 11:03:26'),
(75, 0, '信用卡', '宅配到府', 'undefined', 'test', 'sss', 'ffffff', 'fffff', '2021-07-16 11:06:40', '2021-07-16 11:06:40'),
(76, 0, '信用卡', '宅配到府', '50', 'test', 'sss', 'ffffff', 'fffff', '2021-07-16 11:07:58', '2021-07-16 11:07:58'),
(77, 0, '取貨付款', '超商取貨', '50', 'test', 'test', 'test', 'test', '2021-07-17 20:37:03', '2021-07-17 20:37:03'),
(78, 0, '信用卡', '宅配到府', '100', 'sophia', '091111', 'test@gmail', 'test', '2021-07-17 20:37:33', '2021-07-17 20:37:33'),
(79, 0, '', '', '100', '', '', '', '', '2021-07-17 20:54:06', '2021-07-17 20:54:06'),
(80, 0, '取貨付款', '宅配到府', '100', '', 'test', 'test', 'test', '2021-07-17 20:56:41', '2021-07-17 20:56:41'),
(81, 0, '信用卡', '宅配到府', '100', 'test', 'test', 'test', 'test', '2021-07-17 20:57:04', '2021-07-17 20:57:04');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`),
  ADD KEY `paymentTypeId` (`paymentTypeId`),
  ADD KEY `deliveryTypeId` (`deliveryTypeId`),
  ADD KEY `voucherId` (`voucherId`),
  ADD KEY `userId` (`userId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=82;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
