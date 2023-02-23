import { db } from "$lib/server/db"

export const load = async ({ params }) => {
	return {
		lazy: {
			server: db.getServerById(params.serverId),
		},
	}
}