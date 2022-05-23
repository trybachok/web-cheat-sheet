
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

const Git = () => {
    return (
        <div>
            <Link to="/git/workflow">
                Организация workflow с code-review
            </Link>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Git;