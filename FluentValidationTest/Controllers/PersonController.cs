using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FluentValidationTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] Models.Person param) {
            if (!ModelState.IsValid)
                return Ok(param);
            return Ok("Result Is Sucessfull.");    
        } 

    }
}