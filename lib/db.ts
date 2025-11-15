import { PrismaClient } from '@/prisma/app/generated/prisma/client'

const prisma = new PrismaClient()

export { prisma }