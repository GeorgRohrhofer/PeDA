--TODO: INSERT TEST DATA

insert into users (user_id, username, email, password, permission_level)
	values ((select count(user_id) + 1 from users), 'Admin', 'georg.rohrhofer@gmail.com', 'pass', 0);

insert into newsletter_entry (entry_id, entry_date, entry_title, entry_text) 
	values ((select count(entry_id) + 1 from newsletter_entry), CURRENT_TIMESTAMP, 'Titel des Testartikels', 'Das ist ein Testtext. Und ich hoffe das das funktioniert.');
