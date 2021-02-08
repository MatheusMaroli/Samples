using Juro.Calculo.Api.Commands;
using Juro.Calculo.Api.Services;
using Xunit;

namespace Juro.Calculo.Api.Teste
{
    public class CalculoJuroServiceTeste
    {
        [Fact]
        public async void Deve_Calcular_Juros_Composto()
        {
            var parametros = new CalculoJuroCommand()
            {
                ValorInicial = 100,
                TempoMeses = 5
            };

            var calculoJuros = new CalculaJuroService();
            var jurosCompostoCalculado = await calculoJuros.CalcularJurosComposto(parametros);
            decimal jurosCompostoEsperado = new decimal(105.10);
            Assert.Equal(jurosCompostoEsperado, jurosCompostoCalculado);
        }

    }
}
