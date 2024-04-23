export default function SingleuserCard({ userData }) {
    return <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={userData?.image} alt={`${userData?.firstName} ${userData?.lastName}`} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{userData?.firstName} {userData?.lastName}</div>
            <p className="text-gray-700 text-base">
                Address: {userData?.address.address}, {userData?.address.city}, {userData?.address.state}, {userData?.address.postalCode}<br />
                Age: {userData?.age}<br />
                Birth Date: {userData?.birthDate}<br />
                Blood Group: {userData?.bloodGroup}<br />
                Company: {userData?.company.name}<br />
                Department: {userData?.company.department}<br />
                Title: {userData?.company.title}<br />
                Email: {userData?.email}<br />
                Phone: {userData?.phone}<br />
                Gender: {userData?.gender}<br />
                Height: {userData?.height} cm<br />
                Weight: {userData?.weight} kg<br />
            </p>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#bank</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Domain: {userData?.domain}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">University: {userData?.university}</span>
        </div>
    </div>
}