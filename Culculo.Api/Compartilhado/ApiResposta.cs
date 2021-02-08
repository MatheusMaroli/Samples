using System.Collections.Generic;

namespace Compartilhado
{
    public class ApiResposta<TDados> where TDados : class
    {
        public bool Valido { get; private set; } = true;
        public TDados Dados { get; set; }
        public List<string> Mensagens { get; private set; } = new List<string>();

        public void SetMensagem(string message)
        {
            Mensagens.Add(message);
        }

        public void SetInvalido()
        {
            Valido = false;
        }
    }
}
