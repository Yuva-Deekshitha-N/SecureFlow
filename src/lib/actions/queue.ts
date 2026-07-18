"use server";

import { webhookQueue } from '@/lib/queue/webhookQueue';
import { auth } from '@/auth';

export async function getQueueMetrics() {
  const session = await auth();
  const roles = (session?.user as any)?.roles || [];

  if (!roles.includes("ADMIN")) {
    throw new Error("Unauthorized");
  }

  if (process.env.NEXT_PUBLIC_MOCK_DB === 'true') {
    return {
      waiting: 2,
      active: 1,
      completed: 15,
      failed: 0,
      delayed: 0,
    };
  }

  const counts = await webhookQueue.getJobCounts('waiting', 'active', 'completed', 'failed', 'delayed');
  return counts;
}
