/**
 * Hook for fetching user data from the API
 */

import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../helpers/api";
import type { User } from "../helpers/api";

export function useUserData() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return { data: data as User[], isLoading, error };
}
