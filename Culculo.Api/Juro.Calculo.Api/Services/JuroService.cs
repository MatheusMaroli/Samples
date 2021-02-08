using Compartilhado;
using Juro.Calculo.Api.Models;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace Juro.Calculo.Api.Services
{
    public class JuroService
    {
        private const string URL = "https://localhost:5000/taxaJuros";

        public async Task<double> BuscarValorJuro()
        {
            try
            {
                var _client = new HttpClient();
                _client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                var response = await _client.GetAsync(URL);
                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    var json = response.Content.ReadAsStringAsync().Result;
                    var obj = JsonConvert.DeserializeObject<ApiResposta<TaxaJuro>>(json);
                    return obj.Dados.ValorJuro;
                }
                else throw new ArgumentNullException("Falha para buscar valor de juros");

            }
            catch (Exception)
            {
                throw new ArgumentNullException("Falha para buscar valor de juros");
            }

        }

    }
}
