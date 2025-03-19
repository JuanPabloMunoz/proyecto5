



export const ErrorFallback = ({error, resetErrorBoundary}) => {
    return(
        <div role="alert">
            <h3>Algo Slaio Mal!!!</h3>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Reintentar Carga</button>
        </div>
           
    )
}