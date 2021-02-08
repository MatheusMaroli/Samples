using Juro.Calculo.Api.Controllers;
using Juro.Calculo.Api.Models;
using Juro.Calculo.Api.Commands;
using Microsoft.AspNetCore.Mvc;
using Xunit;
using Compartilhado;

namespace Juro.Calculo.Api.Teste
{
    public class CalculaJurosControllerTeste
    {
        [Fact]
        public async void Deve_Retornar_Api_Resposta_Com_Juro_Calculo_Sobre_Valor_De_100_E_Com_O_Tempo_De_5_Meses()
        {
            var controller = new CalculaJurosController();
            var parametros = new CalculoJuroCommand() { ValorInicial = 100, TempoMeses = 5 };
            var respostaController = (OkObjectResult)await controller.CalculaJuroComposto(parametros);
            var apiResposta = (ApiResposta<JuroCompostoCalculado>)respostaController.Value;

            Assert.True(apiResposta.Valido);
            Assert.True(apiResposta.Dados.Valor == new decimal(105.10));
        }
    }
}
