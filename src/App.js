import {Routes, Route} from "react-router";
import Php from "./pages/php";
import Db from "./pages/db";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Technologies from "./pages/technologies";
import Naumen from "./pages/naumen";
import Server from "./pages/server";
import Git from "./pages/git";
import Yii2 from "./pages/yii2";
import Frontend from "./pages/frontend";
import Administration from "./pages/administration";
import Traits from "./pages/php/Traits";
import Iterators from "./pages/php/Iterators";
import Generators from "./pages/php/Generators";
import YieldAndSend from "./pages/php/YieldAndSend";
import DatabaseDesign from "./pages/db/DatabaseDesign";
import Indexes from "./pages/db/Indexes";
import ACID from "./pages/db/ACID";
import TransactionIsolationLevel from "./pages/db/TransactionIsolationLevel";
import AppScale from "./pages/technologies/AppScale";
import Refactor from "./pages/technologies/Refactor";
import Architectures from "./pages/technologies/Architectures";
import DDD from "./pages/technologies/DDD";
import UML from "./pages/technologies/UML";
import SOLID from "./pages/technologies/SOLID";
import KISS from "./pages/technologies/KISS";
import DRY from "./pages/technologies/DRY";
import SLAP from "./pages/technologies/SLAP";
import YAGNI from "./pages/technologies/YAGNI";
import Diagnostic from "./pages/naumen/Diagnostic";
import Monitoring from "./pages/server/Monitoring";
import Workflow from "./pages/git/Workflow";
import Modules from "./pages/yii2/Modules";
import SPA from "./pages/frontend/SPA.";
import UIUX from "./pages/frontend/UIUX";
import Tasks from "./pages/administration/Tasks";
import BusinessLogic from "./pages/administration/BusinessLogic";
import WrongFunctional from "./pages/administration/WrongFunctional";
import NewTechnologies from "./pages/administration/NewTechnologies";
import Documentation from "./pages/administration/Documentation";
import ProjectModel from "./pages/administration/ProjectModel";
import CodeReview from "./pages/administration/CodeReview";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="php" element={<Php/>}>
                        <Route path="traits" element={<Traits/>}/>
                        <Route path="iterators" element={<Iterators/>}/>
                        <Route path="generators" element={<Generators/>}/>
                        <Route path="yield-and-send" element={<YieldAndSend/>}/>
                    </Route>
                    <Route path="db" element={<Db/>}>
                        <Route path="database-design" element={<DatabaseDesign/>}/>
                        <Route path="indexes" element={<Indexes/>}/>
                        <Route path="acid" element={<ACID/>}/>
                        <Route path="transaction-isolation-level" element={<TransactionIsolationLevel/>}/>
                    </Route>
                    <Route path="technologies" element={<Technologies/>}>
                        <Route path="app-scale" element={<AppScale/>}/>
                        <Route path="refactor" element={<Refactor/>}/>
                        <Route path="architectures" element={<Architectures/>}/>
                        <Route path="ddd" element={<DDD/>}/>
                        <Route path="uml" element={<UML/>}/>
                        <Route path="solid" element={<SOLID/>}/>
                        <Route path="kiss" element={<KISS/>}/>
                        <Route path="dry" element={<DRY/>}/>
                        <Route path="slap" element={<SLAP/>}/>
                        <Route path="yagni" element={<YAGNI/>}/>
                    </Route>
                    <Route path="naumen" element={<Naumen/>}>
                        <Route path="diagnostic" element={<Diagnostic/>}/>
                    </Route>
                    <Route path="server" element={<Server/>}>
                        <Route path="monitoring" element={<Monitoring/>}/>
                    </Route>
                    <Route path="git" element={<Git/>}>
                        <Route path="workflow" element={<Workflow/>}/>
                    </Route>
                    <Route path="yii2" element={<Yii2/>}>
                        <Route path="modules" element={<Modules/>}/>
                    </Route>
                    <Route path="frontend" element={<Frontend/>}>
                        <Route path="spa" element={<SPA/>}/>
                        <Route path="ui-ux" element={<UIUX/>}/>
                    </Route>
                    <Route path="administration" element={<Administration/>}>
                        <Route path="tasks" element={<Tasks/>}/>
                        <Route path="business-logic" element={<BusinessLogic/>}/>
                        <Route path="wrong-functional" element={<WrongFunctional/>}/>
                        <Route path="new-technologies" element={<NewTechnologies/>}/>
                        <Route path="documentation" element={<Documentation/>}/>
                        <Route path="project-model" element={<ProjectModel/>}/>
                        <Route path="code-review" element={<CodeReview/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
