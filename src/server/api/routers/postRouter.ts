import { z } from "zod";
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

    readByTitle: publicProcedure
        .input(
            z.object({
                title: z.string(),
            }),
        )
        .query(async ({ ctx, input }) => {
            const post = await ctx.db.post.findUnique({
                where: {
                    title: input.title,
                },
            });
            if (!post) {
                throw new Error("Post not found");
            }
            return post;  // No need for await here
        }),

    readByTitleWithIncrement: publicProcedure
        .input(
            z.object({
                title: z.string(),
            }),
        )
        .query(async ({ ctx, input }) => {
            // const { title } = input;
            const post = await ctx.db.post.findUnique({
                where: { title: input.title, },
            });
            if (!post) {
                throw new Error("Post not found");
            }
            const updatedPost = await ctx.db.post.update({
                where: { title: input.title, },
                data: {
                    views: post.views + 1,
                },
                include: {
                    tags: true, // Include the tags relation
                },
            });
            return updatedPost;
        }),
});
