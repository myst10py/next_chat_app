import { authOptions } from "@/auth"
import NextAuth from "next-auth"
import { NextAuthOptions } from "next-auth"

const handler = NextAuth(authOptions) 

export { handler as GET, handler as POST }