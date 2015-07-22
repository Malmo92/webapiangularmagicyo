using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using Registrering.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Registrering.API
{

    [Route("api/[controller]")]
    public class PupilsController : Controller
    {
        private static List<Pupil> _pupils;

        public PupilsController()
        {
            _pupils = new List<Pupil>
            {
                new Pupil {Id = 1, Firstname = "Ola", Lastname = "Nordmann"},
                new Pupil {Id = 2, Firstname = "Kari", Lastname = "Nordmann"}
            };
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Pupil> Get()
        {
            return _pupils;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Pupil Get(int id)
        {
            return _pupils.FirstOrDefault(x => x.Id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Pupil value)
        {
            _pupils.Add(value);
        }

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var pupil = _pupils.FirstOrDefault(x => x.Id == id);
            _pupils.Remove(pupil);
        }
    }
}
