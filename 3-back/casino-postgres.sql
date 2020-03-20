CREATE SCHEMA IF NOT EXISTS sdtdb;

CREATE TABLE IF NOT EXISTS users (
	user_ID SERIAL,
    username VARCHAR(45) NULL,
    user_password VARCHAR(45) NULL,
    stats_ID INT,
    display_ID INT,
    PRIMARY KEY (user_ID)
);

CREATE TABLE IF NOT EXISTS display (
	display_ID SERIAL,
    display_name VARCHAR(45),
	shape VARCHAR(45) NULL,
    color VARCHAR(45) NULL,
    PRIMARY KEY (display_ID)
);


CREATE TABLE IF NOT EXISTS stats (
	stats_ID SERIAL,
    games_played INT,
    account_balance INT,
    games_won INT,
    games_lost INT,
    net_profit INT,
    PRIMARY KEY(stats_ID)
);

ALTER TABLE users
	ADD CONSTRAINT fk_cons
    FOREIGN KEY (stats_ID) REFERENCES stats (stats_ID);

ALTER TABLE users
	ADD CONSTRAINT disp_cons
    FOREIGN KEY (display_ID) REFERENCES display (display_ID);

CREATE TABLE IF NOT EXISTS token (
	token_ID SERIAL,
    shape VARCHAR(45) NULL,
    color VARCHAR(45) NULL,
    PRIMARY KEY(token_ID)
);

CREATE TABLE IF NOT EXISTS user_token (
	token_ID INT ,
    user_ID INT,
    PRIMARY KEY(token_ID, user_ID)
);

INSERT INTO users (username, user_password)
	VALUES ('tecon321', 'password');

INSERT INTO users (username, user_password)
	VALUES ('joe', '1234');

SELECT * FROM users;
