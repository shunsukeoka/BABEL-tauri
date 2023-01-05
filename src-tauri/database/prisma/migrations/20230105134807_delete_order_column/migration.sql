/*
  Warnings:

  - You are about to drop the column `order` on the `RootDirectory` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RootDirectory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_RootDirectory" ("createdAt", "id", "path", "updatedAt") SELECT "createdAt", "id", "path", "updatedAt" FROM "RootDirectory";
DROP TABLE "RootDirectory";
ALTER TABLE "new_RootDirectory" RENAME TO "RootDirectory";
CREATE UNIQUE INDEX "RootDirectory_path_key" ON "RootDirectory"("path");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
