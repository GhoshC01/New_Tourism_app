function App() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                <h1 className="text-2xl font-bold mb-4">Search Your Destinations</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Search:</label>
                    <div className="relative">
                        <input type="text" placeholder="Search" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Select Your Date:</label>
                    <div className="relative">
                        <input type="text" placeholder="Select Your Date" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <i className="far fa-calendar-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Select Your Date:</label>
                    <div className="relative">
                        <input type="text" placeholder="Select Your Date" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <i className="far fa-calendar-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">No. of Person:</label>
                    <div className="relative">
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>No. of person</option>
                        </select>
                        <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                </div>
                <button className="w-full bg-red-500 text-white py-2 rounded-lg">Search</button>
            </div>
        </div>
    );
}