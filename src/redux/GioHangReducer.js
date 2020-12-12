const stateGioHang = {
    gioHang: [
        // { maSP: 1, tenSP: 'IphoneX', hinhAnh: './img/sp_iphoneX.png', giaBan: 1000, soLuong: 1 }
    ]
}
export const GioHangReducer = (state = stateGioHang, action) => {

    switch (action.type) {
        case 'THEM_GIO_HANG': {
            //Xử lý cập nhật state.gioHang
            let gioHangCapNhat = [...state.gioHang]
            //Tìm trong giỏ hàng có sản phẩm nào có mã ===sp click hay không
            let spGioHang = gioHangCapNhat.find(sp => sp.maSP === action.sanPhamClick.maSP);
            if (spGioHang) {
                //Tìm thấy => tăng số lượng
                spGioHang.soLuong += 1;
            } else {
                gioHangCapNhat.push(action.sanPhamClick)
            }
            //cập nhật lại state
            state.gioHang = gioHangCapNhat;
            //immutable tính bẩt biến của redux: giá trị state mới trả về phải khác state củ
            return { ...state };
        }
    }
    switch (action.type) {
        case 'XOA_GIO_HANG': {
            //Xử lý cập nhật state.gioHang
            let gioHangCapNhat = [...state.gioHang]
            //Tìm trong giỏ hàng có sản phẩm nào có mã ===sp click hay không
            // let index = gioHangCapNhat.findIndex(sp => sp.maSP === action.maSPXoa);
            // if (index !== -1) {
            //     //Tìm thấy => tăng số lượng
            //     gioHangCapNhat.splice(index, 1);
            // }
            gioHangCapNhat = gioHangCapNhat.filter(sp => sp.maSP !== action.maSPXoa)
            //cập nhật lại state
            state.gioHang = gioHangCapNhat;
            //immutable tính bẩt biến của redux: giá trị state mới trả về phải khác state củ
            return { ...state };
        }
    }
    switch (action.type) {
        case 'TANG_GIAM_SO_LUONG': {
            console.log(action,' action')
            //Xử lý cập nhật state.gioHang
            const gioHangCapNhat = [...state.gioHang]
            //Tìm trong giỏ hàng có sản phẩm nào có mã ===sp click hay không
            let spGH = gioHangCapNhat.find(sp => sp.maSP === action.maSPClick);

            if (spGH) {
                //Tìm thấy => tăng số lượng
                 spGH.soLuong += action.soLuong;
            }

            //cập nhật lại state
            state.gioHang = gioHangCapNhat;

            console.log(state.gioHang," state gio hang")
            //immutable tính bẩt biến của redux: giá trị state mới trả về phải khác state củ
            return { ...state };
        }
    }
    return state;
}