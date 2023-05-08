-- CreateTable
CREATE TABLE "Beer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT,
    "price" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Beer_name_key" ON "Beer"("name");
