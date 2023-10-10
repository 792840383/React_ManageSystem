-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (x86_64)
--
-- Host: 47.101.217.56    Database: management
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `desc` varchar(200) DEFAULT NULL,
  `company` varchar(200) DEFAULT NULL,
  `district` int DEFAULT NULL,
  `number` varchar(200) DEFAULT NULL,
  `price` double NOT NULL,
  `po` varchar(45) DEFAULT NULL,
  `berth` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (36,'test1','test','London',1,'3',300,NULL,NULL),(38,'test','test','London',1,'3',200,NULL,NULL),(39,'test','test','London',1,'9',200,NULL,NULL),(40,'test','test','London',1,'8',200,NULL,NULL),(41,'test','test','London',1,'3',200,NULL,NULL),(42,'test','test','London',1,'3',200,NULL,NULL),(43,'test','test','London',1,'3',200,NULL,NULL),(44,'test','test','London',1,'3',200,NULL,NULL),(45,'test','test','London',1,'3',200,NULL,NULL),(46,'test','test','London',1,'3',200,NULL,NULL),(47,'test','test','London',1,'3',200,NULL,NULL),(48,'test','test','London',1,'3',200,NULL,NULL),(49,'test','test','London',1,'3',200,NULL,NULL),(50,'test','test','London',1,'3',200,NULL,NULL),(51,'test','test','London',1,'3',200,NULL,NULL),(52,'test','test','London',1,'3',200,NULL,NULL),(53,'test','test','London',1,'3',200,NULL,NULL),(54,'test','test','London',1,'3',200,NULL,NULL),(55,'test','test','London',1,'3',200,NULL,NULL),(56,'test','test','London',1,'3',200,NULL,NULL),(57,'test','test','London',1,'3',200,NULL,NULL),(58,'test','test','London',1,'3',200,NULL,NULL),(59,'test','test','London',1,'3',200,NULL,NULL),(60,'test','test','London',1,'3',200,NULL,NULL),(61,'test','test','London',1,'3',200,NULL,NULL),(62,'test','test','London',1,'3',200,NULL,NULL),(63,'test','test','London',1,'3',200,NULL,NULL),(64,'test','test','London',1,'3',200,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `company` varchar(45) DEFAULT NULL,
  `district` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test','123','test1@1.com','shanghai','1'),(2,'test123123123','$2a$10$BOGopIgfka260m1CmFAjg.LnXkzjiljrWmPglhHm.jVwDxZwUSoTa','test2@1.com',NULL,NULL),(3,'test2','$2a$10$KLwsNq1XFAkTj7YHq3VtIOGk6LnrGD82vggSv5JfrKz6z0XHXTwwC','test2@2.com',NULL,NULL),(4,'test3','$2a$10$mT2JyveHfgy1FdPvF1MlnOKte9HK6/Gv3o7fTNardgzXMfIUhomI.','test3@3.com',NULL,NULL),(5,'test4','123','123123@1.com',NULL,NULL),(6,'test9','$2a$10$Dvx055bs33xj89Xz4e9Ti.WzrVSFTGKNdZEobUG4PIYoXXUeNYEnS','2@1.com',NULL,NULL),(7,'w','$2a$10$xhIHgwaJnNgQqtHs.0G/4.hoUoURC8mYRxOq.HIVwnw9G/.6RfWOu','w',NULL,NULL),(8,'ywl9909','$2a$10$0JyOztiybOgq4HGDg6kwCexYNDhKMzlm8O393lYUt/0j757yPgyh2','123',NULL,NULL),(9,'test01','$2a$10$d6AchUFz/wshKlYxDqhOfORuUjMUn29zq8kR5wPUQ9RlZulb4/hue','123',NULL,NULL),(10,'test02','$2a$10$sDfEj/obmTkbeXhumh6UQe/ZKg0eNvTGiWWk5AJ.TZd.asTM2PeLe','123',NULL,NULL),(11,'222ywl9909','$2a$10$8MePDdgG7y62bmD9ek/3UeS2vpo.vhr0tlXlHXq2LwthJuTJ0QwxK','1234',NULL,NULL),(12,'test2323','$2a$10$lGHzOGPYuzx/2Ru4sIyPfOqnm47cUHo0wlXFjF8.CsDqwE474gCvK','1',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-10  6:51:02
