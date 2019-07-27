// lấy danh sách người dùng từ back-end về

$(document).ready(function() {

    function ThemNguoidung() {
        console.log("ThemNguoidung");
    }

    function HienThi(MangHienThi) {
        var tbodyNguoiDung = $("#tblDanhSachNguoiDung");
        var content = "";
        MangHienThi.map(function(nguoiDung, index) {
            content += `
        <tr>
        <td>${index+1}</td>
        <td>${nguoiDung.TaiKhoan}</td>
        <td>${nguoiDung.MatKhau}</td>
        <td>${nguoiDung.HoTen}</td>
        <td>${nguoiDung.Email}</td>
        <td>${nguoiDung.SoDT}</td>
        <td> <button class="btn btn-danger btnXoa" data-id="${nguoiDung.TaiKhoan}">Xóa</button>
        <tr>
         `
        })
        tbodyNguoiDung.html(content);
    }

    function LuuDuLieu(mangluudulieu) {
        // Chuyen kieu du lieu ve kieu chuoi JSON
        var jsonData = JSON.stringify(mangluudulieu);
        // Luu du lieu vao local storage
        localStorage.setItem("DSND", jsonData);
    }
    var mangNguoiDung = [];
    var nguoiDungService = new NguoiDungService();
    var ajaxNguoiDung = nguoiDungService.LayDanhSachNguoiDung();
    ajaxNguoiDung
        .done(function(result) {
            mangNguoiDung = result;
            //Luu vao local storage
            console.log(mangNguoiDung);
            LuuDuLieu(mangNguoiDung);
            HienThi(mangNguoiDung);
        })
        .fail(function(err) {
            console.log(err);
        })

    $("#btnThemNguoiDung").click(function() {
        $("#modal-title").html("Thêm Người Dùng");
        var btn = `
            <button class="btn btn-success" id="btnThem">Thêm người dùng </button>
            `;
        $("#modal-footer").html(btn);
    })

    //Them Nguoi Dung
    $("body").delegate("#btnThem", "click", function() {
            //Lấy thông tin
            var tk = $("#TaiKhoan").val();
            var hoten = $("#HoTen").val();
            var mk = $("#MatKhau").val();
            var email = $("#Email").val();
            var sodt = $("#SoDienThoai").val();
            var maloai = $("#sel1").val();
            //Tạo đối tượng
            var nguoiDung = new NguoiDung(tk, hoten, mk, email, sodt, maloai);
            //Thêm vào database(API)
            nguoiDungService.ThemNguoiDung(nguoiDung)
                .done(function(result) {
                    location.reload();
                })
                .fail(function(err) {
                    console.log(err);
                })

        })
        //Xoa nguoi dung
    $("body").delegate(".btnXoa", "click", function() {
        var taiKhoang = $(this).data("id");
        console.log(taiKhoang);
        nguoiDungService.XoaNguoiDung(taiKhoang)
            .done(function(result) {
                location.reload();
            })
            .fail(function(err) {
                console.log(err);
            })

    })

})