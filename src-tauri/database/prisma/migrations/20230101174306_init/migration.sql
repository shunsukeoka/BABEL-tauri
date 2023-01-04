-- CreateTable
CREATE TABLE "FileInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "is_dir" BOOLEAN NOT NULL DEFAULT false,
    "ext" TEXT
);
