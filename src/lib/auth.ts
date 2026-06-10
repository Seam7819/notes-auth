import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { twoFactor } from "better-auth/plugins"

// If your Prisma file is located elsewhere, you can change the path

export const auth = betterAuth({

    appName: "Lab log",
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
            redirectURI: `${process.env.FRONTEND_URL}/api/auth/callback/github`
        }
    },
    emailAndPassword: {
        enabled: true
    },
    trustedOrigins: [process.env.FRONTEND_URL!],
    plugins: [
        twoFactor({
          	otpOptions: {
				async sendOTP({ user, otp }, ctx) {
                    console.log(user,otp);
				},
			},
        })
    ]
});