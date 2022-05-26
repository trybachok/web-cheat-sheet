import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import Page from "../../components/Page";

const Technologies = () => {
    return (
        <Page links={<div>
            <Link to="/technologies/app-scale">Умение правильно расширять приложение</Link>
            <Link to="/technologies/refactor">Рефакторинг приложений</Link>
            <Link to="/technologies/code-smells">Запахи кода</Link>
            <hr/>
            <a href="https://refactoring.guru/ru/refactoring/techniques" target="_blank">
                Приёмы рефакторинга
            </a>
            <hr/>
            <Link to="/technologies/architectures">Архитектуры приложения</Link>
            <Link to="/technologies/ddd">DDD - Domain Driven Design</Link>
            <Link to="/technologies/grasp">GRASP</Link>
            <Link to="/technologies/uml">UML</Link>
            <Link to="/technologies/solid">SOLID</Link>
            <Link to="/technologies/kiss">KISS</Link>
            <Link to="/technologies/dry">DRY</Link>
            <Link to="/technologies/slap">SLAP</Link>
            <Link to="/technologies/yagni">YAGNI</Link>
            <hr/>
        </div>}
              content={<Outlet/>}
        />
    );
};

export default Technologies;