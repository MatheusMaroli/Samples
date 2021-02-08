using Compartilhado;
using Juro.Calculo.Api.Controllers;
using Juro.Calculo.Api.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Juro.Calculo.Api.Teste
{
    public class GitControllerTeste
    {
        [Fact]
        public void Deve_Retornar_Api_Resposta_Com_Git_Repositorio()
        {
            var controller = new GitController();
            var respostaController = (OkObjectResult)controller.ShowMeTheCode();
            var apiResposta = (ApiResposta<Git>)respostaController.Value;

            Assert.True(apiResposta.Valido);
            Assert.True(apiResposta.Dados.Url == "xxxx");
        }
    }
}
