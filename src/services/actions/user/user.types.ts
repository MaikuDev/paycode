interface userArgType {
  password?: string;
  email?: string;
}

type SignInArgsType = [userArgType];

interface ProfileType {
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  phone: string;
  email: string;
}

export type { ProfileType, SignInArgsType };
