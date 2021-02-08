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
            var gitService = new GitService();
            resposta.Dados = new Models.Git() { Url = gitService.RepositorioProjeto() };
            return Ok(resposta);
        }
    }
}
