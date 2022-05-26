import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import Page from "../../components/Page";

const Yii2 = () => {
    return (
        <Page
            links={<div>
                <Link to="/yii2/modules">
                    Вынесение кода в модуль или расширение
                </Link>
                <hr/>
                <a href="https://www.yiiframework.com/doc/guide/2.0/ru/structure-extensions"
                   target="_blank">Расширения</a>
                <hr/>
                <a href="https://www.yiiframework.com/doc/guide/2.0/ru" target="_blank">
                    Документация Yii2
                </a>
                <hr/>
            </div>}
            content={<Outlet/>}
        />
    );
};

export default Yii2;