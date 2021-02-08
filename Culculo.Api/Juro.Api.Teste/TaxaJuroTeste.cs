
using Juro.Api.Models.Services;
using Xunit;

namespace Juro.Api.Teste
{
    public class TaxaJuroServiceTeste
    {
        [Fact]
        public void Deve_Retornar_O_Valor_Da_Taxa_De_Juro_De_1_Porcento()
        {
            var taxaDeJuroService = new TaxaJuroService();
            var taxaDeJuro = taxaDeJuroService.JurosDe1Porcento();
            var valorEsperado = 0.01;

            Assert.Equal(valorEsperado, taxaDeJuro);
        }


    }
}
