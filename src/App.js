import DemoFuntionComponent from "./Components/DemoFuntionComponent";
import "./App.css";
import DemoReactClassComponent from "./Components/DemoReactClassComponent";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import DataBinding from "./DataBinding/DataBinding";
import DataBindingClassComponent from "./DataBinding/DataBindingClassComponent";
import HandleEvent from "./HandleEvent/HandleEvent";
import DemoState from "./DemoState/DemoState";
import BaiTapChonXe from "./DemoState/BaiTapChonXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapRenderPhim from "./RenderWithMap/BaiTapRenderPhim";
import DemoProps from "./Props/DemoProps";
import ProductRFC from "./Props/ProductRFC";
import ProductListRCC from "./Props/ProductListRCC";
function App() {
    return <div className="App">
        {/* <DataBinding/> */}
        {/* <DataBindingClassComponent/> */}
        {/* <HandleEvent/> */}
        {/* <DemoState/> */}
        {/* <BaiTapChonXe/> */}
        {/* <RenderWithMap/> */}
        {/* <BaiTapRenderPhim/> */}
        {/* <DemoProps/> */}
        <ProductListRCC />


    </div>;
}

export default App;
