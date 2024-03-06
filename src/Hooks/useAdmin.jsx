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
        console.log(res.data);

        // Check if the data is undefined
        if (res.data && res.data !== undefined) {
          return res.data
        } else {
          // Handle the case where data is undefined (return a default value or handle accordingly)
          return null; // Replace with your desired default value or appropriate handling
        }
      } catch (error) {
        // Handle the error (throw or return an appropriate value)
        console.error("Error fetching admin data:", error);
        throw error;
      }
    },
  });

  return [isAdmin, isLoading];
};

export default useAdmin;
