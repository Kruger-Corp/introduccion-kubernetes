CREATE SEQUENCE IF NOT EXISTS s_game START WITH 1 INCREMENT BY 1;

CREATE TABLE IF NOT EXISTS t_game (
  id INT NOT NULL DEFAULT nextval('s_game'),
  name VARCHAR(64),
  description TEXT,
  views VARCHAR(32),
  cover VARCHAR(32),
  CONSTRAINT pk_game PRIMARY KEY (id)
);