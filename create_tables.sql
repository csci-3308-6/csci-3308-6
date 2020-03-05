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

  colors text[],              /* arrays for items bought in store, user can change current_color from this array */
  shapes text[],
  current_shape VARCHAR(10),  /* current shape and color of user to display on screen */
  current_color VARCHAR(10)

  PRIMARY KEY (id)
);

INSERT INTO user_info ()      /* when new user is created add all this info */
VALUES (); /* change " " to user input strings ?? */

/* current_color and current_shape need to be updated immediatly when user is created -- arrays need to be updated as new stuff is bought -- current needs to be changed when user changes his color */


/*
  may be more efficent in future to have seprate tables for accessing information
*/
