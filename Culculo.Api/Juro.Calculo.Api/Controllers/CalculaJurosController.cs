using Compartilhado;
using Juro.Calculo.Api.Commands;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;
using System.Threading.Tasks;

namespace Juro.Calculo.Api.Controllers
{
    public class CalculaJurosController : Controller
    {
        [HttpGet]
        [Route("/calculaJuros")]
        [ProducesResponseType(typeof(ApiResposta<Models.JuroCompostoCalculado>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> CalculaJuroComposto(CalculoJuroCommand parametros)
        {
            var resposta = new ApiResposta<Models.JuroCompostoCalculado>();
            try
            {
                var calculaJuroService = new Services.CalculaJuroService();
                resposta.Dados = new Models.JuroCompostoCalculado() { Valor = await calculaJuroService.CalcularJurosComposto(parametros) };
                return Ok(resposta);
            }
            catch(Exception e)
            {
                Console.WriteLine($"Falha no controller CalculaJuros para executar o método CalculaJuroComposto. Falha ===> {e.ToString()}");
                resposta.SetMensagem("Falha para calcular juros");
                resposta.SetInvalido();
                return BadRequest(resposta);
            }
        }
    }
}
