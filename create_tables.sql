/* document to create user database table */
/* document to create user database table */

CREATE TABLE user_info (            /* general user information */
  id INT UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  passowrd VARCHAR(20) NOT NULL,       /* NEEDS TO BE MADE PRIVATE SOMEHOW */
  display_name VARCHAR(2),
  points INT,
  current_shape VARCHAR(10),
  current_color VARCHAR(10),
  date_created DATE,
  PRIMARY KEY (id)
);


CREATE TABLE games_played(            /* for displaying info */
  id INT refrences user_info(id),    /* not sure if this is correct syntax or if this is the correct way to easily access data (by user id?)*/
  num_games_played INT NOT NULL,
  games_won INT,
);


CREATE TABLE items_bought (
  colors text[],              /* arrays for items bought in store */
  shapes text[],
);
