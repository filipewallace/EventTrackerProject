-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema musicdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `musicdb` ;

-- -----------------------------------------------------
-- Schema musicdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `musicdb` DEFAULT CHARACTER SET utf8 ;
USE `musicdb` ;

-- -----------------------------------------------------
-- Table `music`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `music` ;

CREATE TABLE IF NOT EXISTS `music` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `artist` VARCHAR(45) NOT NULL,
  `album` VARCHAR(45) NULL,
  `song_title` VARCHAR(45) NOT NULL,
  `music_link` TEXT(1000) NULL,
  `date` DATE NULL,
  `description` VARCHAR(1000) NULL,
  `album_pic` TEXT(1000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS musicuser;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'musicuser' IDENTIFIED BY 'musicuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'musicuser';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `music`
-- -----------------------------------------------------
START TRANSACTION;
USE `musicdb`;
INSERT INTO `music` (`id`, `artist`, `album`, `song_title`, `music_link`, `date`, `description`, `album_pic`) VALUES (1, 'BTS', 'You Never Walk Alone', 'Blood Sweat & Tears', NULL, '2022-06-03', 'My first BTS song I ever heard', NULL);
INSERT INTO `music` (`id`, `artist`, `album`, `song_title`, `music_link`, `date`, `description`, `album_pic`) VALUES (2, 'TXT', 'The Chaos Chapter: FREEZE', 'Anti-Romantic', NULL, '2022-06-02', 'Best song for when you want to stay lonely', NULL);
INSERT INTO `music` (`id`, `artist`, `album`, `song_title`, `music_link`, `date`, `description`, `album_pic`) VALUES (3, 'Twice', 'The Feels', 'The Feels', NULL, '2022-06-01', 'The song you play when you\'re crushing on someone', NULL);
INSERT INTO `music` (`id`, `artist`, `album`, `song_title`, `music_link`, `date`, `description`, `album_pic`) VALUES (4, 'Kim-Woo-sung', 'Genre', 'Lazy', NULL, '2022-05-31', 'Such a good lazy day song', NULL);
INSERT INTO `music` (`id`, `artist`, `album`, `song_title`, `music_link`, `date`, `description`, `album_pic`) VALUES (5, 'NCT Dream', 'Hot Sauce', 'Hot Sauce', NULL, '2022-05-30', 'Just a bop honestly', NULL);
INSERT INTO `music` (`id`, `artist`, `album`, `song_title`, `music_link`, `date`, `description`, `album_pic`) VALUES (6, 'BeO', 'Counting Stars', 'Counting Stars', NULL, '2022-05-29', 'Don\'t usually like rap songs but this one slaps', NULL);
INSERT INTO `music` (`id`, `artist`, `album`, `song_title`, `music_link`, `date`, `description`, `album_pic`) VALUES (7, 'Blackpink', 'The Album', 'Ice Cream', NULL, '2022-05-28', 'Listen to this when you\'re feeling saucy', NULL);
INSERT INTO `music` (`id`, `artist`, `album`, `song_title`, `music_link`, `date`, `description`, `album_pic`) VALUES (8, 'Day6', 'The Book of Us', 'You Make Me', NULL, '2022-05-27', 'Listen to this when you\'re feeling emotional and want to belt out a song but dont have vocal skills', NULL);

COMMIT;

