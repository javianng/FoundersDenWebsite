import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.db.post.findMany();
    }),

    getLatest: publicProcedure.query(({ ctx }) => {
        return ctx.db.post.findFirst({
            orderBy: { createdAt: "desc" },
        });
    }),

    getTrending: publicProcedure.query(({ ctx }) => {
        return ctx.db.post.findMany({
            orderBy: { views: "desc" }, // Assuming 'view' is the property for popularity
            take: 6, // Get the top 6 trending posts
        });
    }),
});
