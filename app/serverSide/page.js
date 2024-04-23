import SingleuserCard from "../components/SingleUser"

async function getData() {
    const url = "https://dummyjson.com/users"
    const res = await fetch(url)
    return await res.json()

}

export default async function clientSide() {
    const allUsers = await getData()
    return <div className='flex flex-col items-center'>
        <h1 className='text-6xl font-bold my-4'>Server side compoennt</h1>
        <div className='flex flex-wrap justify-center items-center content-center gap-10 my-10 mx-10'>
            {allUsers?.users && allUsers?.users.map((userData) => <SingleuserCard key={userData.id} userData={userData} />)}
        </div>
    </div>
}
