import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import Page from "../../components/Page";

const Server = () => {
    return (
        <Page
            links={<div>
                <Link to="/server/monitoring">
                    Мониторинг использования ресурсов сервера
                </Link>
                <hr/>
            </div>}
            content={<Outlet/>}
        />
    );
};

export default Server;