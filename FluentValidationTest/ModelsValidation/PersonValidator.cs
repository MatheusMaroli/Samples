using FluentValidation;

namespace FluentValidationTest.ModelsValidation
{
    public class PersonValidator : AbstractValidator<Models.Person>
    {
        public PersonValidator(){
            RuleFor(person => person.FirstName).NotNull().WithMessage("First Name can't be null.");
            RuleFor(person => person.SecondName).NotNull().WithName("Second Name can't be null");
        }
    }
}