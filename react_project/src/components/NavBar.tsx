const NavBar = () => {
    return (
        <>
            <ul className="nav nav-tabs" id="navbar">
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">English Premier League</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Fixtures</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Standings</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Players</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Stats</a>
                </li>
            </ul>
        </>
    );
};

export default NavBar;
