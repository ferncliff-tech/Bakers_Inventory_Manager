import { PrismaClient as PrismaClientPostgresql } from '../prisma/generated/postgresql'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClientPostgresql()

export default prisma