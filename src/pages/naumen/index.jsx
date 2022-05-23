
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

const Naumen = () => {
    return (
        <div>
            <Link to="/naumen/diagnostic">
                Диагностика и решение проблем в работе dialer и naumen в целом
            </Link>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Naumen;