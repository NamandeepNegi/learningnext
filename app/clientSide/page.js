'use client'

import { useEffect, useState } from 'react'
import SingleuserCard from '../components/SingleUser'

export default function CLientSide() {
    const [allUsers, setAllUsers] = useState()
    const [loading, setLoading] = useState(true)
    const url = "https://dummyjson.com/users"
    const fetchUsers = async () => {
        const result = await fetch(url)
        const r = await result.json()
        if(r?.users?.length > 0){
            setLoading(false)
        }
        setAllUsers(r.users)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-6xl font-bold my-4'>Client side compoennt</h1>
            <div className='flex flex-wrap justify-center items-center content-center gap-10 my-10 mx-10'>
            {loading && <div>Loading...</div>}
                {allUsers && allUsers.map((userData) => <SingleuserCard key={userData.id} userData={userData} />)}
            </div>
        </div>
    )
}