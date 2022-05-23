
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

const Yii2 = () => {
    return (
        <div>
            <Link to="/yii2/modules">
                Вынесение кода в модуль или расширение
            </Link>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Yii2;