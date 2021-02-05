-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.28-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for coffeeshop
CREATE DATABASE IF NOT EXISTS `coffeeshop` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `coffeeshop`;

-- Dumping structure for table coffeeshop.cart
CREATE TABLE IF NOT EXISTS `cart` (
  `id` varchar(128) NOT NULL,
  `userId` varchar(128) NOT NULL,
  `payTotal` double NOT NULL DEFAULT '0',
  `paymentMethod` varchar(45) NOT NULL,
  `deliveryMethod` varchar(256) NOT NULL,
  `deliveryStatus` enum('pending','delivered') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_cart_users` (`userId`),
  CONSTRAINT `FK_cart_users` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table coffeeshop.cart: ~12 rows (approximately)
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` (`id`, `userId`, `payTotal`, `paymentMethod`, `deliveryMethod`, `deliveryStatus`) VALUES
	('0f531fc4-aeb8-440f-a6ea-4b93c797c5b6', 'c9755918-fbb5-4dff-b4f9-dc42c013393d', 151500, 'Card', 'dinein', 'delivered'),
	('139ff7ad-19cf-4e17-a5a4-f644057c380b', 'c9755918-fbb5-4dff-b4f9-dc42c013393d', 229000, 'Card', 'dinein', 'delivered'),
	('245af1b5-916a-4f0a-8968-31249d23d1bc', 'c9755918-fbb5-4dff-b4f9-dc42c013393d', 124000, 'Card', 'dinein', 'delivered'),
	('355e0c9c-d644-468f-b823-7835db7dfcab', 'c9755918-fbb5-4dff-b4f9-dc42c013393d', 244000, 'Card', 'dinein', 'delivered'),
	('61dbab42-03d1-4db2-b877-34a1c92c1230', 'c9755918-fbb5-4dff-b4f9-dc42c013393d', 69000, 'Card', 'dinein', 'delivered'),
	('65948557-fdff-48cc-b861-73942beb04c5', 'c9755918-fbb5-4dff-b4f9-dc42c013393d', 119000, 'Card', 'dinein', 'delivered'),
	('666fb04f-dd45-4b9f-a9da-7b14e1aa89b9', 'c9755918-fbb5-4dff-b4f9-dc42c013393d', 234000, 'Card', 'dinein', 'delivered'),
	('6de86d6a-82a0-4f9b-a9da-a9ba3a04bb98', 'c9755918-fbb5-4dff-b4f9-dc42c013393d', 509000, 'Card', 'dinein', 'delivered'),
	('8f96de2b-e94d-42b2-acae-aff33775335a', 'c9755918-fbb5-4dff-b4f9-dc42c013393d', 174000, 'Card', 'dinein', 'delivered'),
	('a1562ae6-65c0-4d32-a504-44e7a247f81d', 'c9755918-fbb5-4dff-b4f9-dc42c013393d', 294000, 'Card', 'doordelivery', 'delivered'),
	('bca33edb-3d07-40d9-bf6e-34ba8d844212', 'c9755918-fbb5-4dff-b4f9-dc42c013393d', 179000, 'Card', 'dinein', 'delivered'),
	('cbcf8a37-5159-40eb-9a03-5f26c659840f', 'c9755918-fbb5-4dff-b4f9-dc42c013393d', 329000, 'Card', 'doordelivery', 'delivered'),
	('ce5316c8-496f-48f1-880b-c1679d4df661', 'c9755918-fbb5-4dff-b4f9-dc42c013393d', 301000, 'Card', 'dinein', 'delivered');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;

-- Dumping structure for table coffeeshop.coupons
CREATE TABLE IF NOT EXISTS `coupons` (
  `couponCode` varchar(64) NOT NULL,
  `itemToBuy` varchar(64) NOT NULL,
  `amountItemToBuy` int(3) NOT NULL,
  `itemPromo` varchar(64) NOT NULL,
  `description` varchar(64) NOT NULL,
  `percentDiscount` int(3) NOT NULL,
  `expiredStart` timestamp NULL DEFAULT NULL,
  `expiredEnd` timestamp NULL DEFAULT NULL,
  `homeDelivery` tinyint(1) NOT NULL DEFAULT '0',
  `dineIn` tinyint(1) NOT NULL DEFAULT '0',
  `takeAway` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`couponCode`),
  KEY `itemToBuy` (`itemToBuy`),
  KEY `itemPromo` (`itemPromo`),
  CONSTRAINT `coupons_ibfk_1` FOREIGN KEY (`itemToBuy`) REFERENCES `products` (`idProduct`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `coupons_ibfk_2` FOREIGN KEY (`itemPromo`) REFERENCES `products` (`idProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table coffeeshop.coupons: ~0 rows (approximately)
/*!40000 ALTER TABLE `coupons` DISABLE KEYS */;
/*!40000 ALTER TABLE `coupons` ENABLE KEYS */;

-- Dumping structure for table coffeeshop.orderhistory
CREATE TABLE IF NOT EXISTS `orderhistory` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `cartId` varchar(128) NOT NULL,
  `idProduct` varchar(128) NOT NULL,
  `regular` varchar(128) NOT NULL,
  `large` varchar(128) NOT NULL,
  `xtralarge` varchar(128) NOT NULL,
  `basePrice` double DEFAULT NULL,
  `photoProduct` varchar(200) DEFAULT NULL,
  `productName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productid` (`idProduct`) USING BTREE,
  KEY `cartid` (`cartId`),
  CONSTRAINT `FK_orderhistory_products` FOREIGN KEY (`idProduct`) REFERENCES `products` (`idProduct`) ON DELETE CASCADE,
  CONSTRAINT `cartid` FOREIGN KEY (`cartId`) REFERENCES `cart` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table coffeeshop.orderhistory: ~2 rows (approximately)
/*!40000 ALTER TABLE `orderhistory` DISABLE KEYS */;
INSERT INTO `orderhistory` (`id`, `cartId`, `idProduct`, `regular`, `large`, `xtralarge`, `basePrice`, `photoProduct`, `productName`) VALUES
	(25, '8f96de2b-e94d-42b2-acae-aff33775335a', 'e765e6f0-f615-452c-b0c0-2316c150bb22', '2', '0', '0', 25000, 'http://localhost:4000/upload/12ee611d-2483-418a-b5fe-c1b0644dd37c-coffee-four.jpg', 'Hazelnat latte'),
	(26, '8f96de2b-e94d-42b2-acae-aff33775335a', '9090982a-e489-4702-b38e-3221fd969571', '0', '2', '0', 50000, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-karthik-garikapati-oBbTc1VoT-0-unsplash.jpg', 'Italian Pizza');
/*!40000 ALTER TABLE `orderhistory` ENABLE KEYS */;

-- Dumping structure for table coffeeshop.products
CREATE TABLE IF NOT EXISTS `products` (
  `idProduct` varchar(64) NOT NULL,
  `productName` varchar(30) NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(3) NOT NULL,
  `photoProduct` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `discountPercent` int(3) NOT NULL,
  `idTypeProduct` int(11) NOT NULL,
  `homeDelivery` tinyint(1) NOT NULL,
  `dineIn` tinyint(1) NOT NULL,
  `takeAway` tinyint(1) NOT NULL,
  `deliveryHourStart` varchar(50) NOT NULL,
  `deliveryHourEnd` varchar(50) NOT NULL,
  PRIMARY KEY (`idProduct`),
  KEY `idTypeProduct` (`idTypeProduct`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`idTypeProduct`) REFERENCES `typeproduct` (`idTypeProduct`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table coffeeshop.products: ~27 rows (approximately)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`idProduct`, `productName`, `price`, `stock`, `photoProduct`, `description`, `discountPercent`, `idTypeProduct`, `homeDelivery`, `dineIn`, `takeAway`, `deliveryHourStart`, `deliveryHourEnd`) VALUES
	('23be02d6-1136-4798-8054-6b4f1b40a527', 'Hazelnat Mix Latte', 30000, 100, 'http://localhost:4000/upload/12ee611d-2483-418a-b5fe-c1b0644dd37c-coffee-two.jpg', 'This is best choco in the world', 5, 2, 1, 1, 1, '07.00', '12.00'),
	('2691872b-a313-45cb-bafb-894e1631e3a0', 'French Fries', 50000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-tim-toomey-pe9dvM1rQkM-unsplash.jpg', 'This is Food', 5, 1, 1, 1, 1, '07.00', '12.00'),
	('3da5fc80-d39e-40ad-add1-7c8876c11019', 'Matcha Cofee', 25000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-jennifer-lila-Vff15rjjBhA-unsplash.jpg', 'This is best Drink', 3, 2, 1, 1, 1, '07.00', '12.00'),
	('40678f27-941c-41ba-8311-7ec76c6b04e5', 'Red Velvet', 50000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-taisiia-shestopal-aePkZNVderw-unsplash.jpg', 'This is Red Velvet', 3, 1, 1, 1, 1, '07.00', '12.00'),
	('4812722b-1123-4ebf-b469-a066d9ed4d28', 'qweqweqweqwwwwwwwwwwwwwwwwwwww', 123123123, 12, 'http://localhost:4000/upload/photoProduct-1611805374895.jpg', 'qweqweqweqweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 0, 1, 0, 1, 0, '12:12', '12:12'),
	('4ae6ca65-eead-4ad7-97ca-eadeddc40e14', 'Black Pudding', 20000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-edward-howell-ZXmxQ0Ny_IY-unsplash.jpg', 'This is best Food', 3, 1, 1, 1, 1, '07.00', '12.00'),
	('4d746985-b5b7-4b31-a593-0fda81c0af47', 'Cappucino', 50000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-anthony-espinosa-ujxdhcpAQxk-unsplash.jpg', 'This is Cappucino Coffee', 3, 2, 1, 1, 1, '07.00', '12.00'),
	('5fde7e4b-6986-47ab-805f-ada227f4814c', 'Honey Latte', 25000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-billy-kwok-vfiA7rRtjWo-unsplash.jpg', 'This is best Drink', 3, 2, 1, 1, 1, '07.00', '12.00'),
	('6029d84a-4e43-4a13-9b60-009b65467425', 'Lemon Tea', 10000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-reyhaneh-mehrnejad-AZxyTjkz3-g-unsplash.jpg', 'This is tea', 5, 3, 1, 1, 1, '07.00', '12.00'),
	('62faa519-bd8e-46a4-a41e-c954af88b43a', 'Fresh Tea', 20000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-teacora-rooibos-0qsNMT8HJD8-unsplash.jpg', 'This is best Drink', 3, 3, 1, 1, 1, '07.00', '12.00'),
	('630ef17b-933e-491d-8289-b5d7908fd90d', 'Tacos', 20000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg', 'This is best Food', 3, 1, 1, 1, 1, '07.00', '12.00'),
	('66a3ee55-6540-4e80-9ed6-b506f927f626', 'Salad', 50000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-sina-piryae-bBzjWthTqb8-unsplash.jpg', 'This is best Food', 3, 1, 1, 1, 1, '07.00', '12.00'),
	('7350ca34-3e8f-4b98-bc8b-d8bf1b059e14', 'Beef Spagheti', 15000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-haseeb-jamil-J9lD6FS6_cs-unsplash.jpg', 'This is Food', 5, 1, 1, 1, 1, '07.00', '12.00'),
	('8a37eef4-2e74-4a7d-b2cd-a6896031b7d1', 'Esspreso', 45000, 100, 'http://localhost:4000/upload/12ee611d-2483-418a-b5fe-c1b0644dd37c-coffee-one.jpg', 'This is best coffee in the world', 5, 2, 1, 1, 1, '07.00', '12.00'),
	('9090982a-e489-4702-b38e-3221fd969571', 'Italian Pizza', 50000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-karthik-garikapati-oBbTc1VoT-0-unsplash.jpg', 'This is best Food', 3, 1, 1, 1, 1, '07.00', '12.00'),
	('98f017a4-b498-4ae1-ac4c-5289f513cab7', 'Vanila Latte', 50000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-angela-lo-7G3NBWYgWaQ-unsplash.jpg', 'This is best Coffee', 3, 2, 1, 1, 1, '07.00', '12.00'),
	('a1e132c4-36da-4c4c-b3f2-aec3b0eda96b', 'Fruit Cake', 50000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-brett-jordan-5LtqDToy5WQ-unsplash.jpg', 'This is best Food', 3, 1, 1, 1, 1, '07.00', '12.00'),
	('a417d677-a1c7-4007-88c2-5063277251bf', 'Tiramisu', 15000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-kreated-media-c7ceNXAOIh0-unsplash.jpg', 'This is drink', 5, 3, 1, 1, 1, '07.00', '12.00'),
	('a4dffc99-55fa-4ac0-9f61-13dfc109ddeb', 'Black Forest Chocolate', 25000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-jacob-thomas-6jHpcBPw7i8-unsplash.jpg', 'This is best Food', 3, 1, 1, 1, 1, '07.00', '12.00'),
	('ac2507ce-442c-4a75-b4e0-49b8b82de2ff', 'Taro', 50000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-ismael-trevino-RP7y32Tq9pQ-unsplash.jpg', 'This is best Drink', 3, 3, 1, 1, 1, '07.00', '12.00'),
	('ba35ee00-77be-4de3-815e-001277ea4ccf', 'Thai Tea', 30000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-jony-ariadi-EqV0HFG-jSE-unsplash.jpg', 'This is best Drink', 3, 3, 1, 1, 1, '07.00', '12.00'),
	('bfb7708a-db0b-4588-873b-9bf8b66441f5', 'Caramel Coffee', 50000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-daria-rudyk-Jmo7NgH0Q10-unsplash.jpg', 'This is best Coffee', 3, 2, 1, 1, 1, '07.00', '12.00'),
	('cf4f338c-b0be-4712-80b2-c3990ef509a5', 'Melati Tea', 30000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-ornella-binni-ZoCwTGO8bJI-unsplash.jpg', 'This is best Drink', 3, 3, 1, 1, 1, '07.00', '12.00'),
	('d74f2b43-42f8-4d01-85da-19e3fa6ce913', 'GreenTea', 15000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-green tea.jpg', 'This is tea', 5, 3, 1, 1, 1, '07.00', '12.00'),
	('e765e6f0-f615-452c-b0c0-2316c150bb22', 'Hazelnat latte', 25000, 100, 'http://localhost:4000/upload/12ee611d-2483-418a-b5fe-c1b0644dd37c-coffee-four.jpg', 'This is best choco in the world', 5, 2, 1, 1, 1, '07.00', '12.00'),
	('ebb60e9c-4cab-44a3-a0c8-250ea2bead3f', 'Coffee Avocado', 50000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-coffee-one.jpg', 'This is best Coffee', 3, 2, 1, 1, 1, '07.00', '12.00'),
	('ec7d563a-74b5-497f-9bbf-15288b4ef108', 'Kapal Api Coffee', 10000, 100, 'http://localhost:4000/upload/12ee611d-2483-418a-b5fe-c1b0644dd37c-coffee-five.jpg', 'This is best coffee at indonesia', 5, 2, 1, 1, 1, '07.00', '12.00'),
	('eede651d-eafb-42f1-a5ac-dbed18102de2', 'Gelato Ice Cream', 25000, 100, 'http://localhost:4000/upload/60cf551a-8fd9-4e8a-b5e9-492a15ccc715-anna-ribes-alEZLDPPRBU-unsplash.jpg', 'This is best Food', 3, 1, 1, 1, 1, '07.00', '12.00');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Dumping structure for table coffeeshop.typeproduct
CREATE TABLE IF NOT EXISTS `typeproduct` (
  `idTypeProduct` int(11) NOT NULL,
  `typeName` varchar(30) NOT NULL,
  PRIMARY KEY (`idTypeProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table coffeeshop.typeproduct: ~4 rows (approximately)
/*!40000 ALTER TABLE `typeproduct` DISABLE KEYS */;
INSERT INTO `typeproduct` (`idTypeProduct`, `typeName`) VALUES
	(1, 'food'),
	(2, 'coffee'),
	(3, 'non-coffee'),
	(4, 'add-on');
/*!40000 ALTER TABLE `typeproduct` ENABLE KEYS */;

-- Dumping structure for table coffeeshop.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(128) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(128) NOT NULL,
  `roleId` int(2) NOT NULL DEFAULT '0',
  `phoneNumber` varchar(15) NOT NULL,
  `gender` varchar(10) DEFAULT 'unknown',
  `username` varchar(15) DEFAULT NULL,
  `firstName` varchar(20) DEFAULT NULL,
  `lastName` varchar(20) DEFAULT NULL,
  `bornDate` varchar(50) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `photoProfile` varchar(200) DEFAULT NULL,
  `emailVerification` int(2) NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table coffeeshop.users: ~3 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `email`, `password`, `roleId`, `phoneNumber`, `gender`, `username`, `firstName`, `lastName`, `bornDate`, `address`, `photoProfile`, `emailVerification`, `createdAt`, `updatedAt`) VALUES
	('28489cf8-5426-4995-b8d1-39c205f8abde', 'renaldipratama51@gmail.com', '$2b$10$FFGE.vGTqpDdNzOwMNa/x.blr7z8pkZtGxzmFwZRz07IUebNHGs2u', 1, '0812345623423', 'male', 'awdawd', 'Renaldi', 'Pratama Tumanggor', '1222-12-12', 'adawdawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', 'http://localhost:4000/upload/photoProfile-1611820347593.jpg', 1, '2020-12-20 11:19:59', '0000-00-00 00:00:00'),
	('aawd', 'heyubilboard', 'fast-delivery 3.pngfast-delivery 3.png', 0, '', 'unknown', NULL, NULL, NULL, NULL, NULL, NULL, 0, '2021-01-20 00:30:52', NULL),
	('c9755918-fbb5-4dff-b4f9-dc42c013393d', 'jhondoe@gmail.com', '$2b$10$ouJuOulWpSGyPf9hrLxy.eHLnOXgPAxpB7dZZq206sFKDm3KQ1hwu', 0, '082112321345', 'male', 'jhon', 'Jhon', 'Doe', '1990-12-12', 'C. d\'Arístides Maillol, 12, 08028 Barcelona,', 'http://localhost:4000/upload/photoProfile-1612436745837.jpg', 1, '2021-01-18 16:50:09', '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
