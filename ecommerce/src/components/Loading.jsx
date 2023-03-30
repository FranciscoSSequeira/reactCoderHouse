
const Loading = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Cargando...</h1>
                    <div className="spinner-grow text-info" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;