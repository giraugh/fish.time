-- DropForeignKey
ALTER TABLE "Timer" DROP CONSTRAINT "Timer_projectID_fkey";

-- AlterTable
ALTER TABLE "Timer" ALTER COLUMN "projectID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Timer" ADD CONSTRAINT "Timer_projectID_fkey" FOREIGN KEY ("projectID") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
