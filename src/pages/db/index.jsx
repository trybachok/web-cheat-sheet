
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

const Db = () => {
    return (
        <div>
            <Link to="/db/database-design">Проектирование баз данных</Link>
            <Link to="/db/indexes">Индексы</Link>
            <Link to="/db/acid">ACID</Link>
            <Link to="/db/transaction-isolation-level">Уровни изолированности транзакций</Link>
            <hr/>
            <Outlet/>
        </div>

    );
};

export default Db;