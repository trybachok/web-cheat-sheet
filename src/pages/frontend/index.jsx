import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import Page from "../../components/Page";

const Frontend = () => {
    return (
        <Page links={<div>
            <Link to="/frontend/spa">SPA</Link>
            <Link to="/frontend/ui-ux">UI/UX</Link>
            <hr/>
        </div>}
              content={<Outlet/>}/>);
};

export default Frontend;