using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Mvc;
using Simple.Exemple.OData.Domain.DataAcess;
using Simple.Exemple.OData.Domain.Entities;
using Simple.Exemple.OData.Models;

namespace Simple.Exemple.OData.Controllers
{
    public class BookController : ODataController
    {
        private EfDbContext Context { get; set; }
        public BookController(EfDbContext context)
        {
            this.Context = context ?? throw new ArgumentNullException(nameof(context));
        }
        
        [HttpPost]
        public IActionResult Post([FromBody] RegisterBookViewModel model)
        {
            
            foreach(var book in model.Books)
            {
                this.Context.Books.Add(book);
                this.Context.SaveChanges();
            }
            return Created("/api/book/", model);
        }
        [EnableQuery]
        public IQueryable<Book> Get() => Context.Books.AsQueryable();   
    }
}