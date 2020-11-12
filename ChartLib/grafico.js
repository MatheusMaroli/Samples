function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}

var graficoCharDefault = function () {
    var label  = [];
    var values = [];
    var rgbColorGrafico = [];
    var MontagemDeCorDefault = true;

    var oGrafico = null;

    this.addLabel = function (aValue) {
        label.push(aValue);
    };

    this.addValue = function (aValue) {
        values.push(aValue);

    };

    this.addCor = function (aStrRgb) {
        rgbColorGrafico.push(aStrRgb);
        MontagemDeCorDefault = false;
    }

    var resetColor = function () {
        rgbColorGrafico = [];
    };

    var montarRgbColorGrafico = function () {

        if (MontagemDeCorDefault)
        {
            var quantidadeValue = values.length;
            var intervalo = Math.round(255 / quantidadeValue);

            var TrioAlteracao = getRandom(3);
            var rgbFixoValue = getRandom(255);

            var rgbVariavelValue = 255;
            for (var i = 0; i < quantidadeValue; i++) {

                if (TrioAlteracao == 1) {
                    rgbColorGrafico.push('rgba(' + rgbVariavelValue + ',' + rgbFixoValue + ',' + rgbFixoValue + ')');
                }
                else if (TrioAlteracao == 2) {
                    rgbColorGrafico.push('rgba(' + rgbFixoValue + ',' + rgbVariavelValue + ',' + rgbFixoValue + ')');
                }
                else {
                    rgbColorGrafico.push('rgba(' + rgbFixoValue + ',' + rgbFixoValue + ',' + rgbVariavelValue + ')');
                }
                rgbVariavelValue = rgbVariavelValue - intervalo;
            };
        }
    };

    var montarGrafico = function (aCanvas, aTypeGrafico) {

        resetColor();
        var ctx = aCanvas.getContext('2d');
        montarRgbColorGrafico();
        var config = {
            type: aTypeGrafico,
            data: {
                datasets: [{
                    data: values,
                    backgroundColor: rgbColorGrafico,
                    label: label,
                }],
                labels: label
            },
            options: {
                responsive: true
            }
        };


        if (oGrafico != null) {
            ctx.clearRect(0, 0, aCanvas.width, aCanvas.height);
            oGrafico.config = config;
            oGrafico.update();
        }
        else
            oGrafico = new Chart(ctx, config);
    }

    this.montarGraficoPizza = function (aCanvas) {
        montarGrafico(aCanvas, 'pie');
    };
    

    this.montarGraficoBarrasVertical = function (aCanvas) {
        montarGrafico(aCanvas, 'bar');
    };

    this.montarGraficoBarrasHorizontal = function (aCanvas) {
        montarGrafico(aCanvas, 'horizontalBar');
    };

    this.reset = function () {
        resetColor();
        label = [];
        values = [];
    }
};



$(document).ready(function () {

    var objGraficoPizza = new graficoCharDefault();
    var objGraficoBarVertical = new graficoCharDefault();
    var objGraficoBarHorizontal = new graficoCharDefault();

    $('#btnAdicionarLabelAndValue').click(function () {        

        objGraficoPizza.addLabel($('#lblParaAdd').val());
        objGraficoPizza.addValue($('#valuesParaAdd').val());


        objGraficoBarVertical.addLabel($('#lblParaAdd').val());
        objGraficoBarVertical.addValue($('#valuesParaAdd').val());

        objGraficoBarHorizontal.addLabel($('#lblParaAdd').val());
        objGraficoBarHorizontal.addValue($('#valuesParaAdd').val());
        
    });

    $('#btnGeraGraficoPizza').click(function () {

        var ctx = document.getElementById("chart-grafico-pizza");
        objGraficoPizza.montarGraficoPizza(ctx);
    });


    $('#btnGeraGraficoBaVertical').click(function () {

        var ctx = document.getElementById("chart-grafico-bar-vertical");
        objGraficoBarVertical.montarGraficoBarrasVertical(ctx);
    });

    $('#btnGeraGraficoBarHorizontal').click(function () {

        var ctx = document.getElementById("chart-grafico-bar-horizontal");
        objGraficoBarHorizontal.montarGraficoBarrasHorizontal(ctx);
    });
    

   
});