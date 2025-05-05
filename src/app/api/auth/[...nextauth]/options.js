import CredentialsProvider from 'next-auth/providers/credentials';
import { randomBytes } from 'crypto';
export const fakeUsers = [{
  id: '1',
  email: 'user@demo.com',
  username: 'demo_user',
  password: '123456',
  firstName: 'Demo',
  lastName: 'User',
  role: 'Admin',
  token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImF1ZCI6Imh0dHBzOi8vY29kZXJ0aGVtZXMuY29tLyIsInN1YiI6InN1cHBvcnRAY29kZXJ0aGVtZXMuY29tIiwibGFzdE5hbWUiOiJDb2RlcnRoZW1lcyIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJSYXNrZXROZXh0In0.9uS1E8eoj3pvW-1gxnOfaxP7uTn5mJ90Hwa37kXI7UlCL_DHfwDj2-W9K3o5Yw7EP4Mtf_bSHd4N2mqRnQRvHQ'
}];
export const options = {
  providers: [CredentialsProvider({
    name: 'credentials',
    credentials: {
      email: {
        label: 'Email:',
        type: 'text',
        placeholder: 'Enter your username'
      },
      password: {
        label: 'Password',
        type: 'password'
      }
    },
    async authorize(credentials, req) {
      const filteredUser = fakeUsers.find(user => {
        return user.email === credentials?.email && user.password === credentials?.password;
      });
      if (filteredUser) {
        return filteredUser;
      } else {
        throw new Error('Email or Password is not valid');
      }
    }
  })],
  secret: 'kvwLrfri/MBznUCofIoRH9+NvGu6GqvVdqO3mor1GuA=',
  pages: {
    signIn: '/auth/login'
  },
  callbacks: {
    async signIn({
      user,
      account,
      profile,
      email,
      credentials
    }) {
      return true;
    },
    session: ({
      session,
      token
    }) => {
      session.user = {
        email: 'user@demo.com',
        name: 'Test User'
      };
      return Promise.resolve(session);
    }
  },
  session: {
    maxAge: 24 * 60 * 60 * 1000,
    generateSessionToken: () => {
      return randomBytes(32).toString('hex');
    }
  }
};