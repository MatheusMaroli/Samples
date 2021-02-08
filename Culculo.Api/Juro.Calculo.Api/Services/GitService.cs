using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Juro.Calculo.Api.Services
{
    public class GitService
    {
        private const string UrlRepositorio = "https://github.com/MatheusMaroli/Samples/tree/main/Culculo.Api";
        public string RepositorioProjeto()
        {
            return UrlRepositorio;
        }
    }
}
