import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ["isAdmin", user],
    queryFn: async () => {
      try {
        const res = await axios.get(`http://localhost:5000/user/admin/${user?.email}`);
        if (res.data && res.data !== undefined) {
          return res.data
        } else {
          return null;
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
        throw error;
      }
    },
  });

  return [isAdmin, isLoading];
};

export default useAdmin;
