import ordenadorRoto from "./images/ordenadorRoto.png";

const Error404 = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <p><img src={ordenadorRoto} alt= "ordenadorRoto" width={"108"} /></p>
                    <h1>Error 404!</h1>
                    <h3>Ups! La página que estás buscando no existe.</h3>
                </div>
            </div>
        </div>
    )
}

export default Error404;