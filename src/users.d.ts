declare module "users.json" {
  export const users: {
    id: number;
    email: string;
    password: string;
    role: 'admin' | 'syndicate';
    name: string;
  }[];
}
