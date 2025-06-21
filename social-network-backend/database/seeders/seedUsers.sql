INSERT INTO users (first_name, last_name, birth_date, alias, email, password)
VALUES
  ('Juan', 'Pérez', '1990-05-10', 'juanp', 'juan@example.com', '$2b$10$QWERTYUIOPasdfghjklzxcvbnm1234567890abcd'),
  ('Ana', 'García', '1992-08-15', 'anag', 'ana@example.com', '$2b$10$ZXCVBNMasdfghjklqwertyuiop1234567890abcd'),
  ('Luis', 'Martínez', '1988-12-01', 'luism', 'luis@example.com', '$2b$10$MNBVCXZlkjhgfdsaqwertyuiop1234567890abc');

-- Seed de publicaciones (una por usuario)
INSERT INTO posts (user_id, message)
SELECT id, '¡Hola, esta es mi primera publicación!' FROM users WHERE alias = 'juanp';
INSERT INTO posts (user_id, message)
SELECT id, 'Encantada de unirme a la red social.' FROM users WHERE alias = 'anag';
INSERT INTO posts (user_id, message)
SELECT id, '¡Saludos a todos!' FROM users WHERE alias = 'luism';

-- Seed de likes de ejemplo
INSERT INTO likes (user_id, post_id)
SELECT u.id, p.id FROM users u, posts p WHERE u.alias = 'anag' AND p.message = '¡Hola, esta es mi primera publicación!';
INSERT INTO likes (user_id, post_id)
SELECT u.id, p.id FROM users u, posts p WHERE u.alias = 'luism' AND p.message = '¡Hola, esta es mi primera publicación!';
INSERT INTO likes (user_id, post_id)
SELECT u.id, p.id FROM users u, posts p WHERE u.alias = 'juanp' AND p.message = 'Encantada de unirme a la red social.';
INSERT INTO likes (user_id, post_id)
SELECT u.id, p.id FROM users u, posts p WHERE u.alias = 'juanp' AND p.message = '¡Saludos a todos!';
INSERT INTO likes (user_id, post_id)
SELECT u.id, p.id FROM users u, posts p WHERE u.alias = 'anag' AND p.message = '¡Saludos a todos!';