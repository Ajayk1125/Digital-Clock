import { Link } from "react-router-dom";
function NavBar() {
    return (
        <>
            <center>
                <div className="nav">
                    <Link to = "/"> Digital Time </Link>
                    <Link to = "/stopwatch"> Stopwatch</Link>
                    <Link to = "/Counter"> Counter</Link>
                </div>
            </center>
        </>
    );
}

export default NavBar