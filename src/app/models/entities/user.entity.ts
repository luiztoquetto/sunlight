export interface UserEntity {
  id: number;
  email: string;
  password: string;
  role: 'admin' | 'syndicate';
  name: string;
}
