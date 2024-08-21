import { getServerSession, type NextAuthOptions } from "next-auth";
import prisma from "./db";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async session({ session }) {
      const sessionUser = await prisma.user.findUniqueOrThrow({
        where: { email: session.user.email || "" },
      });

      if (session.user) {
        session.user.id = sessionUser.id;
      }

      return session;
    },
    async signIn({ user, account, profile }) {
      if (!profile || !profile.email || !profile.name) {
        return false;
      }

      try {
        // Check if the user already exists
        let existingUser = await prisma.user.findUnique({
          where: { email: profile.email },
        });

        // If the user does not exist, create a new user
        if (!existingUser) {
          console.log(profile);
          existingUser = await prisma.user.create({
            data: {
              email: profile.email,
              username: profile.name,
              image: user.image || "", // Use an empty string if no image is provided
            },
          });
        }

        // You can do additional logic here if needed

        return true;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
  },
} satisfies NextAuthOptions;

export const getSession = () => getServerSession(authOptions)
