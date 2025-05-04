import { PrismaClient } from '@prisma/client';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

/**
 * Helper function to handle Prisma errors consistently
 */
export async function handleDbError<T>(promise: Promise<T>): Promise<[T | null, Error | null]> {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    console.error('Database error:', error);
    return [null, error as Error];
  }
}

/**
 * Utility function to safely create a transaction
 */
export async function transaction<T>(
  callback: (tx: PrismaClient) => Promise<T>
): Promise<[T | null, Error | null]> {
  try {
    const result = await prisma.$transaction(async (tx) => {
      return await callback(tx as unknown as PrismaClient);
    });
    return [result, null];
  } catch (error) {
    console.error('Transaction error:', error);
    return [null, error as Error];
  }
} 