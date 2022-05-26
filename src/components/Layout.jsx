import {NavLink} from 'react-router-dom';
import {Outlet} from "react-router";
import './Layout.css';


const Layout = () => {
    return (
        <div>
            <main style={{position: "relative"}}>
                <nav style={{position: "fixed", width: "100%"}}>
                    <NavLink to="/php">PHP</NavLink>
                    <NavLink to="/db">Базы данных</NavLink>
                    <NavLink to="/technologies">Технологии</NavLink>
                    <NavLink to="/naumen">Naumen</NavLink>
                    <NavLink to="/server">Сервер</NavLink>
                    <NavLink to="/git">Git</NavLink>
                    <NavLink to="/yii2">Yii2</NavLink>
                    <NavLink to="/frontend">Frontend</NavLink>
                    <NavLink to="/administration">Админ</NavLink>
                    <NavLink to="/questions">Вопросы</NavLink>
                </nav>
                <article style={{position:"fixed", marginTop: 60, height: "100%"}}>
                    <Outlet/>
                </article>
            </main>
        </div>
    );
};

export default Layout;