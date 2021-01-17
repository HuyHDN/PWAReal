(function ($) {

    // Kiểu thanh toán lãi:
    // 1 - Số tiền trả theo dự nợ giảm dần
    // 2 - Số tiền trả đều hàng tháng
    var interest_type = 2;

    var textContent = ('textContent' in document) ? 'textContent' : 'innerText';
    var $document = $(document);
    var selector = '[data-rangeslider]';
    var $element = $(selector);

    var touch = true;
    var total_inside = 0;

    //$('input[type="range"]').rangeslider();
    $element.rangeslider({

        // Feature detection the default is `true`.
        // Set this to `false` if you want to use
        // the polyfill also in Browsers which support
        // the native <input type="range"> element.
        polyfill: false,

        // Default CSS classes
        rangeClass: 'rangeslider',
        disabledClass: 'rangeslider--disabled',
        horizontalClass: 'rangeslider--horizontal',
        verticalClass: 'rangeslider--vertical',
        fillClass: 'rangeslider__fill',
        handleClass: 'rangeslider__handle',

        // Callback function
        onInit: function () {
            //valueOutput(this.$element[0]);
            //debugger
        },

        // Callback function
        onSlide: function (position, value) { },

        // Callback function
        onSlideEnd: function (position, value) { }
    });

    //$('input[type="range"]').rangeslider('update', true);

    //$('input[type="range"]').rangeslider('update', true);

    $document.on('input', 'input[type="range"], ' + selector, function (e) {
        if (touch) {
            valueOutput(e.target);
        }
    });

    function valueOutput(element) {
        //console.log(element.className);
        var value = element.value;
        //$('.product-price').val(value);
        //var output = element.parentNode.getElementsByTagName('input')[0] || element.parentNode.parentNode.getElementsByTagName('input')[0];
        //if (element.className)
        if (element.className === "range-product-price") {
            $('.product-price').val(value);
            calcultor_amount();
            calculator_interest_rate();
        }

        if (element.className === "range-percent-price") {
            $('.percent-price').val(value);
            calcultor_amount();
            calculator_interest_rate();
        }

        if (element.className === "range-time") {
            $('.time').val(value);
            calculator_interest_rate();
        }

        if (element.className === "range-interest") {
            $('.interest').val(value);
            calculator_interest_rate();
        }
    }

    /// Update chart
    function update_date_chart(interest, retainer, payment) {
        var index = 0;
        config.data.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                index++;
                if (index === 1) {
                    return interest;
                }
                if (index === 2) {
                    return retainer;
                }
                if (index === 3) {
                    return payment;
                }
            });
        });
        myChart.update();
    }
    

    $('.currency').inputmask("numeric", {
        radixPoint: ".",
        groupSeparator: ",",
        digits: 2,
        autoGroup: true,
        prefix: '', //No Space, this will truncate the first character
        rightAlign: false,
        oncleared: function () { }
    });

    //$('').change(function () {
    //    //console.log($('.product-price').val());
    //    var text = $('.product-price').val();

    //    var value = text.replace(/[,]+/g, "");
    //    console.log(value);
    //    $('.range-product-price').val(value);
    //});

    // Giá trị nhà đất
    $('.product-price').on('input', function () {
        touch = false;
        if (this.value === "") {
            this.value = 0;
        }
        var value = this.value.replace(/[,]+/g, "");
        $('.range-product-price').val(value).change();
        calcultor_amount();
        calculator_interest_rate();
    });

    // Số tiền vay
    $('.amount').on('input', function () {
        var value = this.value.replace(/[,]+/g, "");
        calcultor_percent();
    });

    // Phần trăm tiền vay
    $('.percent-price').on('input', function () {
        touch = false;
        //if (this.value === "") {
        //    this.value = 0;
        //}
        var value = this.value.replace(/[,]+/g, "");
        $('.range-percent-price').val(value).change();
        calcultor_amount();
        calculator_interest_rate();
    });

    // Thời gian vay
    $('.time').on('input', function () {
        touch = false;
        //if (this.value === "") {
        //    this.value = 0;
        //}
        var value = this.value.replace(/[,]+/g, "");
        $('.range-time').val(value).change();
        calculator_interest_rate();
    });

    // Thời gian vay
    $('.interest').on('input', function () {
        touch = false;
        //if (this.value === "") {
        //    this.value = 0;
        //}
        var value = this.value.replace(/[,]+/g, "");
        $('.range-interest').val(value).change();
        calculator_interest_rate();
    });

    $('.rangeslider__handle').mouseover(function () {
        touch = true;
    });

    $('.rangeslider__handle').on('touchstart', function (e) {
        touch = true;
    });

    function calcultor_percent() {
        var _price_total = $('.product-price').val().replace(/[,]+/g, "");
        var _amount = $('.amount').val().replace(/[,]+/g, "");
        var _percent = Math.round(Number(_amount) * 100 / Number(_price_total));
        $('.percent-price').val(_percent);

        touch = false;
        $('.range-percent-price').val(_percent).change();
        var _rs_retainer = formatNumber((_price_total - _amount) * 1000000, '.', ',');
        var _rs_payment = formatNumber(_amount * 1000000, '.', ',');
        $('.rs-retainer').html(_rs_retainer);
        $('.rs-payment').html(_rs_payment);
        calculator_interest_rate();
    }

    function calcultor_amount() {
        var _price_total = $('.product-price').val().replace(/[,]+/g, "");
        var _percent_price = $('.percent-price').val().replace(/[,]+/g, "");
        var _amount = Math.round(Number(_price_total) * (Number(_percent_price) / 100));
      
        var _rs_retainer = formatNumber((_price_total - _amount) * 1000000, '.', ',');
        var _rs_payment = formatNumber(_amount * 1000000, '.', ',');
        $('.amount').val(_amount);
        $('.rs-retainer').html(_rs_retainer);
        $('.rs-payment').html(_rs_payment);
    }

    ///
    this.interest_changed = function (e) {
        //console.log(e.value);
        interest_type = e.value;
        calculator_interest_rate();
    }

    function calculator_interest_rate() {
        var _price_total = $('.product-price').val().replace(/[,]+/g, ""); // Tổng giá trị BĐS - triệu VND
        var _amount = $('.amount').val().replace(/[,]+/g, ""); // Số tiền vay (Gốc phải trả) - triệu VND
        var _percent = $('.interest').val(); // Phần trăm lãi suất
        var _time = $('.time').val(); // Thời gian vay (Năm)


        //Thời gian vay (Tháng)
        _time = _time * 12;

        // Số tiền phải trả trước
        var _retainer = (_price_total - _amount) * 1000000;
        
        // Tổng tiền gốc phải trả
        _amount = _amount * 1000000;

        // Phần trăm lãi suất 1 tháng
        var _percent_month = Number(_percent / 100) / 12;

        // Tiền lãi trong 1 tháng
        var _interest_month = _amount * _percent_month;

        // Tiền gốc phải trả trong 1 tháng
        var _payment_month = _amount / _time;

        // Tổng gốc và lãi trong 1 tháng đầu
        var _amount_month = Math.round(_payment_month + _interest_month);

        var _interest_total = 0;

        interest_type = Number(interest_type);
        if (interest_type === 2) {
            // Tổng tiền lãi phải trả (Thanh toán đều hàng tháng )
            _interest_total = _interest_month * _time;
        }
        else if (interest_type === 1) {
            var _du_no_dau_ky = _amount;
            // Tổng tiền lãi phải trả (Thanh toán theo dư nợ giảm dần)
            for (var i = 0; i < _time; i++) {
                _interest_total += _du_no_dau_ky * _percent_month;
                _du_no_dau_ky = _du_no_dau_ky - _payment_month;
            }
        }
        _interest_total = Math.round(_interest_total);

        // Tổng cả gốc và lãi phải trả trong toàn kì (Đợn vị: Tỷ VND)
        var _total = ((Number(_price_total) + (_interest_total / 1000000)) / 1000).toFixed(2);
        
        var _rs_interest = formatNumber(_interest_total, '.', ',');

        var _rs_amount_first_month = formatNumber(_amount_month, '.', ',');
        $('.rs-interest').html(_rs_interest);
        $('.amount-first-month').html(_rs_amount_first_month);
        total_inside = _total;
        myChart.config.options.elements.center.text = total_inside + "\ntỷ";
        //$('.rs-total').html(_total);
        update_date_chart(_interest_total, _retainer, Number(_amount));
    }

    this.to_detail = function () {
        var _amount = $('.amount').val().replace(/[,]+/g, ""); // Số tiền vay (Gốc phải trả) - triệu VND
        var _percent = $('.interest').val(); // Phần trăm lãi suất
        var _time = $('.time').val(); // Thời gian vay (Năm)

        var data = {
            amount: _amount,
            interest: _percent,
            time: _time,
            type: interest_type
        }
        localStorage.setItem("InterestRate_Data", JSON.stringify(data));
        $("<a>").attr("href", "/tinh-lai-suat-vay").attr("target", "_blank")[0].click();
    }

    function formatNumber(nStr, decSeperate, groupSeperate) {
        nStr += '';
        x = nStr.split(decSeperate);
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + groupSeperate + '$2');
        }
        return x1 + x2;
    }

    var config = {
        type: 'doughnut',
        data: {
            labels: ["Lãi cần trả", "Cần trả trước", "Gốc cần trả"],
            datasets: [{
                label: '# of Votes',
                fill: true,
                data: [10, 10, 10],
                backgroundColor: [
                    '#e95155',
                    '#1397d4',
                    '#3d4d64'
                ],
                borderWidth: 5,
                borderColor: "#fff"
            }]
        },
        options: {
            elements: {
                center: {
                    text: total_inside
                }
            },
            cutoutPercentage: 75,
            legend: {
                display: false
            },
            animation: {
                animateScale: true,
                animateRotate: true
            },
            responsive: true,
            tooltips: {
                enabled: true,
                mode: 'label',
                callbacks: {
                    title: function (tooltipItem, data) {
                        return data['labels'][tooltipItem[0]['index']];
                    },
                    label: function (tooltipItem, data) {
                        return formatNumber(data['datasets'][0]['data'][tooltipItem['index']], ",", ".") + " VND";
                    },
                    afterLabel: function (tooltipItem, data) {
                        var dataset = data['datasets'][0];
                        var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                        return '(' + percent + '%)';
                    }
                },
                backgroundColor: '#FFF',
                titleFontSize: 14,
                titleFontColor: '#1397d4',
                bodyFontColor: '#000',
                bodyFontSize: 14,
                displayColors: false
            }
        }
    };

    Chart.pluginService.register({
        beforeDraw: function (chart) {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
            ctx.restore();
            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            var text = chart.config.options.elements.center.text,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    });

    try {
        var ctx = document.getElementById("chart").getContext('2d');
        var myChart = new Chart(ctx, config);
    } catch (err) {
        console.log(err);
    }

    this.InitInterestRate = function (price) {
        //console.log(price);
        touch = false;
        $('.product-price').val(Math.round(price));
        $('.range-product-price').val(price).change();
        calcultor_amount();
        calculator_interest_rate();
    };

})(jQuery);
