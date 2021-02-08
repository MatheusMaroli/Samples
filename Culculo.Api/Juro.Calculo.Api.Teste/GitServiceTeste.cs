using Juro.Calculo.Api.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Juro.Calculo.Api.Teste
{
    public class GitServiceTeste
    {
        [Fact]
        public void Deve_Retornar_Url_Do_Repositorio_Git()
        {
            var gitService = new GitService();
            var urlObtida = gitService.RepositorioProjeto();
            var urlEsperada = "https://github.com/MatheusMaroli/Samples/tree/main/Culculo.Api";
            Assert.Equal(urlEsperada, urlObtida);
        }
    }
}
