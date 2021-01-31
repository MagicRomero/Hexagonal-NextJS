import { AuthRepository } from "./Repositories";

export const AUTH_REPOSITORY: string = "auth";

const repositories = {
  [AUTH_REPOSITORY]: AuthRepository,
};

export const HttpRepositoryFactory = {
  get: (name: string) => repositories[name],
};
