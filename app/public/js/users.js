// 即時関数でモジュール化
const usersModule = (() =>{
    const BASE_URL = "http://localhost:3000/api/v1/users"

    return {
        fetchAllUsers: async () => {
            const res = await fetch(BASE_URL)
            const users = await res.json()

            for (let i=0; i < users.length; i++) {
                const user = users[i]
                const body = `<tr>
                                <tr>${user.id}</td>
                                <tr>${user.name}</td>
                                <tr>${user.profile}</td>
                                <tr>${user.date_of_birth}</td>
                                <tr>${user.created_at}</td>
                                <tr>${user.updated_at}</td>
                              </tr>`
            }
        }
    }
}) ()