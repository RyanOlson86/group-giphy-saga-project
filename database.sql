-- Database name should be: giphy_search_favorites

-- Categories table:
CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change these. 🙂
INSERT INTO "categories"
  ("name")
  VALUES
  ('none'),
  ('wild'),
  ('uproarious'),
  ('poignant'),
  ('felicitous'),
  ('whimsical');

-- Favorites table:
CREATE TABLE "favorites" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR NOT NULL,
  "category_id" INTEGER REFERENCES categories DEFAULT 1
);

-- insert gif
INSERT INTO "favorites"
  ("url")
  VALUES
  ('https://media2.giphy.com/media/yoJC2B1sHdXJjPTnEs/giphy.gif?cid=d6b2bd64slimyckfmx5pngaq8bqj70lcnfegl7aay14s7ib1&ep=v1_gifs_search&rid=giphy.gif&ct=g');
  
-- update category on gif
UPDATE "favorites" SET category_id = 2 WHERE "id"=1;

-- Select all favorites
SELECT favorites.id, favorites.url, categories.name
FROM "favorites"
JOIN categories ON categories.id = favorites.category_id;


-- You'll need a "favorites" table for storing each instance of
-- a Giphy image that has been "favorited."
-- Each favorite image can be assigned one of the existing
-- categories via foreign key. This is a one-to-many relationship:
--    One favorite has one category.
--    One category can be had by many favorites.