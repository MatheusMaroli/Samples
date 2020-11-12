using System.Collections.Generic;
using FactoryMethod.Entities;

namespace FactoryMethod.Repositories
{
    public class PersonRepository : BaseRepository<Entities.Person>
    {
        public override string GetAll()
        {
            return "I am Person Repository";
        }
    }
}