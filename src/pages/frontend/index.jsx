
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

const Frontend = () => {
    return (
        <div>
            <Link to="/frontend/spa">SPA</Link>
            <Link to="/frontend/ui-ux">UI/UX</Link>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Frontend;