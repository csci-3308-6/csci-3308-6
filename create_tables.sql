/* document to create user database table */

CREATE TABLE user_info (            /* general user information */
  id INT UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  passowrd VARCHAR(20) NOT NULL,       /* NEEDS TO BE MADE PRIVATE SOMEHOW */
  display_name VARCHAR(2),
  points FLOAT,
  date_created DATE,
  PRIMARY KEY (id)
);

INSERT INTO user_info (id, email, password, display_name, date_created)      /* when new user is created add all this info */
VALUES ("unique id number", "email", "password", "display name", "date_created"); /* change " " to user input strings ?? */


CREATE TABLE games_played(
  id INT UNIQUE NOT NULL,
  num_games_played INT NOT NULL,
  games_won INT,
  PRIMARY KEY (id)
);

INSERT INTO games_played
VALUES ("ID", 0, 0);   /* when user is created id is set and games played/wom = 0
                          bus needs to be updated differently */


CREATE TABLE display_user_data (
  id INT UNIQUE NOT NULL,
  colors text[],              /* arrays for items bought in store, user can change current_color from this array */
  shapes text[],
  current_shape VARCHAR(10),  /* current shape and color of user to display on screen */
  current_color VARCHAR(10),
  PRIMARY KEY (id)
); /* current_color and current_shape need to be updated immediatly when user is created -- arrays need to be updated as new stuff is bought -- current needs to be changed when user changes his color */

/*
  idk if haveing an id number on every table is inefficent or unneccassary
  but we need some sort of way to access all 3 tables by one id#
  every user should own one row on each table
*/
