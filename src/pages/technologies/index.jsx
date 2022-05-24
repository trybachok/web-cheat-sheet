
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

const Technologies = () => {
    return (
        <div>
            <Link to="/technologies/app-scale">Умение правильно расширять приложение</Link>
            <Link to="/technologies/refactor">Рефакторинг приложений</Link>
            <hr/>
            <a href="https://refactoring.guru/ru/refactoring/smells" target="_blank">Запахи кода</a>
            <hr/>
            <hr/>
            <a href="https://refactoring.guru/ru/refactoring/techniques" target="_blank">
                Приёмы рефакторинга
            </a>
            <hr/>
            <Link to="/technologies/architectures">Архитектуры приложения</Link>
            <Link to="/technologies/ddd">DDD - Domain Driven Design</Link>
            <Link to="/technologies/uml">UML</Link>
            <Link to="/technologies/solid">SOLID</Link>
            <Link to="/technologies/kiss">KISS</Link>
            <Link to="/technologies/dry">DRY</Link>
            <Link to="/technologies/slap">SLAP</Link>
            <Link to="/technologies/yagni">YAGNI</Link>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Technologies;