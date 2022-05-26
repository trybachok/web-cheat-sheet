import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import Page from "../../components/Page";

const Administration = () => {
    return (
        <Page links={
            <div style={{position: "fixed", width: "100%", top: 60}}>
                <Link to="/administration/tasks">
                    Постановка и контроль выполнения задач
                </Link>
                <Link to="/administration/business-logic">
                    Умение разбираться в бизнес-логике проектов
                </Link>
                <Link to="/administration/wrong-functional">
                    Умение предотвратить ошибочный функционал, внедряемый заказчиком,
                    предложить альтернативное решение
                </Link>
                <Link to="/administration/new-technologies">
                    Внедрение новых технологий и решений, облегчающих жизнь отделу
                </Link>
                <Link to="/administration/documentation">
                    Умение задокументировать нововведения
                </Link>
                <Link to="/administration/project-model">
                    Умение "нарисовать" проект, чтобы он выглядел наглядно
                    и легко можно было разобраться в случае большой задачи или багов
                </Link>
                <Link to="/administration/code-review">
                    Проведение код-ревью
                </Link>
                <hr/>
            </div>
        }
              content={<Outlet/>}/>
    );
};

export default Administration;