const TopNews = () => {
    return (
        <>
        <h1 className='heading'>Latest News</h1>
            <div className="card shadow-lg" id="cards">
                <img src="images/cancelo.webp" className="card-img-top" alt="Joao Cancelo" />
                <div className="card-body">
                    <h5 className="card-title">Joao Cancelo leaving Manchester City?</h5>
                    <p className="card-text">Joao Cancelo could be on the move after falling out with Manchester City manager Pep Guardiola.</p>
                    <a href="#" className="read-btn btn btn-primary rounded d-block mx-auto">Read More</a>
                </div>
            </div>
            <div className="card shadow-lg" id="cards">
                <img src="images/macallister.webp" className="card-img-top" alt="Alexis Mac Allister" />
                <div className="card-body">
                    <h5 className="card-title">Alexis Mac Allister completes move to Liverpool</h5>
                    <p className="card-text">Alexis Mac Allister has completed his move from Brighton Hove & Albion to Liverpool.</p>
                    <a href="#" className="read-btn btn btn-primary rounded d-block mx-auto">Read More</a>
                </div>
            </div>
            <div className="card shadow-lg" id="cards">
                <img src="images/champions.jpeg" className="card-img-top" alt="Champions of England" />
                <div className="card-body">
                    <h5 className="card-title">Champions of England</h5>
                    <p className="card-text">Manchester City have won the 2022-2023 English Premier League beating out rivals Arsenal. </p>
                    <a href="#" className="read-btn btn btn-primary rounded d-block mx-auto">Read More</a>
                </div>
            </div>
        </>
    )
}

export default TopNews