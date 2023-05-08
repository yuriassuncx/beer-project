/*
  Warnings:

  - Added the required column `image_url` to the `Beer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Beer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT,
    "image_url" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);
INSERT INTO "new_Beer" ("description", "id", "name", "price", "type") SELECT "description", "id", "name", "price", "type" FROM "Beer";
DROP TABLE "Beer";
ALTER TABLE "new_Beer" RENAME TO "Beer";
CREATE UNIQUE INDEX "Beer_name_key" ON "Beer"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
