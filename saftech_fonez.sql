-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 18, 2019 at 01:33 PM
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
('iPhone 8', 'Phone', 200, 'Grade A', 3),
('Airpods', 'Accessory', 80, 'Brand new from apple', 11),
('Samsung s9', 'Phone', 200, 'Grade A with screen protector and case', 4),
('Samsung Galaxy J3', 'Phone', 125, 'Samsung - Brand New Phones', 0),
('Samsung Galaxy J5', 'Phone', 160, 'Samsung - Brand New Phones', 0),
('Samsung Galaxy J4', 'Phone', 140, 'Samsung - Brand New Phones', 0),
('Samsung Galaxy J4 Plus', 'Phone', 140, 'Samsung - Brand New Phones', 0),
('Samsung Galaxy J6 Plus', 'Phone', 190, 'Samsung - Brand New Phones', 0),
('Samsung Galaxy J8', 'Phone', 215, 'Samsung - Brand New Phones', 0),
('Samsung Galaxy J7 Prime', 'Phone', 175, 'Samsung - Brand New Phones', 0),
('Samsung Galaxy J6', 'Phone', 175, 'Samsung - Brand New Phones', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
