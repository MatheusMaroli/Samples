using FluentValidation;
using FluentValidationTest.Models;
using Microsoft.Extensions.DependencyInjection;

namespace FluentValidationTest.Services
{
    public class FluentValidationServices
    {
        public static void Configure(IServiceCollection services){
            
            services.AddTransient<IValidator<Person>, ModelsValidation.PersonValidator>();
        }
    }
}