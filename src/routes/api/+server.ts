import type { RequestEvent } from '@sveltejs/kit';

export function GET({ url }: RequestEvent) {
	const name = url.searchParams.get('name') || 'world';
	return new Response(`Hello, ${name}!`);
}
