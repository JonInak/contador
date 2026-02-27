$(document).delegate('#phrtres', 'pagecreate', function () {
    var MONTH_NAMES = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    var WEEKDAY_NAMES = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
    var MONTH_ABBR = {
        Jan: 1,
        Feb: 2,
        Mar: 3,
        Apr: 4,
        May: 5,
        Jun: 6,
        Jul: 7,
        Aug: 8,
        Sep: 9,
        Oct: 10,
        Nov: 11,
        Dec: 12
    };

    var today = new Date();
    var state = {
        user: '',
        year: today.getFullYear(),
        currentMonth: today.getMonth() + 1,
        viewMode: 'month',
        punches: [],
        hours: [],
        calendar: [],
        punchIndex: {},
        hourIndex: {},
        hoursTotals: {
            realYear: 0,
            vacYear: 0,
            bajaYear: 0
        }
    };

    var dom = {
        userHidden: $('#usuariooculto'),
        yearInput: $('#modfecha'),
        yearButton: $('#botonurte'),
        userTitle: $('#tablecodigo'),
        monthButton: $('#viewCurrentMonth'),
        yearViewButton: $('#viewFullYear'),
        monthsContainer: $('#tablasmeses'),
        dayDetailPanel: $('#dayDetailPanel'),
        dayDetailTitle: $('#dayDetailTitle'),
        dayDetailContent: $('#dayDetailContent')
    };

    function pad2(value) {
        return value < 10 ? '0' + value : String(value);
    }

    function round2(value) {
        return Math.round((parseFloat(value) || 0) * 100) / 100;
    }

    function formatHours(value) {
        var rounded = round2(value);
        return (Math.round(rounded * 100) / 100).toString();
    }

    function toIso(year, month, day) {
        return year + '-' + pad2(month) + '-' + pad2(day);
    }

    function monthName(month) {
        return MONTH_NAMES[month - 1] || '';
    }

    function parseIsoDate(isoDate) {
        var parts = (isoDate || '').split('-');
        if (parts.length !== 3) {
            return null;
        }
        var year = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10);
        var day = parseInt(parts[2], 10);
        if (!year || !month || !day) {
            return null;
        }
        return new Date(year, month - 1, day);
    }

    function normalizeUser(rawUser) {
        return (rawUser || '').replace(/\s+/g, ' ').trim();
    }

    function parseCounterDate(rawDate) {
        if (!rawDate || typeof rawDate !== 'string') {
            return null;
        }

        var parts = rawDate.split(' ');
        if (parts.length < 5) {
            return null;
        }

        var month = MONTH_ABBR[parts[1]];
        var day = parseInt(parts[2], 10);
        var year = parseInt(parts[3], 10);
        var time = (parts[4] || '').substring(0, 5);

        if (!month || !day || !year) {
            return null;
        }

        if (!/^\d{2}:\d{2}$/.test(time)) {
            time = '00:00';
        }

        return {
            iso: toIso(year, month, day),
            time: time
        };
    }

    function diffHours(isoDate, entryTime, exitTime) {
        var start = new Date(isoDate + 'T' + entryTime + ':00');
        var end = new Date(isoDate + 'T' + exitTime + ':00');

        if (isNaN(start.getTime()) || isNaN(end.getTime()) || end.getTime() < start.getTime()) {
            return 0;
        }

        return round2((end.getTime() - start.getTime()) / 3600000);
    }

    function isDateInSelectedYear(isoDate) {
        return String(isoDate || '').substring(0, 4) === String(state.year);
    }

    function isPastOrToday(isoDate) {
        var dateObj = parseIsoDate(isoDate);
        if (!dateObj) {
            return false;
        }

        return dateObj.getTime() <= new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59).getTime();
    }

    function theoreticalYearHours() {
        var user = state.user.trim();

        if (state.year !== 2017) {
            return 1752;
        }

        if (user === 'eli') { return 1456; }
        if (user === 'joanes') { return 1579; }
        if (user === 'markel') { return 916.83; }
        if (user === 'ziortza') { return 545; }
        if (user === 'alaitz') { return 355; }

        return 1752;
    }

    function calendarAdjustment() {
        var user = state.user.trim();

        if (state.year !== 2017) {
            return 0;
        }

        if (user === 'eli' || user === 'markel' || user === 'ziortza' || user === 'alaitz') {
            return 0;
        }

        if (user === 'joanes') {
            return 26.85;
        }

        return 24.02;
    }

    function buildPunchIndex() {
        var index = {};

        $.each(state.punches, function (_, row) {
            var entry = parseCounterDate(row.fichaje);
            if (!entry || !isDateInSelectedYear(entry.iso)) {
                return;
            }

            var exit = parseCounterDate(row.salida);
            var exitTime = exit ? exit.time : '';
            var duration = exitTime ? diffHours(entry.iso, entry.time, exitTime) : 0;

            if (!index[entry.iso]) {
                index[entry.iso] = [];
            }

            index[entry.iso].push({
                entry: entry.time,
                exit: exitTime,
                duration: duration
            });
        });

        $.each(index, function (isoDate, entries) {
            entries.sort(function (a, b) {
                return a.entry.localeCompare(b.entry);
            });
            index[isoDate] = entries;
        });

        state.punchIndex = index;
    }

    function buildHoursIndex() {
        var index = {};
        var totals = {
            realYear: 0,
            vacYear: 0,
            bajaYear: 0
        };

        $.each(state.hours, function (_, row) {
            var isoDate = row.fecha;
            if (!isDateInSelectedYear(isoDate)) {
                return;
            }

            var value = round2(row.horas);
            var code = row.codigo || '';

            if (!index[isoDate]) {
                index[isoDate] = {
                    imputadas: 0,
                    fuera: 0,
                    vacaciones: 0,
                    baja: 0,
                    reales: 0
                };
            }

            if (code !== 'A015') {
                index[isoDate].imputadas += value;
                index[isoDate].reales += value;
                totals.realYear += value;
            }

            if (code !== 'A004-13' && row.fuera === 'SI' && code !== 'A015') {
                index[isoDate].fuera += value;
            }

            if (code.substring(0, 4) === 'A005') {
                index[isoDate].vacaciones += value;
                totals.vacYear += value;
            }

            if (code.substring(0, 4) === 'A009') {
                index[isoDate].baja += value;
                totals.bajaYear += value;
            }
        });

        $.each(index, function (isoDate, metrics) {
            metrics.imputadas = round2(metrics.imputadas);
            metrics.fuera = round2(metrics.fuera);
            metrics.vacaciones = round2(metrics.vacaciones);
            metrics.baja = round2(metrics.baja);
            metrics.reales = round2(metrics.reales);
        });

        state.hourIndex = index;
        state.hoursTotals = {
            realYear: round2(totals.realYear),
            vacYear: round2(totals.vacYear),
            bajaYear: round2(totals.bajaYear)
        };
    }

    function calendarHoursYear(onlyPastOrToday) {
        var sum = 0;

        $.each(state.calendar, function (_, row) {
            if (!isDateInSelectedYear(row.fecha)) {
                return;
            }

            if (onlyPastOrToday && !isPastOrToday(row.fecha)) {
                return;
            }

            sum += parseFloat(row.horas) || 0;
        });

        return round2(sum);
    }

    function calendarHoursMonth(month, onlyPastOrToday) {
        var sum = 0;

        $.each(state.calendar, function (_, row) {
            if (!isDateInSelectedYear(row.fecha)) {
                return;
            }

            var parts = String(row.fecha).split('-');
            var rowMonth = parseInt(parts[1], 10);

            if (rowMonth !== month) {
                return;
            }

            if (onlyPastOrToday && !isPastOrToday(row.fecha)) {
                return;
            }

            sum += parseFloat(row.horas) || 0;
        });

        return round2(sum);
    }

    function realHoursMonth(month) {
        var sum = 0;

        $.each(state.hours, function (_, row) {
            if (!isDateInSelectedYear(row.fecha)) {
                return;
            }

            var parts = String(row.fecha).split('-');
            var rowMonth = parseInt(parts[1], 10);

            if (rowMonth === month && row.codigo !== 'A015') {
                sum += parseFloat(row.horas) || 0;
            }
        });

        return round2(sum);
    }

    function getDayMetrics(isoDate) {
        var entries = state.punchIndex[isoDate] || [];
        var dayHours = state.hourIndex[isoDate] || {
            imputadas: 0,
            fuera: 0,
            vacaciones: 0,
            baja: 0,
            reales: 0
        };

        var fichaje = 0;
        $.each(entries, function (_, item) {
            fichaje += item.duration || 0;
        });

        fichaje = round2(fichaje);

        return {
            entries: entries,
            fichaje: fichaje,
            fuera: round2(dayHours.fuera),
            imputadas: round2(dayHours.imputadas),
            vacaciones: round2(dayHours.vacaciones),
            baja: round2(dayHours.baja),
            hasData: entries.length > 0 || dayHours.imputadas > 0 || dayHours.fuera > 0 || dayHours.vacaciones > 0 || dayHours.baja > 0
        };
    }

    function renderEntryPreview(entries) {
        if (!entries || entries.length === 0) {
            return '<span class="calendar-line-empty">Sin fichajes</span>';
        }

        var preview = [];
        $.each(entries.slice(0, 2), function (_, item) {
            preview.push('<span>' + item.entry + ' - ' + (item.exit || '--:--') + '</span>');
        });

        if (entries.length > 2) {
            preview.push('<span>+' + (entries.length - 2) + ' fich.</span>');
        }

        return preview.join('');
    }

    function renderDayDetail(isoDate) {
        var metrics = getDayMetrics(isoDate);
        var dateObj = parseIsoDate(isoDate);

        if (!dateObj) {
            return;
        }

        dom.dayDetailTitle.text(dateObj.getDate() + ' ' + monthName(dateObj.getMonth() + 1) + ' ' + dateObj.getFullYear());

        var html = '';
        html += '<div class="day-detail-metrics">';
        html += '<div class="detail-pill"><span>Total Fichajes</span><strong style="color: #2563eb;">' + formatHours(metrics.fichaje) + ' h</strong></div>';
        html += '<div class="detail-pill"><span>Fuera de oficina</span><strong style="color: #d97706;">' + formatHours(metrics.fuera) + ' h</strong></div>';
        html += '<div class="detail-pill"><span>Horas Imputadas</span><strong style="color: #16a34a;">' + formatHours(metrics.imputadas) + ' h</strong></div>';
        html += '</div>';

        if (metrics.entries.length > 0) {
            html += '<div class="day-detail-table-wrap">';
            html += '<table class="day-detail-table">';
            html += '<thead><tr><th>Entrada</th><th>Salida</th><th>Horas</th></tr></thead><tbody>';

            $.each(metrics.entries, function (_, item) {
                html += '<tr>';
                html += '<td>' + item.entry + '</td>';
                html += '<td>' + (item.exit || '--:--') + '</td>';
                html += '<td>' + formatHours(item.duration) + '</td>';
                html += '</tr>';
            });

            html += '</tbody></table></div>';
        } else {
            html += '<div class="day-detail-empty-text">Sin fichajes en este dia.</div>';
        }

        dom.dayDetailContent.html(html);
        dom.dayDetailPanel.removeClass('is-empty');
    }

    function renderMonthCard(month) {
        var daysInMonth = new Date(state.year, month, 0).getDate();
        var firstDay = new Date(state.year, month - 1, 1).getDay();
        var offset = (firstDay + 6) % 7;
        var html = '';
        var monthCardClasses = ['calendar-month-card'];
        if (state.viewMode === 'month' && month === state.currentMonth) {
            monthCardClasses.push('is-current-month-view');
        }

        html += '<section class="' + monthCardClasses.join(' ') + '" data-month="' + month + '">';
        html += '<header class="calendar-month-header">';
        if (state.viewMode === 'month') {
            html += '<button type="button" class="month-nav-btn month-nav-prev" title="Mes anterior">&#8249;</button>';
            html += '<h3>' + monthName(month) + '</h3>';
            html += '<button type="button" class="month-nav-btn month-nav-next" title="Mes siguiente">&#8250;</button>';
        } else {
            html += '<h3 class="month-header-link">' + monthName(month) + '</h3>';
        }
        html += '</header>';

        html += '<div class="calendar-weekdays">';
        $.each(WEEKDAY_NAMES, function (_, dayName) {
            html += '<div class="calendar-weekday">' + dayName + '</div>';
        });
        html += '</div>';

        html += '<div class="calendar-days">';

        for (var blank = 0; blank < offset; blank++) {
            html += '<div class="calendar-day calendar-day-empty" aria-hidden="true"></div>';
        }

        for (var day = 1; day <= daysInMonth; day++) {
            var isoDate = toIso(state.year, month, day);
            var metrics = getDayMetrics(isoDate);
            var dayDate = new Date(state.year, month - 1, day);
            var weekDay = dayDate.getDay();

            var classes = ['calendar-day'];
            if (weekDay === 0 || weekDay === 6) {
                classes.push('is-weekend');
            }
            if (isoDate === toIso(today.getFullYear(), today.getMonth() + 1, today.getDate()) && state.year === today.getFullYear()) {
                classes.push('is-today');
            }
            if (metrics.hasData) {
                classes.push('has-data');
            }
            if (metrics.vacaciones > 0) {
                classes.push('has-vacation');
            }
            if (metrics.baja > 0) {
                classes.push('has-baja');
            }

            html += '<button type="button" class="' + classes.join(' ') + '" data-date="' + isoDate + '">';
            html += '<div class="calendar-day-header">';
            html += '<span class="calendar-day-number">' + day + '</span>';

            if (state.viewMode === 'year') {
                html += '<span class="calendar-day-dot"></span>';
                html += '</div>';
            } else {
                // Conteo de fichajes a la derecha del numero
                var nFich = metrics.entries ? metrics.entries.length : 0;
                if (nFich > 0) {
                    html += '<span class="calendar-day-fichajes">' + nFich + ' fichaje' + (nFich > 1 ? 's' : '') + '</span>';
                } else {
                    html += '<span class="calendar-day-fichajes calendar-day-fichajes-empty">Sin fichajes</span>';
                }
                html += '</div>';

                html += '<div class="calendar-day-metrics">';
                html += '<span class="m-f" title="Fichaje"><span>F</span><span>' + formatHours(metrics.fichaje) + '</span></span>';
                html += '<span class="m-o" title="Fuera oficina"><span>O</span><span>' + formatHours(metrics.fuera) + '</span></span>';
                if (metrics.hasData && metrics.fichaje > 0 && (!metrics.imputadas || metrics.imputadas === 0)) {
                    html += '<span class="m-i m-sin-imputar">Sin imputar</span>';
                } else {
                    html += '<span class="m-i" title="Imputadas"><span>I</span><span>' + formatHours(metrics.imputadas) + '</span></span>';
                }
                html += '</div>';
            }
            html += '</button>';
        }

        var totalCells = offset + daysInMonth;
        var trailing = (7 - (totalCells % 7)) % 7;
        for (var rest = 0; rest < trailing; rest++) {
            html += '<div class="calendar-day calendar-day-empty" aria-hidden="true"></div>';
        }

        html += '</div>';
        html += '</section>';

        return html;
    }

    function monthsToRender() {
        if (state.viewMode === 'year') {
            var months = [];
            for (var month = 1; month <= 12; month++) {
                months.push(month);
            }
            return months;
        }

        return [state.currentMonth];
    }

    function updateViewButtons() {
        if (state.viewMode === 'year') {
            dom.yearViewButton.addClass('is-active');
            dom.monthButton.removeClass('is-active');
            dom.monthsContainer.addClass('is-year-view');
        } else {
            dom.monthButton.addClass('is-active');
            dom.yearViewButton.removeClass('is-active');
            dom.monthsContainer.removeClass('is-year-view');
        }
    }

    function updateUserTitle() {
        dom.userTitle.text(state.year + ' - ' + state.user.toUpperCase());
        dom.yearInput.val(state.year);
    }

    function updateKpis() {
        var horasReales = state.hoursTotals.realYear;
        var horasCalendarioHoy = calendarHoursYear(true);
        var horasCalendarioYear = calendarHoursYear(false);
        var horasCalendarioMesActual = calendarHoursMonth(state.currentMonth, true);
        var horasRealesMesActual = realHoursMonth(state.currentMonth);
        var horasTeoricas = theoreticalYearHours();
        var horasComplementarias = round2(horasReales - horasCalendarioHoy);
        var vacaciones = state.hoursTotals.vacYear;
        var baja = state.hoursTotals.bajaYear;
        var vacSinDisfrutar = round2(calendarAdjustment() + (horasCalendarioYear - horasTeoricas));

        $('#horasrealesurtedos').text(formatHours(horasReales));
        $('#horasteoricasurte').text(formatHours(horasTeoricas));
        $('#horascomplementarias').text(formatHours(horasComplementarias));
        $('#vacacionesdisfrutadasdos').text(formatHours(vacaciones));
        $('#vacacionesHtValue').text(formatHours(horasCalendarioMesActual));
        $('#vacacionesHrValue').text(formatHours(horasRealesMesActual));

        if ($('#vacacionesdisfrutadas').length) {
            $('#vacacionesdisfrutadas').text(formatHours(vacaciones));
        }
        if ($('#vacacionessindisfrutar').length) {
            $('#vacacionessindisfrutar').text(formatHours(vacSinDisfrutar));
        }
        if ($('#baja').length) {
            $('#baja').text(formatHours(baja));
        }
        if ($('#horascalendariourte').length) {
            $('#horascalendariourte').text(formatHours(horasCalendarioYear));
        }
        if ($('#horascalendariourtehoy').length) {
            $('#horascalendariourtehoy').text(formatHours(horasCalendarioHoy));
        }
        if ($('#horascalendariourtehoydos').length) {
            $('#horascalendariourtehoydos').text(formatHours(horasCalendarioHoy));
        }
    }

    function renderCalendar() {
        updateViewButtons();

        var html = '';
        $.each(monthsToRender(), function (_, month) {
            html += renderMonthCard(month);
        });

        dom.monthsContainer.html(html);

        var detailDate = toIso(state.year, state.currentMonth, 1);
        if (state.year === today.getFullYear() && state.currentMonth === (today.getMonth() + 1)) {
            detailDate = toIso(state.year, state.currentMonth, today.getDate());
        }
        renderDayDetail(detailDate);
    }

    function showLoading(message) {
        dom.monthsContainer.html('<div class="calendar-loading">' + message + '</div>');
    }

    function closeYearPopup() {
        try {
            $('#popupurte').popup('close');
        } catch (e) {
            // ignore popup close errors in non-mobile contexts
        }
    }

    function loadData() {
        if (!state.user) {
            showLoading('No se ha detectado usuario.');
            return;
        }

        showLoading('Cargando calendario...');

        var userTrim = state.user.trim();
        var userLegacy = ' ' + userTrim + ' ';

        $.when(
            $.ajax({
                url: 'server/phr_usuario.php',
                type: 'post',
                dataType: 'json',
                data: {
                    usuario: userLegacy
                }
            }),
            $.ajax({
                url: 'server/phr_horas.php',
                type: 'post',
                dataType: 'json',
                data: {
                    horasfecha: state.year,
                    usuario: userLegacy
                }
            }),
            $.ajax({
                url: 'server/phcalendariotres.php',
                type: 'post',
                dataType: 'json',
                data: {
                    urte: state.year,
                    usuario: userTrim
                }
            })
        ).done(function (counterResp, hoursResp, calendarResp) {
            state.punches = Array.isArray(counterResp[0]) ? counterResp[0] : [];
            state.hours = Array.isArray(hoursResp[0]) ? hoursResp[0] : [];
            state.calendar = Array.isArray(calendarResp[0]) ? calendarResp[0] : [];

            buildPunchIndex();
            buildHoursIndex();
            updateKpis();
            renderCalendar();
        }).fail(function () {
            showLoading('No se han podido cargar los datos del calendario.');
        });
    }

    function bindEvents() {
        dom.monthButton.off('click').on('click', function () {
            state.viewMode = 'month';
            renderCalendar();
        });

        dom.yearViewButton.off('click').on('click', function () {
            state.viewMode = 'year';
            renderCalendar();
        });

        dom.yearButton.off('click').on('click', function () {
            var selectedYear = parseInt(dom.yearInput.val(), 10);
            if (!selectedYear || selectedYear < 2017) {
                selectedYear = 2017;
            }

            state.year = selectedYear;
            updateUserTitle();
            closeYearPopup();
            loadData();
        });

        dom.monthsContainer.off('click', '.calendar-day[data-date]').on('click', '.calendar-day[data-date]', function () {
            renderDayDetail($(this).data('date'));
        });

        dom.monthsContainer.off('click', '.month-header-link').on('click', '.month-header-link', function () {
            var month = parseInt($(this).closest('.calendar-month-card').data('month'), 10);
            state.currentMonth = month;
            state.viewMode = 'month';
            renderCalendar();
        });

        dom.monthsContainer.off('click', '.month-nav-prev').on('click', '.month-nav-prev', function () {
            state.currentMonth = state.currentMonth > 1 ? state.currentMonth - 1 : 12;
            renderCalendar();
        });

        dom.monthsContainer.off('click', '.month-nav-next').on('click', '.month-nav-next', function () {
            state.currentMonth = state.currentMonth < 12 ? state.currentMonth + 1 : 1;
            renderCalendar();
        });
    }

    function init() {
        state.user = normalizeUser(dom.userHidden.text());
        dom.userHidden.hide();

        if (!state.user) {
            showLoading('No se ha podido leer el usuario.');
            return;
        }

        updateUserTitle();
        bindEvents();
        loadData();
    }

    init();
});
