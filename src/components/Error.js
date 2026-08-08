import { useRouteError } from "react-router-dom"
const Error= ()=>{
    const err=useRouteError();
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-4xl font-bold text-orange-600">Oops!!!</h1>
            <h2 className="text-xl text-gray-600 mt-3">Something went wrong....!!!!</h2>
            <p className="text-gray-500 mt-2">{err.status} - {err.statusText}</p>
        </div>
    )
}

export default Error
