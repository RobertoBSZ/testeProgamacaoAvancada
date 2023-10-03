/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomePcnte" TEXT NOT NULL,
    "senha" INTEGER NOT NULL,
    "usuario" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Secretaria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "RG" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "nomePacnte" TEXT NOT NULL,
    "nomeSecretaria" TEXT NOT NULL,
    "nomeDents" TEXT NOT NULL,
    CONSTRAINT "Consulta_nomePacnte_fkey" FOREIGN KEY ("nomePacnte") REFERENCES "Paciente" ("nomePcnte") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Consulta_nomeSecretaria_fkey" FOREIGN KEY ("nomeSecretaria") REFERENCES "Secretaria" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "nomePaciente" TEXT NOT NULL,
    CONSTRAINT "Agenda_nomePaciente_fkey" FOREIGN KEY ("nomePaciente") REFERENCES "Paciente" ("nomePcnte") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AgendaToConsulta" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AgendaToConsulta_A_fkey" FOREIGN KEY ("A") REFERENCES "Agenda" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AgendaToConsulta_B_fkey" FOREIGN KEY ("B") REFERENCES "Consulta" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_nomePcnte_key" ON "Paciente"("nomePcnte");

-- CreateIndex
CREATE UNIQUE INDEX "Secretaria_nome_key" ON "Secretaria"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "_AgendaToConsulta_AB_unique" ON "_AgendaToConsulta"("A", "B");

-- CreateIndex
CREATE INDEX "_AgendaToConsulta_B_index" ON "_AgendaToConsulta"("B");
