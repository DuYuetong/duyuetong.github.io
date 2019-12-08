var myChart = echarts.init(document.getElementById("myChart1"));
var option = {
    title: {
        text: '孕产妇护理比率'
    },
    tooltip: {},
    legend: {
        data: ['1992年', '1996年', '2000年', '2010年', '2017年']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '建卡率', max: 100 },
            { name: '系统管理率', max: 100 },
            { name: '产前检查率', max: 100 },
            { name: '产后访视率', max: 100 },
            { name: '住院分娩率', max: 100 }
        ]
    },
    series: [{
        name: '1992-2017',
        type: 'radar',
        // areaStyle: {normal: {}},
        lineStyle: {
            normal: {
                color: ["#111", "#222", "#333", "#444", "#555"]
            },
        },
        data: [{
                value: [76.6, 0, 69.7, 69.7, 52.7],
                name: '1992年'
            }, {
                value: [83.7, 65.6, 83.7, 80.1, 60.7],
                name: '1996年'
            },
            {
                value: [88.6, 77.2, 89.4, 86.2, 72.9],
                name: '2000年'
            },
            {
                value: [92.9, 84.1, 94.1, 90.8, 97.8],
                name: '2010年'
            },
            {
                value: [96.6, 89.6, 96.5, 94.0, 99.9],
                name: '2017年'
            }
        ]
    }]
};
myChart.setOption(option);