$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }

    //scroll to div
    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});



$(document).ready(function() {


    //toggle bar
    $(".toggle-bar").click(function() {
        $(this).toggleClass('opened');
        $('body').toggleClass('ov-hidden');
        $('.header-nav').toggleClass('opened');
    });

    $(".search-header-top").click(function() {
        $('.popup-search').show();
    });

    //search mobile
    $(".search-mobile").click(function() {
        $('.search-top').toggleClass('active');
    });

    //about map
    $(".contact-location-grbtn .btn-view").click(function() {
        var idView = $(this).attr('data-id');
        $(".contact-location-grbtn .btn-view").removeClass('active');
        $(this).addClass('active');
        $('.contact-location-map .item').removeClass('active');
        $('.contact-location-map .item[id = ' + idView + ']').addClass('active');
    });



    $(".hasDatepicker").flatpickr({
        dateFormat: "d/m/Y"
    });
    $('#check-in').datepicker();
    $('#check-out').datepicker();
    $("#check-in").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#check-out").flatpickr({
        dateFormat: "d/m/Y"
    });



    //hover function
    $(".nav-link").mouseover(function() {
        $(this).css('opacity', '.7');
    });
    $(".nav-link").mouseout(function() {
        $(this).css('opacity', '1');
    });

    $(document).mouseup(function(e) {
        if ($(e.target).closest(".popup-search").length ===
            0) {
            $('.popup-search').hide();
        }
    });



    //map
    $('img[usemap]').rwdImageMaps();
    $('[class^="tours__"]').on('click', function(e) {
        e.preventDefault();
        var city = this.className.replace('tours__', '');

        $('[id^="answer-"]').hide();
        $('#answer-' + city).show();
        $('.list-tours-last').hide();
    });

    //countdown date
    $('.left-time').each(function() {
        var clock;
        clock = $(this).FlipClock($(this).data("value"), {
            clockFace: 'DailyCounter',
            autoStart: false,
            countdown: true,
            callbacks: {
                stop: function() {
                    $('.message').html('The clock has stopped!');
                }
            }
        });
        //clock.setTime($(this).data("value"));
        //clock.setCountdown(true);
        clock.start();
    });


    //map hover
    // $('area').each(function(i) {
    //     $('area').eq(i).bind('mouseover', function(e) {
    //         $('.maps-content-info--item').eq(i).css({
    //             top: e.clientY,
    //             left: e.clientX,
    //         }).show()
    //     });
    //     $('area').eq(i).bind('mouseout', function() {
    //         $('.maps-content-info--item').hide()
    //     });
    // });


    $(".optbtn").click(function() {
        $(this).parents().children('.paxCount-dropmain').toggleClass('active');
    });
    $(".close-done").click(function() {
        $('.paxCount-dropmain').removeClass('active');
    });

    $('.selectpicker').select2();


    $("input[name='movetype']").change(function(e) {
        e.preventDefault();
        var dbvalue = $("input[type='radio'][name='movetype']:checked").val();
        if (dbvalue == 'seftsufficiency') {
            $('#hireservices-wrap').hide();
            $('.choose-hireservices-list').hide();
        } else {
            $('#hireservices-wrap').show();
            $('.choose-hireservices-list').show();
        }
    });

    $("input[name='hireservices-type']").change(function() {
        var dbvaluehire = $("input[type='radio'][name='hireservices-type']:checked").val();
        if (dbvaluehire == 'hireservices-type-plane') {
            $('.choose-hireservices-item').hide();
            $('#list-plan-airline').show();
        } else if (dbvaluehire == 'hireservices-type-train') {
            $('.choose-hireservices-item').hide();
            $('#list-type-train').show();
        } else {
            $('.choose-hireservices-item').hide();
            $('#list-type-car').show();
        }
    });

    $(".accordion-content__title").click(function() {
        $(this).toggleClass('active');
        $(this).parents('.accordion-content').children('.accordion-content__desc').slideToggle();
    });


    //add Destination
    $(".addDestination").click(function() {
        var html = `
        <div class="append-item">
            <div class="row ">
                <div class="col-md-12">
                    <div class="append-title-header">
                        <h3>Điểm đến 2:</h3>
                        <span class="remove-append">
                            <i class="fa-regular fa-minus"></i>
                        </span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="" class="form-label">Điểm khởi hành</label>
                        <select name="" id="" class="form-control selectpicker">
                            <option value="">Chọn điểm đi</option>
                            <option value="hanoi">Hà Nội</option>
                            <option value="tphcm">Hồ Chí Minh</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="" class="form-label">Điểm đến</label>
                        <select name="" id="" class="form-control selectpicker">
                            <option value="">Chọn điểm đến</option>
                            <option value="hanoi">Hà Nội</option>
                            <option value="tphcm">Hồ Chí Minh</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="" class="form-label">Hình thức di chuyển</label>
                        <div class="movetype">
                            <div class="movetype-item">
                                <input type="radio" name="movetype" id="hireservices" value="hireservices" checked>
                                <label for="hireservices">Thuê dịch vụ</label>
                            </div>
                            <div class="movetype-item">
                                <input type="radio" name="movetype" id="seftsufficiency" value="seftsufficiency">
                                <label for="seftsufficiency">Tự túc</label>
                            </div>
                        </div>
                        <div id="hireservices-wrap">
                            <div class="wrap-check-type">
                                <span>
                                    <input type="radio" name="hireservices-type" id="hireservices-type-plane" value="hireservices-type-plane">
                                    <label for="hireservices-type-plane">Máy bay</label>
                                </span>
                                <span>
                                    <input type="radio" name="hireservices-type" id="hireservices-type-train" value="hireservices-type-train">
                                    <label for="hireservices-type-train">Tàu</label>
                                </span>
                                <span>
                                    <input type="radio" name="hireservices-type" id="hireservices-type-car" value="hireservices-type-car">
                                    <label for="hireservices-type-car">Ô tô</label>
                                </span>
                            </div>
                        </div>

                        <div class="choose-hireservices-list">
                            <div id="list-plan-airline" class="choose-hireservices-item" style="display: none;">
                                <div class="choose-hireservices-list__wrap">
                                    <h2>Chọn hạng vé máy bay</h2>
                                    <table border="1" style="width: 100%;">
                                        <thead>
                                            <tr>
                                                <th>Hãng</th>
                                                <th>Giá vé</th>
                                                <th>Hạng ghế</th>
                                                <th>Số lượng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Vietnam Airline</td>
                                                <td>1.500.000 VND</td>
                                                <td>Economy Class</td>
                                                <td>
                                                    <input type="number" min="0">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="list-type-train" class="choose-hireservices-item" style="display: none;">
                                <div class="choose-hireservices-list__wrap">
                                    <h2>Chọn loại ghế tàu</h2>
                                    <div class="wrap-check-type">
                                        <span>
                                            <input type="radio" name="train-type" id="train-type-1" value="train-type-1">
                                            <label for="train-type-1">Ghế mềm (700.000 VND)</label>
                                        </span>
                                        <span>
                                            <input type="radio" name="train-type" id="train-type-2" value="train-type-2">
                                            <label for="train-type-2">Ghế cứng (600.000 VND)</label>
                                        </span>
                                        <span>
                                            <input type="radio" name="train-type" id="train-type-3" value="train-type-3">
                                            <label for="train-type-3">Giường nằm (900.000 VND)</label>
                                        </span>
                                    </div>
                                    <div class="">
                                        <span><strong>Tổng vé:</strong></span>
                                        <span class="valuecount-trainticket">1 (vé)</span>
                                    </div>
                                </div>
                            </div>
                            <div id="list-type-car" class="choose-hireservices-item" style="display:none;">
                                <div class="choose-hireservices-list__wrap">
                                    <h2>
                                        Chọn loại xe ô tô
                                    </h2>
                                    <div class="shuttletype">
                                        <span>Kiểu đưa đón: </span>
                                        <div class="wrap-check-type">
                                            <span>
                                                <input type="radio" name="includingtour" id="alltour" value="alltour">
                                                <label for="alltour">Tính cả tour</label>
                                            </span>
                                            <span>
                                                <input type="radio" name="includingtour" id="twoheads" value="twoheads">
                                                <label for="twoheads">Đưa đón 2 đầu</label>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="wrap-check-type">
                                        <span>
                                            <input type="radio" name="car-type" id="car-type-4" value="car-type-4">
                                            <label for="car-type-4">4 chỗ (1.000.000 VND)</label>
                                        </span>
                                        <span>
                                            <input type="radio" name="car-type" id="car-type-7" value="car-type-7">
                                            <label for="car-type-7">7 chỗ (2.000.000 VND)</label>
                                        </span>
                                        <span>
                                            <input type="radio" name="car-type" id="car-type-16" value="car-type-16">
                                            <label for="car-type-16">16 chỗ (3.000.000 VND)</label>
                                        </span>
                                        <span>
                                            <input type="radio" name="car-type" id="car-type-45" value="car-type-45">
                                            <label for="car-type-45">45 chỗ (4.000.000 VND)</label>
                                        </span>
                                    </div>
                                    <div class="">
                                        <span><strong>Tổng số xe:</strong></span>
                                        <span class="valuecount-car">1 (xe)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="number-night-stay">
                        <label for="" class="form-label">Số đêm lưu trú:</label>
                        <input type="number" name="" id="" min="0" class="form-control" placeholder="Ví dụ: 2">
                    </div>
                </div>
            </div>
        </div>
        `;
        $('.addDestination-wrap').append(html);
    });

    $('.showmore-name-companycar .btn-addmore').click(function() {
        $(this).parents('.showmore-name-companycar').children('.showmore-name-companycar-wrap').slideToggle();
    });

    $('.hotel-suggest-item .hotel-suggest-item-detail .showmore-typeroom').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).children('span').text('Thu gọn');
            $(this).parents('.hotel-suggest-item').children('.hotel-suggest-typeroom').slideDown();
        } else {
            $(this).children('span').text('Mở rộng');
            $(this).parents('.hotel-suggest-item').children('.hotel-suggest-typeroom').slideUp();
        }
    });

    $('.hotel-suggest-item .group-checked input:checkbox').change(function(e) {
        e.preventDefault();
        if ($(this).is(":checked")) {
            $(this).parent().find('.hotel-suggest-typeroom').show();
        } else {
            $(this).parent().find('.hotel-suggest-typeroom').hide();
        }
    });
    $('.hotel-suggest-morebtn').click(function() {
        var html = `
        <div class="hotel-suggest-item">
        <div class="group-checked">
            <input type="checkbox" name="" id="">
            <label for="">
                <div class="group-checked-info">
                    <div class="image-box">
                        <img src="https://cdn.tourradar.com/s3/city/11046/17799271_280.jpg" alt="">
                    </div>
                    <div class="desc-box">
                        <h3 class="desc-box-title">
                            Khách sạn B
                        </h3>
                        <div class="desc-box-location">
                            <i class="fa-solid fa-location-dot"></i>
                            12/24 thanh xuân,hà nội
                        </div>
                    </div>
                </div>
            </label>
        </div>
        <div class="hotel-suggest-item-detail">
            <span class="ar-title">Thông tin hạng phòng</span>
            <span class="showmore-typeroom">
                <span>Mở rộng</span>
            <i class="fa-solid fa-triangle"></i>
            </span>
        </div>
        <div class="hotel-suggest-typeroom" style="display:none">
            <div class="hotel-suggest-typeroom-item">
                <h3 class="suggest-typeroom-title">
                    Phòng hạng sang
                </h3>
                <div class="suggest-typeroom-info">
                    <div class="image-box">
                        <img src="https://owa.bestprice.vn/images/hotels/large/vinpearl-resort-spa-phu-quoc-634fc56f63f9a-450x252.jpg" alt="">
                    </div>
                    <div class="desc-box">
                        <h3 class="desc-box-title">
                            Phòng hạng sang
                        </h3>
                        <a href="" class="typeroom-detail">
                            Chi tiết phòng 
                            <i class="fa-solid fa-chevron-right"></i>
                        </a>
                        <div class="typeroom-detail-meta">
                            <div class="typeroom-detail-meta-item">
                                <i class="fa-solid fa-square"></i> 46m <sup>2</sup>
                            </div>
                            <div class="typeroom-detail-meta-item">
                                <i class="fa-solid fa-user"></i> 2 người lớn, 2 trẻ em
                            </div>
                            <div class="typeroom-detail-meta-item">
                                <i class="fa-solid fa-house-tree"></i> Hướng vườn
                            </div>
                            <div class="typeroom-detail-meta-item">
                                <i class="fa-solid fa-bed-front"></i> 2 gường đơn, 1 gường đôi
                            </div>
                        </div>
                    </div>
                </div>
                <div class="suggest-typeroom-rightselect">

                    <div class="suggest-typeroom-number">
                        <label for="">Số lượng phòng:</label>
                        <div class="input-group input-group-number">
                            <span class="input-group-btn minus-button" id="">
                                <i class="fa-solid fa-minus"></i>
                            </span>
                            <input type="number" min="0" name="" id="quantity" placeholder="" value="0">
                            <span class="input-group-btn plus-button" id="">
                                <i class="fa-solid fa-plus"></i>
                            </span>
                        </div>
                    </div>
                    <div class="suggest-typeroom-price">
                        <span class="price-from">
                            <span class="price-new">5.000.000 Đ</span>
                        <span class="price-old"><del>7.000.000 Đ</del></span>
                        </span>
                        <div class="per-night">Phòng/đêm</div>
                    </div>
                </div>
            </div>
            <div class="hotel-suggest-typeroom-item">
                <h3 class="suggest-typeroom-title">
                    Phòng hạng sang
                </h3>
                <div class="suggest-typeroom-info">
                    <div class="image-box">
                        <img src="https://owa.bestprice.vn/images/hotels/large/vinpearl-resort-spa-phu-quoc-634fc56f63f9a-450x252.jpg" alt="">
                    </div>
                    <div class="desc-box">
                        <h3 class="desc-box-title">
                            Phòng thường
                        </h3>
                        <a href="" class="typeroom-detail">
                            Chi tiết phòng 
                            <i class="fa-solid fa-chevron-right"></i>
                        </a>
                        <div class="typeroom-detail-meta">
                            <div class="typeroom-detail-meta-item">
                                <i class="fa-solid fa-square"></i> 46m <sup>2</sup>
                            </div>
                            <div class="typeroom-detail-meta-item">
                                <i class="fa-solid fa-user"></i> 2 người lớn, 2 trẻ em
                            </div>
                            <div class="typeroom-detail-meta-item">
                                <i class="fa-solid fa-house-tree"></i> Hướng vườn
                            </div>
                            <div class="typeroom-detail-meta-item">
                                <i class="fa-solid fa-bed-front"></i> 2 gường đơn, 1 gường đôi
                            </div>
                        </div>
                    </div>
                </div>
                <div class="suggest-typeroom-rightselect">

                    <div class="suggest-typeroom-number">
                        <label for="">Số lượng phòng:</label>
                        <div class="input-group input-group-number">
                            <span class="input-group-btn minus-button" id="">
                                <i class="fa-solid fa-minus"></i>
                            </span>
                            <input type="number" min="0" name="" id="quantity" placeholder="" value="0">
                            <span class="input-group-btn plus-button" id="">
                                <i class="fa-solid fa-plus"></i>
                            </span>
                        </div>
                    </div>
                    <div class="suggest-typeroom-price">
                        <span class="price-from">
                            <span class="price-new">3.000.000 Đ</span>
                        <span class="price-old"><del></del></span>
                        </span>
                        <div class="per-night">Phòng/đêm</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
        $('.hotel-suggest-more').append(html);
    });


    // $(".addInfo").click(function() {
    //     var html = `
    //     <div class="info-contact-box">
    //         <form action="">
    //             <div class="row">
    //                 <div class="col-md-6">
    //                     <div class="form-group">
    //                         <label for="">Họ</label>
    //                         <input type="text" class="form-control">
    //                     </div>
    //                 </div>
    //                 <div class="col-md-6">
    //                     <div class="form-group">
    //                         <label for="">Tên</label>
    //                         <input type="text" class="form-control">
    //                     </div>
    //                 </div>
    //                 <div class="col-md-6">
    //                     <div class="form-group">
    //                         <label for="">Số điện thoại</label>
    //                         <input type="text" class="form-control">
    //                     </div>
    //                 </div>
    //                 <div class="col-md-6">
    //                     <div class="form-group">
    //                         <label for="">Email</label>
    //                         <input type="text" class="form-control">
    //                     </div>
    //                 </div>
    //             </div>
    //         </form>
    //         <span id="Deleteitem">Xóa</span>
    //     </div>
    //     `;
    //     $('.addinfo-box-btn').append(html);
    // });

    $(".info-contact-box #Deleteitem").click(function(e) {
        e.preventDefault();
        $(this).parents('.info-contact-box').remove();

    });



    $(".detail-servicepack .btnshowhide").click(function() {
        $(this).parents('.detail-servicepack').children('#detail-servicepack-info').slideToggle();
    });


    $(".payment-information-wrap .payment-footer-box .btn-sr").click(function() {
        $(this).toggleClass('active');
        $(this).parents('.payment-information-wrap').children('.info-box').slideToggle();
        if ($(this).hasClass('active')) {
            $(this).children('span').text('Mở');
        } else {
            $(this).children('span').text('Đóng');
        }
    });

});





//change person
var MAX_PERSON = 9;
$(".plus-adults").on("click", function() {
    var el = $(this);
    var currentAdults = Number($("#input-number-adults").val());
    if (!el.hasClass("disabled")) {
        if (currentAdults < MAX_PERSON) {
            var currentChilrend = Number($("#input-number-chilrend").val());
            $(".number-adults").html(currentAdults + 1);
            $("#input-number-adults").val(currentAdults + 1);
            if (!$(this).hasClass("plus-adults--flight")) {
                $("input#valueperson").val(currentAdults +
                    1 +
                    " người lớn" +
                    (currentChilrend > 0 ? `, ${currentChilrend} Trẻ em` : ""));
            } else {
                var currentInfant = Number($("#input-number-infant").val());
                $("input#valueperson").val(currentAdults +
                    1 +
                    " người lớn" +
                    (currentChilrend > 0 ? `, ${currentChilrend} Trẻ em` : "") +
                    (currentInfant > 0 ? `, ${currentInfant} Em bé` : ""));
            }
        }
    }
});
$(".minus-adults").on("click", function() {
    var el = $(this);
    if (!el.hasClass("disabled")) {
        var currentAdults = Number($("#input-number-adults").val());
        var currentChilrend = Number($("#input-number-chilrend").val());
        if (currentAdults > 1) {
            $(".number-adults").html(currentAdults - 1);
            $("#input-number-adults").val(currentAdults - 1);
            if (!$(this).hasClass("minus-adults--flight")) {
                $("input#valueperson").val(currentAdults -
                    1 +
                    " người lớn" +
                    (currentChilrend > 0 ? `, ${currentChilrend} Trẻ em` : ""));
            } else {
                var currentInfant = Number($("#input-number-infant").val());
                $("input#valueperson").val(currentAdults -
                    1 +
                    " người lớn" +
                    (currentChilrend > 0 ? `, ${currentChilrend} Trẻ em` : "") +
                    (currentInfant > 0 ? `, ${currentInfant} Em bé` : ""));
            }
        }
    }
});
$(".plus-chilrend").on("click", function() {
    var el = $(this);
    var currentChilrend = Number($("#input-number-chilrend").val());
    if (!el.hasClass("disabled")) {
        if (currentChilrend < MAX_PERSON) {
            var currentAdults = Number($("#input-number-adults").val());
            var currentChilrend = Number($("#input-number-chilrend").val());
            var selectsOld = "";
            var options = '<option value="" hidden seleced></option>';
            $(".number-chilrend").html(currentChilrend + 1);
            $("#input-number-chilrend").val(currentChilrend + 1);
            if (!$(this).hasClass("plus-chilrend--flight")) {
                $("input#valueperson").val(`${currentAdults} người lớn` +
                    (currentChilrend + 1 >= 1 ? `, ${currentChilrend+1} Trẻ em` : ""));
                for (var i = 1; i <= 11; i++) { options += '<option value="' + i + '">' + i + "</option>"; }
                for (var i = 0; i < currentChilrend - $(".wrap-select-old-chilrend").length + 1; i++) { selectsOld += `<div class="wrap-select-old-chilrend"><select class="select-old-chilrend">${options}</select></div>`; }
                $(".group-selects-old-chilrend").append(selectsOld);
                $(".wrap-list-old-chilrend").removeClass("hide").addClass("show");
            } else {
                var currentInfant = Number($("#input-number-infant").val());
                $("input#valueperson").val(currentAdults +
                    " người lớn" +
                    (currentChilrend + 1 >= 1 ? `, ${currentChilrend+1} Trẻ em` : "") +
                    (currentInfant > 0 ? `, ${currentInfant} Em bé` : ""));
            }
        }
    }
});
$(".minus-chilrend").on("click", function() {
    var el = $(this);
    if (!el.hasClass("disabled")) {
        var currentAdults = $("#input-number-adults").val();
        var currentChilrend = $("#input-number-chilrend").val();
        if (currentChilrend > 0) {
            $(".number-chilrend").html(Number(currentChilrend) - 1);
            $("#input-number-chilrend").val(Number(currentChilrend) - 1);
            if (!$(this).hasClass("minus-chilrend--flight")) {
                $("input#valueperson").val(`${currentAdults} người lớn` +
                    (currentChilrend - 1 > 0 ? `, ${currentChilrend-1} Trẻ em` : ""));
                $(".wrap-select-old-chilrend:last-child").remove();
            } else {
                var currentInfant = Number($("#input-number-infant").val());
                $("input#valueperson").val(currentAdults +
                    " người lớn" +
                    (currentChilrend - 1 > 0 ? `, ${currentChilrend-1} Trẻ em` : "") +
                    (currentInfant > 0 ? `, ${currentInfant} Em bé` : ""));
            }
        }
        if (currentChilrend - 1 == 0) { $(".wrap-list-old-chilrend").removeClass("show").addClass("hide"); }
    }
});
$(".plus-infant").on("click", function() {
    var el = $(this);
    if (!el.hasClass("disabled")) {
        var currentAdults = Number($("#input-number-adults").val());
        var currentChilrend = Number($("#input-number-chilrend").val());
        var currentInfant = Number($("#input-number-infant").val());
        if (currentInfant < currentAdults) {
            $(".number-infant").html(currentInfant + 1);
            $("#input-number-infant").val(currentInfant + 1);
            $("input#valueperson").val(`${currentAdults} người lớn` +
                (currentChilrend > 0 ? `, ${currentChilrend} Trẻ em` : "") +
                (currentInfant + 1 >= 1 ? `, ${currentInfant+1} Em bé` : ""));
        }
    }
});
$(".minus-infant").on("click", function() {
    var el = $(this);
    if (!el.hasClass("disabled")) {
        var currentAdults = $("#input-number-adults").val();
        var currentChilrend = $("#input-number-chilrend").val();
        var currentInfant = $("#input-number-infant").val();
        if (currentInfant > 0) {
            $(".number-infant").html(Number(currentInfant) - 1);
            $("#input-number-infant").val(Number(currentInfant) - 1);
            $("input#valueperson").val(`${currentAdults} người lớn` +
                (currentChilrend > 0 ? `, ${currentChilrend} Trẻ em` : "") +
                (currentInfant - 1 > 0 ? `, ${currentInfant-1} Em bé` : ""));
        }
    }
});




/*=============================================================*/
$(".list-options ul li").click(function() {
    var text = $(this).html();
    $(".selected span").html(text);
    $(".list-options").hide();
});
$('.selected').click(function() {
    $('.list-options').show();
})

$(window).resize(function() {
    if ($(window).width() < 768) {
        $(".tabs li").click(function() {
            var textMonth = $(this).html();
            $(".selected-month").html(textMonth);
            $(".tabs").hide();
        });
        $('.selected-month').click(function() {
            $('.tabs').show();
        })
        $(document).bind('click', function(e) {
            var $click = $(e.target);
            if (!$click.parents().hasClass("choose-month"))
                $(".tabs").hide();
        });
    }
}).trigger('resize');


$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("sort-dropdown"))
        $(".list-options").hide();
});

$(function() {
    $("#slider-range").slider({
        range: true,
        min: 1,
        max: 21,
        step: 1,
        values: [1, 21],
        slide: function(event, ui) {
            $("#min").val(ui.values[0] + " day");
            $("#max").val(ui.values[1] + " day");
        }
    });
    $("#min").val($("#slider-range").slider("values", 0) + " day");
    $("#max").val($("#slider-range").slider("values", 1) + " day");


});

$(function() {
    $("#slider-range-price").slider({
        range: true,
        min: 0,
        max: 10000000,
        step: 500000,
        values: [0, 10000000],
        slide: function(event, ui) {
            $("#minPrice").val(ui.values[0]);
            $("#maxPrice").val(ui.values[1]);
        }
    });
    $("#minPrice").val($("#slider-range-price").slider("values", 0));
    $("#maxPrice").val($("#slider-range-price").slider("values", 1));
})

$('.title__box').click(function() {
    $(this).next().slideToggle(0);
    $(this).toggleClass('active');
})


$(function() {
    $(".list__filter__check li").slice(0, 3).addClass('active');
    $(".btn-more-wrap").on('click', function(e) {
        e.preventDefault();
        $(".list__filter__check li:hidden").slice(0, 6).addClass('active');
        if ($(".list__filter__check li:hidden").length == 0) {
            $(this).hide();
            $(this).next().show();
        }
    });
    $(".btn-less-wrap").on('click', function(e) {
        e.preventDefault();
        $(".list__filter__check li").slice(3, 10).toggleClass('active');
        $(this).prev().show();
        $(this).hide();
    });



    $(".list__choose-child li").slice(0, 2).addClass('active');
    $(".load-des a").on('click', function(e) {
        e.preventDefault();
        $(".list__choose-child li:hidden").slice(0, 6).addClass('active');
        if ($(".list__choose-child li:hidden").length == 0) {
            $(this).hide();
        }
    });
});

$('.age__range li').click(function() {
    $('.age__range li').removeClass('active');
    $(this).addClass('active');
})

$('.filter__mobile span').click(function() {
    $('.filter').addClass('active');
    $('.overlay-filter').show();
})
$('.close-filter').click(function() {
    $('.filter').removeClass('active');
    $('.overlay-filter').hide();
})
$('.overlay-filter').click(function() {
    $(this).hide();
    $('.filter').removeClass('active');
})

$('.sub__trip').click(function() {
    $(this).parent('.list__itinerary').toggleClass('active');
})

$('.more-all span').click(function() {
    $(this).text(($(this).text() == 'Expand All') ? 'Hide All' : 'Expand All');
    $(this).next('.list__itinerary').toggleClass('active');
})
$('.more-all').click(function() {
    $(this).next('.itinerary').children('.list__itinerary').toggleClass('active');
})

$('[data-fancybox]').fancybox({
    buttons: [
        'close'
    ],
    wheel: false,
    transitionEffect: "slide",
    // thumbs          : false,
    // hash            : false,
    loop: false,
    // keyboard        : true,
    toolbar: true,
    // animationEffect : false,
    // arrows          : true,
    clickContent: false,
    hash: false,
    infobar: false,
});

$(function() {
    $(".tour__item").slice(0, 4).addClass('active');
    $(".more-tour").on('click', function(e) {
        e.preventDefault();
        $(".tour__item:hidden").slice(0, 7).addClass('active');
        if ($(".tour__item:hidden").length == 0) {
            $(this).hide();
        }
    });

    $(".prominent").slice(0, 2).addClass('active');
    $(".load-prominent").on('click', function(e) {
        e.preventDefault();
        $(".prominent:hidden").slice(0, 10).addClass('active');
        if ($(".prominent:hidden").length == 0) {
            $(this).hide();
        }
    });
});

$('.nation').click(function() {
    $(this).toggleClass('change-icons');
    $(this).next('.choose-destinations').toggleClass('active');
    $(this).next('.list__choose-type').toggleClass('active');
})
$('.icon-show').click(function() {
    $(this).toggleClass('change-icons');
    $(this).parent('.flex-title').next('.list__choose-type').toggleClass('active');
})

// $('.check-all').click(function(){
//     var checkboxes = document.querySelectorAll('.item-check');
//     for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i] != this && $(this).parents('.flex-title').next('.list__choose-type'))
//             checkboxes[i].checked = this.checked;
//     }
// })


$(document).ready(function() {
    // plus minus typeroom number
    $('.minus-button').click(function(e) {
        e.preventDefault();
        var $input = $(this).parent('.input-group-number').find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus-button').click(function(e) {
        e.preventDefault();
        var $input = $(this).parent('.input-group-number').find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});