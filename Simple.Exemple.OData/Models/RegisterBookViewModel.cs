using System.Collections.Generic;
using Simple.Exemple.OData.Domain.Entities;

namespace Simple.Exemple.OData.Models
{
    public class RegisterBookViewModel
    {
        public IList<Book> Books {get;set;}
    }
}