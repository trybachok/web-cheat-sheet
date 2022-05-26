import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import Page from "../../components/Page";

const Db = () => {
    return (
        <Page
            links={<div>
                <Link to="/db/database-design">Проектирование баз данных</Link>
                <Link to="/db/indexes">Индексы</Link>
                <Link to="/db/acid">ACID</Link>
                <Link to="/db/transaction-isolation-level">Уровни изолированности транзакций</Link>
                <hr/>

            </div>}
            content={<Outlet/>}
        />
    );
};

export default Db;