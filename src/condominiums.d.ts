declare module "condominiums.json" {
  export const condominiums: {
    id: number;
    name: string;
    address: string;
    userIds: number[];
  }[];
}
