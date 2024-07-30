String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

for (let i = 1; i <= 7; i++) {
    d3.text('./static/csv/Offroad' + i + '.txt', function(err, data) {
        if (err) throw err;

        // 按行分割文本
        var rows = data.split('\n');

        // 解析每行数据
        var x = [];
        var y = [];
        var z = [];
        for (let row of rows) {
            let parts = row.split(' ');
            if (parts.length === 8) { // 确保每行有8个数据
                x.push(parseFloat(parts[1]));
                y.push(parseFloat(parts[2]));
                z.push(parseFloat(parts[3]));
            }
        }

        // 使用Plotly绘制3D散点图
        Plotly.newPlot('Offroad' + i, [{
            type: 'scatter3d',
            mode: 'lines',
            x: x,
            y: y,
            z: z,
            opacity: 1,
            line: {
                width: 3,
                reversescale: false
            }
        }], {
            height: 640,
            scene: {
                aspectmode: "data",
            },
        });
    });
}

for (let i = 1; i <= 3; i++) {
    d3.text('./static/csv/bridge0' + i + '.txt', function(err, data) {
        if (err) throw err;

        // 按行分割文本
        var rows = data.split('\n');

        // 解析每行数据
        var x = [];
        var y = [];
        var z = [];
        for (let row of rows) {
            let parts = row.split(' ');
            if (parts.length === 8) { // 确保每行有8个数据
                x.push(parseFloat(parts[1]));
                y.push(parseFloat(parts[2]));
                z.push(parseFloat(parts[3]));
            }
        }

        // 使用Plotly绘制3D散点图
        Plotly.newPlot('bridge0' + i, [{
            type: 'scatter3d',
            mode: 'lines',
            x: x,
            y: y,
            z: z,
            opacity: 1,
            line: {
                width: 3,
                reversescale: false
            }
        }], {
            height: 640,
            scene: {
                aspectmode: "data",
            },
        });
    });
}

for (let i = 1; i <= 3; i++) {
    d3.text('./static/csv/Urban_Tunnel0' + i + '.txt', function(err, data) {
        if (err) throw err;

        // 按行分割文本
        var rows = data.split('\n');

        // 解析每行数据
        var x = [];
        var y = [];
        var z = [];
        for (let row of rows) {
            let parts = row.split(' ');
            if (parts.length === 8) { // 确保每行有8个数据
                x.push(parseFloat(parts[1]));
                y.push(parseFloat(parts[2]));
                z.push(parseFloat(parts[3]));
            }
        }

        // 使用Plotly绘制3D散点图
        Plotly.newPlot('Urban_Tunnel0' + i, [{
            type: 'scatter3d',
            mode: 'lines',
            x: x,
            y: y,
            z: z,
            opacity: 1,
            line: {
                width: 3,
                reversescale: false
            }
        }], {
            height: 640,
            scene: {
                aspectmode: "data",
            },
        });
    });
}

for (let i = 1; i <= 10; i++) {
    d3.text('./static/csv/Shield_tunnel' + i + '.txt', function(err, data) {
        if (err) throw err;

        // 按行分割文本
        var rows = data.split('\n');

        // 解析每行数据
        var x = [];
        var y = [];
        var z = [];
        for (let row of rows) {
            let parts = row.split(' ');
            if (parts.length === 8) { // 确保每行有8个数据
                x.push(parseFloat(parts[1]));
                y.push(parseFloat(parts[2]));
                z.push(parseFloat(parts[3]));
            }
        }

        // 使用Plotly绘制3D散点图
        Plotly.newPlot('Shield_tunnel' + i, [{
            type: 'scatter3d',
            mode: 'lines',
            x: x,
            y: y,
            z: z,
            opacity: 1,
            line: {
                width: 3,
                reversescale: false
            }
        }], {
            height: 640,
            scene: {
                aspectmode: "data",
            },
        });
    });
}

for (let i = 1; i <= 5; i++) {
    d3.text('./static/csv/Tunneling_tunnel' + i + '.txt', function(err, data) {
        if (err) throw err;

        // 按行分割文本
        var rows = data.split('\n');

        // 解析每行数据
        var x = [];
        var y = [];
        var z = [];
        for (let row of rows) {
            let parts = row.split(' ');
            if (parts.length === 8) { // 确保每行有8个数据
                x.push(parseFloat(parts[1]));
                y.push(parseFloat(parts[2]));
                z.push(parseFloat(parts[3]));
            }
        }

        // 使用Plotly绘制3D散点图
        Plotly.newPlot('Tunneling_tunnel' + i, [{
            type: 'scatter3d',
            mode: 'lines',
            x: x,
            y: y,
            z: z,
            opacity: 1,
            line: {
                width: 3,
                reversescale: false
            }
        }], {
            height: 640,
            scene: {
                aspectmode: "data",
            },
        });
    });
}


const filenames = [
    'Inland_Waterways_Long_beta',
    'Inland_Waterways_Medium_beta',
    'Inland_Waterways_Short_beta'
];

filenames.forEach(function(filename) {
    d3.text(`./static/csv/${filename}.txt`, function(err, data) {
        if (err) throw err;

        var lines = data.split('\n');
        var rows = [];

        for (let j = 0; j < lines.length; j++) {
            let line = lines[j].trim();
            if (line) { // 确保不处理空行
                let parts = line.split(' ');
                if (parts.length === 8) { // 确保行有8个元素
                    rows.push(parts.map(function(item) {
                        return parseFloat(item);
                    }));
                }
            }
        }

        var x = rows.map(function(row) { return row[1]; });
        var y = rows.map(function(row) { return row[2]; });
        var z = rows.map(function(row) { return row[3]; });

        Plotly.newPlot(filename, [{
            type: 'scatter3d',
            mode: 'lines',
            x: x,
            y: y,
            z: z,
            opacity: 1,
            line: {
                width: 3,
                reversescale: false
            }
        }], {
            height: 640,
            scene: {
                aspectmode: "data",
            },
        });
    });
});


const filenames_flat_surface = [
    'flat_surfaces_smooth',
    'flat_surfaces_aggressive'
];

filenames_flat_surface.forEach(function(filename) {
    d3.text(`./static/csv/${filename}.txt`, function(err, data) {
        if (err) throw err;

        var lines = data.split('\n');
        var rows = [];

        for (let j = 0; j < lines.length; j++) {
            let line = lines[j].trim();
            if (line) { // 确保不处理空行
                let parts = line.split(' ');
                if (parts.length === 8) { // 确保行有8个元素
                    rows.push(parts.map(function(item) {
                        return parseFloat(item);
                    }));
                }
            }
        }

        var x = rows.map(function(row) { return row[1]; });
        var y = rows.map(function(row) { return row[2]; });
        var z = rows.map(function(row) { return row[3]; });

        Plotly.newPlot(filename, [{
            type: 'scatter3d',
            mode: 'lines',
            x: x,
            y: y,
            z: z,
            opacity: 1,
            line: {
                width: 3,
                reversescale: false
            }
        }], {
            height: 640,
            scene: {
                aspectmode: "data",
            },
        });
    });
});