create table users
(
	user_id int primary key,
	username varchar(255),
	email varchar(255),
	password varchar(255),
	permission_level int 
);

create table newsletter_entry
(
	entry_id int primary key,
	entry_date timestamp,
	entry_title varchar(255),
	entry_text text
);

create table tournament
(
	tournament_id int primary key,
	tournament_name varchar(255),
	tournament_date timestamp,
	tournament_title varchar(255),
	tournament_desc text
);

create table match
(
	match_id int primary key,
	user1 int references users,
	user2 int references users,
	sets_user1 int,
	sets_user2 int,
	tournament_id int references tournament
);


