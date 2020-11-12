using System;
using System.ComponentModel.DataAnnotations;

namespace Simple.Exemple.OData.Domain.Entities
{
    public class Book
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ISBN { get; set; }
        public string Author { get; set;}
        public int CollectionId {get;set;}
    }
}