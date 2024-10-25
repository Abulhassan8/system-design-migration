CREATE TABLE payments(
  customer_name varchar(128),
  processed_at date,
  amount int
);

CREATE TABLE balances(
  username varchar(128),
  balance int
);

CREATE TABLE large_table(
  random_int int
);

INSERT INTO payments VALUES('abul', '2019-12-02', 10);
INSERT INTO payments VALUES('basil', '2022-11-03', 20);
INSERT INTO payments VALUES('chad', '2023-10-03', 30);
INSERT INTO payments VALUES('dawg', '2024-09-01', 40);
INSERT INTO payments VALUES('emil', '2020-07-24', 100);
INSERT INTO payments VALUES('abul', '2021-01-29', 30);
INSERT INTO payments VALUES('dawg', '2024-02-19', 10);
INSERT INTO payments VALUES('geo', '2022-05-18', 120);
INSERT INTO payments VALUES('emil', '2019-02-05', 80);
INSERT INTO payments VALUES('chad', '2018-04-05', 90);
INSERT INTO payments VALUES('abul', '2024-10-05', 110);
INSERT INTO payments VALUES('basil', '2023-10-05', 50);
INSERT INTO payments VALUES('chad', '2020-06-05', 60);

INSERT INTO balances VALUES('abul', 1000);
INSERT INTO balances VALUES('basil', 500);

INSERT INTO large_table (random_int)
SELECT round(random() * 1000000000)
FROM generate_series(1, 50000000) s(i);