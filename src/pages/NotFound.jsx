
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            Страница не найдена
            <hr/>
            <Link to="/">На главную</Link>
        </div>
    );
};

export default NotFound;