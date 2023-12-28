export const API_ENDPOINTS = {
	auth: {
		register: '/auth',
		login: '/auth/login',
	},
	branch: '/branch',
	branchTable: '/branch-table',
	category: '/category',
	client: '/client',
	food: '/food',
	order: '/order',
	review: '/review',
	user: '/user',
} as const;
