using System;

namespace FactoryMethod
{
    class Program
    {
        static void Main(string[] args)
        {
            var carRepository = Factory.Create<Entities.Car>();
            var personRepository = Factory.Create<Entities.Person>();

            Console.WriteLine(carRepository.GetAll());
            Console.WriteLine(personRepository.GetAll());

        }
    }
}
