
import {Link} from "react-router-dom";

const Technologies = () => {
    return (
        <div>
            <Link to="/technologies/app-scale">Умение правильно расширять приложение</Link>
            <Link to="/technologies/refactor">Рефакторинг приложений</Link>
            <Link to="/technologies/architectures">Архитектуры приложения</Link>
            <Link to="/technologies/ddd">DDD - Domain Driven Design</Link>
            <Link to="/technologies/uml">UML</Link>
            <Link to="/technologies/solid">SOLID</Link>
            <Link to="/technologies/kiss">KISS</Link>
            <Link to="/technologies/dry">DRY</Link>
            <Link to="/technologies/slap">SLAP</Link>
            <Link to="/technologies/yagni">YAGNI</Link>
        </div>
    );
};

export default Technologies;