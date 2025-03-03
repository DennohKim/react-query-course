import { useQuery } from "react-query";

//fetch list of users
export function useUserData(userId){
    const usersData = useQuery(
        ["users", userId],
        async ()=> {
            const res = await fetch(`api/users/${userId}`)
            return await res.json()
        },
        {
            staleTime: 1000 * 60 * 5
        }
    )

    return usersData;
}