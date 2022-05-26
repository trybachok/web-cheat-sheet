import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import Page from "../../components/Page";

const Php = () => {
    return (
        <Page links={<>
            <Link to="/php/traits">Трейты</Link>
            <Link to="/php/iterators">Итераторы</Link>
            <Link to="/php/generators">Генераторы</Link>
            <Link to="/php/yield-and-send">Ключевые слова yield и send</Link>
            <hr/>
        </>}
              content={<Outlet/>}
        >
        </Page>
    );
};

export default Php;