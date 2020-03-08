/* document to create user database table */

CREATE TABLE user_info (            /* general user information */
  id INT UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  passowrd VARCHAR(20) NOT NULL,       /* NEEDS TO BE MADE PRIVATE SOMEHOW */
  display_name VARCHAR(2),
  points FLOAT,
  date_created DATE,

  num_games_played INT NOT NULL,
  games_won INT,

  current_shape VARCHAR(10),  /* current shape and color of user to display on screen */
  current_color VARCHAR(10)

  PRIMARY KEY (id)
);

INSERT INTO user_info ()      /* when new user is created add all this info */
VALUES ();


CREATE TABLE inventory(

);



/*
  1. need to find a way to hold inventory of items bought from store
      - someone was syaing three tables, and one center table with somethin idk
  2. may be more efficent in future to have seprate tables for accessing information
*/
