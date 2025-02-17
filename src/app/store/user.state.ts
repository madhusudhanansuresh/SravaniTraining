export interface User {
    id: number;
    firstName: string;
    email: string;
  }
  
  export interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
  }
  
  export const initialUserState: UserState = {
    users: [],
    loading: false,
    error: null,
  };
  