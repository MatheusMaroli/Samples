using Microsoft.AspNetCore.Mvc;
using System;
using Juro.Api.Models.Services;
using Juro.Api.Models;
using Compartilhado;
using System.Net;

namespace Juro.Api.Controllers
{
    public class TaxaJuroController : Controller
    {
        [HttpGet]
        [Route("taxaJuros")]
        [ProducesResponseType(typeof(ApiResposta<TaxaJuro>), (int)HttpStatusCode.OK)]
        public IActionResult TaxaJuroUmPorcento()
        {
            var resposta = new ApiResposta<TaxaJuro>();
            try
            {
                var taxaJuroService = new TaxaJuroService();
                resposta.Dados = new TaxaJuro() { ValorJuro = taxaJuroService.JurosDe1Porcento() };
                return Ok(resposta);
            }
            catch(Exception e)
            {
                Console.WriteLine($"Falha no controller TaxaJuro para executar o método Index. Falha ===> {e.ToString()}");
                resposta.SetMensagem("Falha para recupera taxa de juro.");
                resposta.SetInvalido();
                return BadRequest(resposta);

            }
        }
    }
}
