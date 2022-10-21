import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux'
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));

// React组件可以直接通过JSX渲染
root.render(
    // 全局使用redux管理 
    <Provider store={store}>
        <App />
    </Provider>
);
