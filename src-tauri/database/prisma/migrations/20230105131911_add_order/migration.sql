/*
  Warnings:

  - Added the required column `order` to the `RootDirectory` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RootDirectory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_RootDirectory" ("createdAt", "id", "path", "updatedAt") SELECT "createdAt", "id", "path", "updatedAt" FROM "RootDirectory";
DROP TABLE "RootDirectory";
ALTER TABLE "new_RootDirectory" RENAME TO "RootDirectory";
CREATE UNIQUE INDEX "RootDirectory_path_key" ON "RootDirectory"("path");
CREATE UNIQUE INDEX "RootDirectory_order_key" ON "RootDirectory"("order");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
