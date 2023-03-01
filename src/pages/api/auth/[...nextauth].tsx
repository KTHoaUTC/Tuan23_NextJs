import React, { use } from "react";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth";
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as any;
        const res = await fetch("http://localhost:3100/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
        const user = await res.json();
        if (res.ok && user) {
          return user;
        } else return null;
      },
    }),
  ],
  callbacks:{
    jwt: ({token, user})=>{
      if(user){
        token.id= user.id;
      }
      return token
    },
    // session: ({session, token})=>{
    //   if(token){
    //     session.id = token.id;
    //   }
    //   return session
    // }
  },
  secret:"test",
  jwt:{
    secret:"test",
    // encryption:true,
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/Auth/",
  },
};
export default NextAuth(authOptions);
