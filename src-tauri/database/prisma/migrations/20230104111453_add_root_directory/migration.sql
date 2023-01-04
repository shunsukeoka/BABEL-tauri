/*
  Warnings:

  - You are about to drop the `FileInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "FileInfo";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "RootDirectory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL
);
