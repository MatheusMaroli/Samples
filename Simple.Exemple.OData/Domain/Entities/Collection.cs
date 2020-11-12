using System.Collections.Generic;

namespace Simple.Exemple.OData.Domain.Entities
{
    public class Collection
    {
        public int Id {get;set;}
        public string Name {get;set;}
        public IList<Book> Books {get;set;}
    }
}