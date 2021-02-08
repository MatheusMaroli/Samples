using System;
using System.Linq;
using Xunit;

namespace Compartilhado.Teste
{
    public class ApiRespostaTeste
    {
        [Fact]
        public void Deve_Criar_Api_Resposta_E_Setar_Uma_Mensagem()
        {
            var mensagemEsperada = "Mensagem";
            var apiResposta = new ApiResposta<DadosTeste>();
            apiResposta.SetMensagem(mensagemEsperada);
            
            var mensagemSetada = apiResposta.Mensagens.FirstOrDefault();

            Assert.Equal(mensagemEsperada, mensagemSetada);            
        }

        [Fact]
        public void Deve_Criar_Api_Resposta_E_Setar_Invalido()
        {
            var apiResposta = new ApiResposta<DadosTeste>();
            apiResposta.SetInvalido();
            Assert.False(apiResposta.Valido);
        }

        [Fact]
        public void Deve_Criar_Api_Resposta_E_Setar_Dados()
        {
            var valorEsperado = "xxx";
            var apiResposta = new ApiResposta<DadosTeste>();
            apiResposta.Dados = new DadosTeste() { ValorDados = valorEsperado };
            Assert.True(apiResposta.Valido);
            Assert.Equal(apiResposta.Dados.ValorDados, valorEsperado);
        }
    }
}
