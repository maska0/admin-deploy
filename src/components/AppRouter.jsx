import {routes} from "../utils/routes";
import {Routes , Route} from "react-router-dom";

function AppRouter(){
    return(
        <Routes>
            {routes.map((route,index) => (
            // цикл обращаемся к роутес который находится в роутс.js (начальная точка роуте  и его индексация)
                <Route key={index} path={route.path} element={<route.element/>}/>
                // передача индекса , пэтч  и элемент
            ))}
        </Routes>
    );
}


export default AppRouter;