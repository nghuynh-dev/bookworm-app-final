import {Link} from "react-router-dom";

export default function FooterComponent(){
    return(
        <footer className="mt-5">
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to="#">
                    <img src="/assets/bookworm_icon.svg" width="64" height="64" className="d-inline-block align-top" alt="" />
                    <div className="information-website ml-3">
                        <b>BOOKWORM</b>
                        <span>Address</span>
                        <span>Phone</span>
                    </div>
                </Link>
            </nav>
        </footer>
    );
}
