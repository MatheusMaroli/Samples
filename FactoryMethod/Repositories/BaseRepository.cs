using System.Collections.Generic;

namespace FactoryMethod.Repositories
{
    public abstract class BaseRepository<TEntity> where TEntity : class 
    {
           public abstract string GetAll(); 
    }
}