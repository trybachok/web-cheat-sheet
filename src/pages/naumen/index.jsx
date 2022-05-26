import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import Page from "../../components/Page";

const Naumen = () => {
    return (
        <Page
            links={<div>
                <Link to="/naumen/diagnostic">
                    Диагностика и решение проблем в работе dialer и naumen в целом
                </Link>
                <hr/>
            </div>}
            content={<Outlet/>}
        />
    );
};

export default Naumen;