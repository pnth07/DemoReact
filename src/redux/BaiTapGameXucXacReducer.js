const stateDefault = {
    datCuoc: false,
    soBanThang: 0,
    soBanChoi: 0,
    mangXucXac: [
        { hinhAnh: './img/imgGame/6.png', diem: 0 },
        { hinhAnh: './img/imgGame/6.png', diem: 0 },
        { hinhAnh: './img/imgGame/6.png', diem: 0 }
    ]
}

export const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            state.datCuoc = action.datCuoc;
            return { ...state }
        }
        case 'RANDOM_XUC_XAC': {

            //Ramdom
            //Tạo 1 mảng xúc xắc ngẫu nhiên
            const mangXucXacNgauNhien = [];
            //Xử lý random 3 lần tạo ra 3 xúc xắc
            for (let i = 0; i < 3; i++) {
                //Tạo ra 1 số ngẫu nhiên từ 1 ->6
                const soNN = Math.floor(Math.random() * 6) + 1;
                //Từ số ngẫu nhiên tạo ra object xúc xắc
                const xxNN = { hinhAnh: `./img/imgGame/${soNN}.png`, diem: soNN };
                //Thêm xúc xắc ngẫu nhiên vào mảng XXNN
                mangXucXacNgauNhien.push(xxNN);

            }
            //Gán lại state của mảng xúc xắc = mangXXNN
            state.mangXucXac = mangXucXacNgauNhien;
            //Cập nhật state.soBanThang
            const tongDiem = state.mangXucXac.reduce((td, xucXac, index) => {
                return td += xucXac.diem
            }, 0);

            if ((state.datCuoc && tongDiem > 10) || (!state.datCuoc && tongDiem <= 10)) {
                state.soBanThang += 1
            }

            //Cập nhật state số bàn chơi
            state.soBanChoi +=1
            
            return { ...state }
        }
    }
    return { ...state };
}


