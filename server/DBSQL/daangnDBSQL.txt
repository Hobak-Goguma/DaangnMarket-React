-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: daangn
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `id_company` int(11) NOT NULL AUTO_INCREMENT COMMENT '업체 키',
  `id_member` int(11) NOT NULL COMMENT '멤버 키',
  `name` varchar(50) NOT NULL COMMENT '업체 이름',
  `add` varchar(200) NOT NULL COMMENT '업체 위치',
  `tel` varchar(20) DEFAULT NULL COMMENT '업체 번호',
  `info` varchar(3000) DEFAULT NULL COMMENT '업체 소개',
  `category` varchar(15) DEFAULT NULL COMMENT '카테고리',
  `img` varchar(500) DEFAULT NULL COMMENT '업체 사진',
  `cdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일',
  `udate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정일',
  PRIMARY KEY (`id_company`),
  KEY `FK_member_TO_company` (`id_member`),
  CONSTRAINT `FK_member_TO_company` FOREIGN KEY (`id_member`) REFERENCES `member` (`id_member`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='업체';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `log` (
  `id_log` int(11) NOT NULL AUTO_INCREMENT COMMENT '로그 키',
  `id_member` int(11) NOT NULL COMMENT '멤버 키',
  `search` varchar(60) NOT NULL COMMENT '검색 내용',
  PRIMARY KEY (`id_log`),
  KEY `FK_member_TO_log` (`id_member`),
  CONSTRAINT `FK_member_TO_log` FOREIGN KEY (`id_member`) REFERENCES `member` (`id_member`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='로그';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log`
--

LOCK TABLES `log` WRITE;
/*!40000 ALTER TABLE `log` DISABLE KEYS */;
/*!40000 ALTER TABLE `log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manner`
--

DROP TABLE IF EXISTS `manner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manner` (
  `id_manner` int(11) NOT NULL AUTO_INCREMENT COMMENT '매너 키',
  `id_member` int(11) NOT NULL COMMENT '멤버 키',
  `score` int(11) NOT NULL COMMENT '점수',
  `reviewer` int(11) NOT NULL COMMENT '평가자',
  PRIMARY KEY (`id_manner`),
  KEY `FK_member_TO_manner` (`id_member`),
  CONSTRAINT `FK_member_TO_manner` FOREIGN KEY (`id_member`) REFERENCES `member` (`id_member`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='메너온도';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manner`
--

LOCK TABLES `manner` WRITE;
/*!40000 ALTER TABLE `manner` DISABLE KEYS */;
/*!40000 ALTER TABLE `manner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `id_member` int(11) NOT NULL AUTO_INCREMENT COMMENT '멤버 키',
  `name` varchar(30) NOT NULL COMMENT '이름',
  `user_id` varchar(30) NOT NULL COMMENT '아이디',
  `user_pw` varchar(55) NOT NULL COMMENT '비밀번호',
  `tel` varchar(20) NOT NULL COMMENT '전화번호',
  `birth` date NOT NULL COMMENT '생년월일',
  `email` varchar(30) NOT NULL COMMENT '이메일',
  `gender` varchar(6) NOT NULL COMMENT '성별',
  `add` varchar(200) NOT NULL COMMENT '주소',
  `cdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일',
  `udate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정일',
  `last_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '최후접속',
  PRIMARY KEY (`id_member`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='멤버';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id_product` int(11) NOT NULL AUTO_INCREMENT COMMENT '제품키',
  `id_member` int(11) NOT NULL COMMENT '멤버 키',
  `name` varchar(100) NOT NULL COMMENT '제품 이름',
  `price` int(11) NOT NULL COMMENT '제품 가격',
  `info` varchar(3000) NOT NULL COMMENT '제품 설명',
  `category` varchar(15) DEFAULT NULL COMMENT '카테고리',
  `img` varchar(500) DEFAULT NULL COMMENT '제품 사진',
  `cdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일',
  `udate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정일',
  PRIMARY KEY (`id_product`),
  KEY `FK_member_TO_product` (`id_member`),
  CONSTRAINT `FK_member_TO_product` FOREIGN KEY (`id_member`) REFERENCES `member` (`id_member`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='제품';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `real_deal`
--

DROP TABLE IF EXISTS `real_deal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `real_deal` (
  `id_real_deal` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id_real_deal',
  `id_product` int(11) NOT NULL COMMENT '제품키',
  `id_seller` int(11) NOT NULL COMMENT '판매자',
  `id_shopper` int(11) NOT NULL COMMENT '구매자',
  `cdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일',
  PRIMARY KEY (`id_real_deal`),
  KEY `FK_product_TO_real_deal` (`id_product`),
  KEY `FK_member_TO_real_deal` (`id_seller`),
  CONSTRAINT `FK_member_TO_real_deal` FOREIGN KEY (`id_seller`) REFERENCES `member` (`id_member`),
  CONSTRAINT `FK_product_TO_real_deal` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='실거래';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `real_deal`
--

LOCK TABLES `real_deal` WRITE;
/*!40000 ALTER TABLE `real_deal` DISABLE KEYS */;
/*!40000 ALTER TABLE `real_deal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seller_review`
--

DROP TABLE IF EXISTS `seller_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seller_review` (
  `id_review` int(11) NOT NULL AUTO_INCREMENT COMMENT '리뷰 키',
  `title` varchar(50) NOT NULL COMMENT '후기 제목',
  `cdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일',
  `id_real_deal` int(11) NOT NULL COMMENT '실거래',
  PRIMARY KEY (`id_review`),
  KEY `FK_real_deal_TO_seller_review` (`id_real_deal`),
  CONSTRAINT `FK_real_deal_TO_seller_review` FOREIGN KEY (`id_real_deal`) REFERENCES `real_deal` (`id_real_deal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='판매자후기';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller_review`
--

LOCK TABLES `seller_review` WRITE;
/*!40000 ALTER TABLE `seller_review` DISABLE KEYS */;
/*!40000 ALTER TABLE `seller_review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopper_review`
--

DROP TABLE IF EXISTS `shopper_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopper_review` (
  `id_review` int(11) NOT NULL AUTO_INCREMENT COMMENT '리뷰 키',
  `title` varchar(50) NOT NULL COMMENT '후기 제목',
  `cdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일',
  `id_real_deal` int(11) NOT NULL COMMENT 'id_real_deal',
  PRIMARY KEY (`id_review`),
  KEY `FK_real_deal_TO_shopper_review` (`id_real_deal`),
  CONSTRAINT `FK_real_deal_TO_shopper_review` FOREIGN KEY (`id_real_deal`) REFERENCES `real_deal` (`id_real_deal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='구매자후기';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopper_review`
--

LOCK TABLES `shopper_review` WRITE;
/*!40000 ALTER TABLE `shopper_review` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopper_review` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-01 13:13:15
