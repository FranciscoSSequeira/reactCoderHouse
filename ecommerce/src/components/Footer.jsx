import mando from "./images/mando.png";

const Footer = () => {
    return (
        <div className="container-fluid text-info bg-dark">
            <div className="container my-3">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <img src={mando} alt={mando} width={"123"}/>  
                            </div>  
                        </div>                 
                    </div>
                    <div className="col">
                          <h2 >Todo el gaming</h2>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;