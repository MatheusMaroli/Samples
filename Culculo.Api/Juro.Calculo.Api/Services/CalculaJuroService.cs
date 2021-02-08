using System;
using System.Threading.Tasks;
using Juro.Calculo.Api.Commands;
using Juro.Calculo.Api.Models;

namespace Juro.Calculo.Api.Services
{
    public class CalculaJuroService
    {
        public async Task<decimal> CalcularJurosComposto(CalculoJuroCommand parametros)
        {
            try
            {
                var juroService = new JuroService();
                var valorJuro = await juroService.BuscarValorJuro();


                var valorFinal = (double)parametros.ValorInicial * Math.Pow((1 + valorJuro), parametros.TempoMeses); ;
                var valorFinalTruncado = Convert.ToDecimal(valorFinal.ToString("0.##"));
                return valorFinalTruncado;
            }
            catch(Exception e)
            {
                throw new Exception($"Falha para calcular juros composto. Falha ===> {e.ToString()}");
            }
        }

    }
}
