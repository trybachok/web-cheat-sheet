import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import Page from "../../components/Page";

const Git = () => {
    return (
        <Page
            links={<div>
                <Link to="/git/workflow">
                    Организация workflow с code-review
                </Link>
                <hr/>
            </div>}
            content={<Outlet/>}
        />
    );
};

export default Git;