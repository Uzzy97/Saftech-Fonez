-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 18, 2019 at 02:53 PM
-- Server version: 5.7.21-log
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `saftech_fonez`
--
CREATE DATABASE IF NOT EXISTS `saftech_fonez` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `saftech_fonez`;

-- --------------------------------------------------------

--
-- Table structure for table `persons`
--

DROP TABLE IF EXISTS `persons`;
CREATE TABLE IF NOT EXISTS `persons` (
  `PersonID` int(11) DEFAULT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `FirstName` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
CREATE TABLE IF NOT EXISTS `stock` (
  `prodName` char(50) DEFAULT NULL,
  `productType` varchar(255) NOT NULL,
  `Price` int(11) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Stock` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`prodName`, `productType`, `Price`, `Description`, `Stock`) VALUES
('Airpods', 'Accessory', 80, 'Brand new from apple', 11),
('Samsung Galaxy S10 Plus', 'Phone', 849.99, 'he next generation of Galaxy has arrived. Featuring an Infinity-O display, Wireless Power Sharing and Samsungs TrueVision camera system. The Galaxy S10+ also features an in-screen ultrasonic fingerprint scanner to keep your phone secure. ', 10),
('Samsung Galaxy S10', 'Phone', 749.99, 'The next generation of Galaxy has arrived. Featuring an Infinity-O display, Wireless Power Sharing and Samsungs TrueVision camera system. The Galaxy S10 also features an in-screen ultrasonic fingerprint scanner to keep your phone secure.', 10),
('Samsung Galaxy S10E', 'Phone', 599.99, 'The next generation of Galaxy has arrived. Featuring an Infinity-O display, Wireless Power Sharing and Samsungs TrueVision camera system. The Galaxy S10e packs all the latest technology into a compact design to fit perfectly into your life.', 10),
('Samsung Galaxy S9', 'Phone', 529.99, 'The Camera. Reimagined. The Galaxy S9 is packed with incredible features to help you do more than you ever imagined. With a revolutionary camera that adapts like the human eye, get ready to capture your world like never before.', 10),
('Samsung Galaxy S8', 'Phone', 429.99, 'The Samsung Galaxy S8 features the beautiful rounded-corner Infinity Display and symmetrical metal sides that blend effortlessly for a seamless look. A stylish and powerful handset.', 10),
('Samsung Galaxy A9', 'Phone', 489.99, 'The worlds first quad-camera smartphone. The Samsung Galaxy A9 gives you incredible photos in all kinds of situations thanks to its combination of standard, wide-angle, zoom and depth sensing cameras. From sweeping landscapses to low-light selfies, the A9 handles them all with ease.', 10),
('Samsung Galaxy A7', 'Phone', 169.99, 'Samsungs Galaxy A7 widens your world thanks to its 120-degree ultra wide lens. You will never miss a detail, never have to crop someone out of that perfect group selfie. The A7s intelligent camera system features 19 customisation modes that automatically adjust to a variety of environments and photo subjects.', 10),
('Samsung Galaxy A8', 'Phone', 449.99, 'Flagship looks at a great value price. The Samsung Galaxy A8 features an immersive large screen for truly cinematic experiences. A unique dual front-facing camera takes perfect selfies every time, with special effects such as Live Focus. The rear camera is made for those low-light situations - never miss another shot. And the handsets IP68 water and dust resistance means this phone can handle anything life throws at it.', 10),
('Huawei P30 Pro', 'Phone', 679.99, 'Rewrite the rules of photography with the Huawei P30 Pro. Featuring a Leica Quad Camera system that includes a Time Of Flight depth sensor, the P30 Pro takes incredible photos even in challenging low-light conditions. ', 10),
('iPhone XS 64GB', 'Phone', 999.99, 'Welcome to the big screens. The Apple iPhone Xs improves upon the innovations of the original iPhone X, with faster performance across the board. Face ID unlocking, Live Portrait effects and advanced augmented reality apps are now speedier than ever. ', 10),
('OnePlus 6T', 'Phone', 529.99, 'The OnePlus 6T is a flagship phone packed with some of the best tech around.', 10),
('OPPO Find X', 'Phone', 799.99, 'This premium phone not only looks stunning, but there’s some serious innovation here too. Like the pop-up camera which means there’s nothing getting in the way of that amazing 6.4-inch display.', 10),
('Nokia 105', 'Phone', 24.99, 'SIM free for total freedom, and a perfect phone for anyone who wants simplicity. The Nokia 105 handles all the basics with ease, calls, texts and a long-lasting battery. With a colour screen and an easy-to-use interface.', 10),
('Nokia 1', 'Phone', 29.99, 'A smarter starter phone from Nokia. The Nokia 1 offers 4G speeds and quad-core performance, with a design inspired by the classic lines and colours of the Nokia 3310. ', 10);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
