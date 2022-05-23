import {NavLink} from 'react-router-dom';
import {Outlet} from "react-router";
import './Layout.css';


const Layout = () => {
    return (
        <div>
            <main>
                <nav>
                    <NavLink to="/php">PHP</NavLink>
                    <NavLink to="/db">Базы данных</NavLink>
                    <NavLink to="/technologies">Технологии</NavLink>
                    <NavLink to="/naumen">Naumen</NavLink>
                    <NavLink to="/server">Сервер</NavLink>
                    <NavLink to="/git">Git</NavLink>
                    <NavLink to="/yii2">Yii2</NavLink>
                    <NavLink to="/frontend">Frontend</NavLink>
                    <NavLink to="/administration">Административный функционал</NavLink>
                </nav>
                <article>
                    <Outlet/>
                </article>
            </main>
        </div>
    );
};

export default Layout;