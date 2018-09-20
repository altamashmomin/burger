drop database if exists burgers_db;
create database burgers_db;
use burgers_db;

create table burgers (
id int not null auto_increment, 
burger_name varchar(50) not null,
devoured boolean default false,
primary key(id)
);


INSERT INTO burgers (burger_name, devoured) VALUES ('Cheeseburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Crispy Chicken Sandwich', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Doublestack', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Cheeseburger Deluxe', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Spicy Crispy Chicken Sandwich', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Cheeseburger Deluxe', true);
