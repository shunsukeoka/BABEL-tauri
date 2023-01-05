/*
  Warnings:

  - A unique constraint covering the columns `[id,path]` on the table `RootDirectory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "RootDirectory_id_path_key" ON "RootDirectory"("id", "path");
