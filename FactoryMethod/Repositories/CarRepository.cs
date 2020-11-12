using System.Collections.Generic;
using FactoryMethod.Entities;

namespace FactoryMethod.Repositories
{
    public class CarRepository : BaseRepository<Entities.Car>
    {
        public override string GetAll()
        {
            return "I am Car Repository";
        }
    }
}