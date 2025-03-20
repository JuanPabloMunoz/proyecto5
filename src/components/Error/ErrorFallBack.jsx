



export const atrapaError = ({ error, resetErrorBoundary }) => {
    return(
        <>
            <div role="alert">
            console.log("estoy aqui")
            <h3>Algo Slaio Mal...</h3>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Reintentar</button>
            </div>
        </>   
    )
   
}



/*
export const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return(
        <>
            <div role="alert">
            console.log("estoy aqui")
            <h3>Algo Slaio Mal...</h3>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Reintentar</button>
            </div>
        </>   
    )
    
    
}
    */