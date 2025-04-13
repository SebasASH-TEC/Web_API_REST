using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web_API_REST.DataStructures;
using Web_API_REST.Models;

namespace Web_API_REST.Controllers
{
    /// Controlador que gestiona una lista enlazada y proporciona endpoints GET, POST y DELETE para interactuar con ella.
    [Route("api/[controller]")]
    [ApiController]
    public class LinkedListController : ControllerBase
    {
        private readonly LinkedListService _linkedListService;

        public LinkedListController(LinkedListService linkedListService)
        {
            _linkedListService = linkedListService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_linkedListService.GetAll());
        }

        [HttpPost]
        public IActionResult Post([FromBody] LinkedListNodeModel model)
        {
            var id = _linkedListService.Add(model.Value);
            return Ok(new { Id = id });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            var success = _linkedListService.Delete(id);
            if (!success) return NotFound();
            return NoContent();
        }
    }
}
