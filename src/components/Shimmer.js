const Shimmer = ()=>{
    return(
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-50 min-h-screen">
        {Array(16).fill("").map((_, i) => (
            <div key={i} className="w-[250px] bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                <div className="h-[160px] bg-gray-200"></div>
                <div className="p-3 space-y-3">
                    <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
            </div>
        ))}
    </div>
    )
}

export default Shimmer;
