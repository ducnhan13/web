SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `comment` (
  `commentID` varchar(10) NOT NULL,
  `commentTime` varchar(50) NOT NULL,
  `custName` varchar(50) NOT NULL,
  `custEmail` varchar(50) DEFAULT NULL,
  `custPhone` varchar(11) DEFAULT NULL,
  `content` varchar(255) NOT NULL,
  `productID` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `comment` (`commentID`, `commentTime`, `custName`, `custEmail`, `custPhone`, `content`, `productID`) VALUES
('1', 'Wed Nov 03 2021 22:16:51 GMT+0700 (Indochina Time)', 'quang ', '', '', '12 qwesdsad', '2'),
('2', 'Wed Nov 03 2021 22:17:58 GMT+0700 (Indochina Time)', 'quang ', '', '', 'qweqwe', '2');

CREATE TABLE `feedback` (
  `feedbackID` varchar(10) NOT NULL,
  `custName` varchar(50) DEFAULT NULL,
  `productName` varchar(50) NOT NULL,
  `custPhone` varchar(11) DEFAULT NULL,
  `custEmail` varchar(50) DEFAULT NULL,
  `content` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `feedback` (`feedbackID`, `custName`, `productName`, `custPhone`, `custEmail`, `content`) VALUES
('1', 'mon doan', 'iphone 13 promax', '0706358446', 'quang@gmail.com', 'qweqweqe'),
('2', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined');

CREATE TABLE `products` (
  `productID` varchar(10) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `productTypeID` varchar(10) NOT NULL,
  `productImage` varchar(100) NOT NULL,
  `salePrice` int(11) NOT NULL,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `products` (`productID`, `productName`, `productTypeID`, `productImage`, `salePrice`, `description`) VALUES
('2', 'Wi-Fi Smart Camera', '1', '/images/header/cart-items/item2.jpg', 123, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'),
('5', 'Iphone 6', '1', '/images/products/product-4.jpg', 500, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'),
('7', 'speaker', '3', '/images/products/product-6.jpg', 101, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'),
('8', 'Xiaomi miband 5', '1', '/images/uploads/product-1.jpg', 106, 'This is my smart watch'),
('9', 'Xiaomi miband 5', '1', '/images/uploads/product-1.jpg', 95, 'This is my smart watch');

CREATE TABLE `producttypes` (
  `productTypeID` varchar(10) NOT NULL,
  `productTypeName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `producttypes` (`productTypeID`, `productTypeName`) VALUES
('1', 'Smart Watch'),
('2', 'Smart Phone'),
('3', 'Smart Thing');

CREATE TABLE `user` (
  `userid` varchar(255) NOT NULL,
  `userpassword` varchar(255) NOT NULL,
  `userphone` varchar(255) DEFAULT NULL,
  `usermail` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `user` (`userid`, `userpassword`, `userphone`, `usermail`) VALUES
('duc', '123', '', '');

ALTER TABLE `comment`
  ADD PRIMARY KEY (`commentID`),
  ADD KEY `productID` (`productID`);

ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedbackID`);

ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

ALTER TABLE `producttypes`
  ADD PRIMARY KEY (`productTypeID`);

ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`);
COMMIT;
