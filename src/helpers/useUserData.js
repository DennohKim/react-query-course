import { useQuery } from "react-query";


export function useUserData(userId){
    const usersData = useQuery(
        ["users", userId],
        async ()=> {
            const res = await fetch(`api/users/${userId}`)
            return await res.json()
        }
    )

    return usersData;
}