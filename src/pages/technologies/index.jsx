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
            <a href="https://refactoring.guru/ru/refactoring/techniques" target="_blank">
                Приёмы рефакторинга
            </a>
            <hr/>
            <a href="https://habr.com/ru/post/92570/" target="_blank">
                GRASP
            </a>
            <hr/>
            <a href="https://ru.wikipedia.org/wiki/GRASP" target="_blank">
                GRASP Википедия
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