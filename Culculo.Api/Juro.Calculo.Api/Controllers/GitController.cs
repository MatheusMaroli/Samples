using Compartilhado;
using Juro.Calculo.Api.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Juro.Calculo.Api.Controllers
{
    public class GitController : Controller
    {
        [HttpGet]
        [Route("/showmethecode")]
        [ProducesResponseType(typeof(ApiResposta<Models.Git>), (int)HttpStatusCode.OK)]
        public IActionResult ShowMeTheCode()
        {
            var resposta = new ApiResposta<Models.Git>();
            try
            {                
                var gitService = new GitService();
                resposta.Dados = new Models.Git() { Url = gitService.RepositorioProjeto() };
                return Ok(resposta);
            }
            catch (Exception e)
            {
                Console.WriteLine($"Falha no controller GitController para executar o método ShowMeTheCode. Falha ===> {e.ToString()}");
                resposta.SetMensagem("Falha para recupera caminho do github.");
                resposta.SetInvalido();
                return BadRequest(resposta);

            }
        
        }
    }
}
