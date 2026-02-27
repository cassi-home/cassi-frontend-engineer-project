import type { ServiceRequest } from '$lib/types';

export const serviceRequests = $state<{ items: ServiceRequest[] }>({ items: [] });
