import { useQuery } from '@tanstack/react-query';
import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type Users = {
  users: User[];
};

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get<Users>('/users');

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return users;
}

export function useUsers() {
  return useQuery(['users'], getUsers, { staleTime: 1000 * 5 });
}