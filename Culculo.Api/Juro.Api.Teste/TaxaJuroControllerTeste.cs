using Compartilhado;
using Juro.Api.Controllers;
using Juro.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace Juro.Api.Teste
{
    public class TaxaJuroControllerTeste
    {
        [Fact]
        public void Deve_Retornar_Api_Resposta_Com_Valor_Do_Juro_De_1_Porcento()
        {
            var controller = new TaxaJuroController();
            var respostaController =  (OkObjectResult)controller.TaxaJuroUmPorcento();
            var apiResposta = (ApiResposta<TaxaJuro>)respostaController.Value;


            Assert.True(apiResposta.Valido);
            Assert.True(apiResposta.Dados.ValorJuro == 0.01);
        }
    }
}
