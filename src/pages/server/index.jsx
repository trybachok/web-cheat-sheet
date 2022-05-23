
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

const Server = () => {
    return (
        <div>
            <Link to="/server/monitoring">
                Мониторинг использования ресурсов сервера
            </Link>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Server;