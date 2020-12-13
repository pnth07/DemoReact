const stateDefault = {
    danhSachSinhVien: [
        { maSinhVien: 1, hoTen: "A", email: 'a@gmail.com', soDienThoai: '123' },
        { maSinhVien: 2, hoTen: "B", email: 'b@gmail.com', soDienThoai: '321' }
    ],
    sinhVienSua: {
        maSinhVien: '',
        hoTen: '',
        email: '',
        soDienThoai: ''
    },
    sinhVienRedux: {
        values: {
            maSinhVien: '',
            hoTen: '',
            email: '',
            soDienThoai: ''
        },
        errors: {
            maSinhVien: '',
            hoTen: '',
            email: '',
            soDienThoai: ''
        }

    }
}
export const QuanLySinhVienReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN': {
            const mangSinhVienCapNhat = [...state.danhSachSinhVien, action.sinhVien];
            //mangSinhVienCapNhat.push(action.sinhVien)

            //state.mangSinhVien=mangSinhVienCapNhat
            return { ...state, danhSachSinhVien: mangSinhVienCapNhat }
        }
        case 'SUA_SINH_VIEN': {
            state.sinhVienSua = { ...action.sinhVienSua }
            let newSinhVienRedux = { ...state.sinhVienRedux }
            newSinhVienRedux.values = { ...action.sinhVienSua }
            return { ...state, sinhVienRedux: newSinhVienRedux }
        }
        case 'SET_SV_REDUX': {
            state.sinhVienRedux = action.sinhVien;
            return { ...state }
        }
        case 'CAP_NHAT_SINH_VIEN': {
            const mangSinhVienCapNhat = [...state.danhSachSinhVien];
            let svUpdate = mangSinhVienCapNhat.find(sv => sv.maSinhVien === state.sinhVienRedux.values.maSinhVien);
            if (svUpdate) {
                svUpdate.hoTen = state.sinhVienRedux.values.hoTen;
                svUpdate.email = state.sinhVienRedux.values.email;
                svUpdate.soDienThoai = state.sinhVienRedux.values.soDienThoai;
            }
            state.danhSachSinhVien = mangSinhVienCapNhat;
            return { ...state }
        }
    }
    return { ...state }
}