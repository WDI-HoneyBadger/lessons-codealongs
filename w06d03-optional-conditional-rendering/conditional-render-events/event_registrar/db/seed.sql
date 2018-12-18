DROP DATABASE IF EXISTS event_registrar;
CREATE DATABASE event_registrar;

\c event_registrar;

CREATE TABLE users(
  id serial primary key,
  email varchar UNIQUE NOT NULL,
  password_digest varchar NOT NULL
);

CREATE TABLE events(
  id serial primary key,
  name varchar,
  description varchar
);

CREATE TABLE user_events(
  user_id INT NOT NULL,
  event_id INT NOT NULL,
  foreign key(user_id) REFERENCES users,
  foreign key(event_id) REFERENCES events
);

INSERT INTO events
  (name, description)
VALUES 
  ('Caffeinated Blood Donation', 'Come drink coffee before donating blood to programmers in need'),
  ('Toaster Crumb Food Drive', 'Turn your toaster upside-down over a bucket.  We''ll remake the bits into bread!'),
  ('Puppy Surfing', 'Grab a puppy, put it in the ocean, ride a wave'),
  ('Puppy Lifeguarding', 'Save drowning puppies from their riders');
