/*
  Warnings:

  - Added the required column `updatedAt` to the `RootDirectory` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RootDirectory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_RootDirectory" ("id", "path") SELECT "id", "path" FROM "RootDirectory";
DROP TABLE "RootDirectory";
ALTER TABLE "new_RootDirectory" RENAME TO "RootDirectory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
