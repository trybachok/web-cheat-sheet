import {Link} from 'react-router-dom';
import {Outlet} from "react-router";
import './Layout.css';


const Layout = () => {
    return (
        <div>
            <main>
                <nav>
                    <Link to="/php">PHP</Link>
                    <Link to="/db">Базы данных</Link>
                    <Link to="/technologies">Технологии</Link>
                    <Link to="/naumen">Naumen</Link>
                    <Link to="/server">Сервер</Link>
                    <Link to="/git">Git</Link>
                    <Link to="/yii2">Yii2</Link>
                    <Link to="/frontend">Frontend</Link>
                    <Link to="/administration">Административный функционал</Link>
                </nav>
                <article>
                    <Outlet/>
                </article>
            </main>
        </div>
    );
};

export default Layout;