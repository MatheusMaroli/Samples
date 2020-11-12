using System;
using System.Collections.Generic;
using FactoryMethod.Entities;
using FactoryMethod.Repositories;

namespace FactoryMethod
{
    public static class Factory
    {
        private static Dictionary<Type, Type> registeredTypes = new Dictionary<System.Type, System.Type>();

        static Factory()
        {
            registeredTypes.Add(typeof(Person), typeof(PersonRepository));
            registeredTypes.Add(typeof(Car), typeof(CarRepository));
        }

        public static BaseRepository<TEntity> Create<TEntity>() where TEntity : class
        {
            var t = typeof(TEntity);
            if (registeredTypes.ContainsKey(t) == false) throw new NotSupportedException();

            var typeToCreate = registeredTypes[t];
            return Activator.CreateInstance(typeToCreate, true) as BaseRepository<TEntity> ;
        }

    }
}