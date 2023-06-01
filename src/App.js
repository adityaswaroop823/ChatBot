

import { Provider } from "react-redux";
import store from "./redux/store";
import MainPage from "./components/ChatBot";



function App() {
  
  return (
    <Provider store={store}>
     
       <MainPage/>
    </Provider>
  );
}

export default App;