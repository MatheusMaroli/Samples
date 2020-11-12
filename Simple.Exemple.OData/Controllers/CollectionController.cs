using System;
using System.Linq;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Mvc;
using Simple.Exemple.OData.Domain.DataAcess;
using Simple.Exemple.OData.Domain.Entities;

namespace Simple.Exemple.OData.Controllers
{
    public class CollectionController : ODataController
    {
        private EfDbContext Context { get; set; }
        public CollectionController(EfDbContext context)
        {
            this.Context = context ?? throw new ArgumentNullException(nameof(context));
        }
        
        [HttpPost]
        public IActionResult Post([FromBody] Collection model)
        {
            this.Context.Collections.Add(model);
            this.Context.SaveChanges();
            return Created("/api/collection/" + model.Id, model);
        }
        [EnableQuery]
        public IQueryable<Collection> Get()
        {
           return  Context.Collections.AsQueryable();   
        }
    }
}