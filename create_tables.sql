/* document to create user database table */
/* document to create user database table */

CREATE TABLE user_info (            /* general user information */
  id INT UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  passowrd VARCHAR(20) NOT NULL,       /* NEEDS TO BE MADE PRIVATE SOMEHOW */
  display_name VARCHAR(2),
  points FLOAT,
  current_shape VARCHAR(10),
  current_color VARCHAR(10),
  date_created DATE,
  PRIMARY KEY (id)
);


CREATE TABLE games_played(            /* for displaying info */
  num_games_played INT NOT NULL,
  games_won INT,
  /* foriegn key? */
);


CREATE TABLE items_bought (
  colors text[],              /* arrays for items bought in store */
  shapes text[],
  /* foriegn key? */
);
