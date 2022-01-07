document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2021-10-07',
      height: 800,
      headerToolbar: {
        left: 'prev',
        center: 'title',
        right: 'next'
      },

      events: [
        {
          title: 'AFPK 제80회 원서접수',
          url: 'https://www.fpsbkorea.org/',
          color: "#FF0000",
          textcolor: "#ffffff",
          start: '2021-11-01',
          end: '2021-11-15'
        },
        {
          title: 'AFPK 제80회 시험일',
          color: "#FF0000",
          textcolor: "#ffffff",
          start: '2021-11-27',
        },
        {
          title: 'AFPK 제80회 합격자발표',
          color: "#FF0000",
          textcolor: "#ffffff",
          url: 'https://www.fpsbkorea.org/',
          start: '2021-12-17'
        },
        {
          title: 'CFP 제40회 원서접수',
          color: "#6495ed",
          textcolor: "#ffffff",
          url: 'https://www.fpsbkorea.org/',
          start: '2021-10-04',
          end: '2021-10-15'
        },
        {
          title: 'CFP 제40회 시험일',
          color: "#6495ed",
          textcolor: "#ffffff",
          start: '2021-10-30',
          end: '2021-10-31'
        },
        {
          title: 'CFP 제40회 합격자발표',
          color: "#FF0000",
          textcolor: "#ffffff",
          url: 'https://www.fpsbkorea.org/',
          start: '2021-11-19'
        },
        {
          title: 'ARPS 제30회 원서접수',
          color: "#ff69b4",
          textcolor: "#ffffff",
          url: 'http://arps.fpkorea.com/',
          start: '2021-11-12',
          end: '2021-11-19'
        },
        {
          title: 'ARPS 제30회 시험일',
          color: "#ff69b4",
          textcolor: "#ffffff",
          start: '2021-11-27'
        },
        {
          title: 'ARPS 제30회 합격자발표',
          color: "#ff69b4",
          textcolor: "#ffffff",
          url: 'http://arps.fpkorea.com/',
          start: '2021-12-09'
        },
        {
          title: '전산회계/세무 제99회 원서접수',
          color: "#4b0082",
          textcolor: "#ffffff",
          url: 'https://license.kacpta.or.kr/',
          start: '2021-11-04',
          end: '2021-11-10'
        },
        {
          title: '전산회계/세무 제99회 시험일',
          color: "#4b0082",
          textcolor: "#ffffff",
          start: '2021-12-04'
        },
        {
          title: '전산회계/세무 제99회 합격자발표',
          color: "#4b0082",
          textcolor: "#ffffff",
          url: 'https://license.kacpta.or.kr/',
          start: '2021-12-22'
        },
        {
          title: 'AT(FAT/TAT) 제50회 원서접수',
          url: 'https://at.kicpa.or.kr/home/main.jsp',
          start: '2021-11-04',
          end: '2021-11-11'
        },
        {
          title: 'AT(FAT/TAT) 제50회 시험일',
          start: '2021-12-12'
        },
        {
          title: 'AT(FAT/TAT) 제50회 합격자발표',
          url: 'https://at.kicpa.or.kr/home/main.jsp',
          start: '2021-12-23'
        },
        {
          title: '투자자산운용사 제30회 원서접수',
          color: "#2e8b57",
          textcolor: "#ffffff",
          url: 'https://license.kacpta.or.kr/',
          start: '2021-11-01',
          end: '2021-11-05'
        },
        {
          title: '투자자산운용사 제30회 시험일',
          color: "#2e8b57",
          textcolor: "#ffffff",
          start: '2021-11-28'
        },
        {
          title: '투자자산운용사 제30회 합격자발표',
          color: "#2e8b57",
          textcolor: "#ffffff",
          url: 'https://license.kacpta.or.kr/',
          start: '2021-12-09'
        },
        {
          title: '외환전문역 I종,II종 제42회 원서접수',
          color: "#daa520",
          textcolor: "#ffffff",
          url: 'https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualMain',
          start: '2021-10-12',
          end: '2021-10-19'
        },
        {
          title: '외환전문역 I종,II종 제42회 시험일',
          color: "#daa520",
          textcolor: "#ffffff",
          start: '2021-11-20'
        },
        {
          title: '외환전문역 I종,II종 제42회 합격자발표',
          color: "#daa520",
          textcolor: "#ffffff",
          url: 'https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualMain',
          start: '2021-12-03'
        },
        {
          title: '은행FP 제54회 원서접수',
          color: "#00bfff",
          textcolor: "#ffffff",
          url: 'https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualMain',
          start: '2021-09-12',
          end: '2021-10-05'
        },
        {
          title: '은행FP 제54회 시험일',
          color: "#00bfff",
          textcolor: "#ffffff",
          start: '2021-11-06'
        },
        {
          title: '은행FP 제54회 합격자발표',
          color: "#00bfff",
          textcolor: "#ffffff",
          url: 'https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualMain',
          start: '2021-11-19'
        },
        {
          title: '펀드투자권유자문인력 제20회 원서접수',
          color: "#1e90ff",
          textcolor: "#ffffff",
          url: 'https://license.kofia.or.kr/',
          start: '2021-11-15',
          end: '2021-11-19'
        },
        {
          title: '펀드투자권유자문인력 제20회 시험일',
          color: "#1e90ff",
          textcolor: "#ffffff",
          start: '2021-12-12'
        },
        {
          title: '펀드투자권유자문인력 제20회 합격자발표',
          color: "#1e90ff",
          textcolor: "#ffffff",
          url: 'https://license.kofia.or.kr/',
          start: '2021-12-23'
        },
        {
          title: '증권투자권유자문인력 제20회 원서접수',
          color: "#9370db",
          textcolor: "#ffffff",
          url: 'https://license.kofia.or.kr/',
          start: '2021-09-27',
          end: '2021-10-01'
        },
        {
          title: '증권투자권유자문인력 제20회 시험일',
          color: "#9370db",
          textcolor: "#ffffff",
          start: '2021-10-24'
        },
        {
          title: '증권투자권유자문인력 제20회 합격자발표',
          color: "#9370db",
          textcolor: "#ffffff",
          url: 'https://license.kofia.or.kr/',
          start: '2021-11-04'
        },
        {
          title: '파생상품투자권유자문인력 제24회 원서접수',
          color: "#a52a2a",
          textcolor: "#ffffff",
          url: 'https://license.kofia.or.kr/',
          start: '2021-10-11',
          end: '2021-10-15'
        },
        {
          title: '파생상품투자권유자문인력 제24회 시험일',
          color: "#a52a2a",
          textcolor: "#ffffff",
          start: '2021-11-07'
        },
        {
          title: '파생상품투자권유자문인력 제24회 합격자발표',
          color: "#a52a2a",
          textcolor: "#ffffff",
          url: 'https://license.kofia.or.kr/',
          start: '2021-11-18'
        },
        {
          title: '재경관리사/회계관리 제94회 원서접수',
          color: "#0000cd",
          textcolor: "#ffffff",
          url: 'https://www.samilexam.com/',
          start: '2021-10-28',
          end: '2021-11-04'
        },
        {
          title: '재경관리사/회계관리 제94회 시험일',
          color: "#0000cd",
          textcolor: "#ffffff",
          start: '2021-11-20'
        },
        {
          title: '재경관리사/회계관리 제94회 합격자발표',
          color: "#0000cd",
          textcolor: "#ffffff",
          url: 'https://www.samilexam.com/',
          start: '2021-11-26'
        },
        {
          title: '재경관리사/회계관리 제95회 원서접수',
          color: "#0000cd",
          textcolor: "#ffffff",
          url: 'https://www.samilexam.com/',
          start: '2021-12-02',
          end: '2021-12-07'
        },
        {
          title: '재경관리사/회계관리 제95회 시험일',
          color: "#0000cd",
          textcolor: "#ffffff",
          start: '2021-12-19'
        },
        {
          title: '재경관리사/회계관리 제95회 합격자발표',
          color: "#0000cd",
          textcolor: "#ffffff",
          url: 'https://www.samilexam.com/',
          start: '2021-12-24'
        },
        {
          title: 'TESAT 제70회 원서접수',
          color: "#8a2be2",
          textcolor: "#ffffff",
          url: 'http://www.tesat.or.kr/',
          start: '2021-10-19',
          end: '2021-11-08'
        },
        {
          title: 'TESAT 제70회 시험일',
          color: "#8a2be2",
          textcolor: "#ffffff",
          start: '2021-11-20'
        },
        {
          title: 'TESAT 제70회 합격자발표',
          color: "#8a2be2",
          textcolor: "#ffffff",
          url: 'http://www.tesat.or.kr/',
          start: '2021-11-26'
        },
        {
          title: '매경TEST 제78회 원서접수',
          color: "#8b4513",
          textcolor: "#ffffff",
          url: 'http://exam.mk.co.kr/',
          start: '2021-10-04',
          end: '2021-11-17'
        },
        {
          title: '매경TEST 제78회 시험일',
          color: "#8b4513",
          textcolor: "#ffffff",
          start: '2021-11-27'
        },
        {
          title: '매경TEST 제78회 합격자발표',
          color: "#8b4513",
          textcolor: "#ffffff",
          url: 'http://exam.mk.co.kr/',
          start: '2021-12-03'
        },
      ]
    });
    calendar.render();
  });