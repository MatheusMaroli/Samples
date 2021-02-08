using Juro.Calculo.Api.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using Juro.Calculo.Api.Models;

namespace Projeto.Teste.Juro.Calculo.Api.Teste
{
    public class JuroServiceTeste
    {
        [Fact]
        public async void Deve_Buscar_Valor_De_Juro_De_1_Porcento_Na_Api_De_Juros()
        {
            try
            {
                var juroService = new JuroService();
                var valorBuscado = await juroService.BuscarValorJuro();
                var valorEsperado = 0.01;

                Assert.Equal(valorEsperado, valorBuscado);
            }
            catch(Exception)
            {
                throw;
            }
        }
    }
}
