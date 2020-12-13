//File quản lý tất cả state của ứng dụng (Thay vì đặt tại component ta đặt state tại store)
import { combineReducers, createStore } from 'redux';
import { BaiTapGameXucXacReducer } from './BaiTapGameXucXacReducer';
import { GioHangReducer } from './GioHangReducer';
import { QuanLySinhVienReducer } from './QuanLySinhVienReducer';

const rootReducer = combineReducers({
    //Các state sau này khai báo tại đây
    stateGioHang: GioHangReducer,
    stateGameXucXac:BaiTapGameXucXacReducer,
    QuanLySinhVienReducer:QuanLySinhVienReducer,
})
//Tạo ra store chứa rootReducer(xem như state tổng của ứng dụng)
export const store = createStore(rootReducer);

