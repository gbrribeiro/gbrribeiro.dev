using Microsoft.AspNetCore.Mvc;
using Porfolio.Data;
using Porfolio.Models;
using System.Diagnostics;
using System.Text.Json.Serialization;

namespace Porfolio.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private Repository<ProjectViewModel> _projectRepository;
        private Repository<AcceptableCodes> _codeRepository;
        private Repository<Message> _messageRepository;

        public HomeController(ILogger<HomeController> logger, ApplicationDbContext context)
        {
            _logger = logger;
            _projectRepository = new Repository<ProjectViewModel>(context);
            _codeRepository = new Repository<AcceptableCodes>(context);
            _messageRepository = new Repository<Message>(context);

            //Ensure that the .HasData work as intended
            //new ApplicationDbContext().Database.EnsureCreated();
        }

        public IActionResult Index()
        {
            var listOfProjects = _projectRepository.GetAll();

            //listOfProjects.Add(new ProjectViewModel("cu", "Portfolio","Description", "https://cdn.hashnode.com/res/hashnode/image/upload/v1618303265402/nG-V048Yd.png?auto=compress,format&format=webp", "a", null));
            //listOfProjects.Add(new ProjectViewModel("cu", "Portfolio","Description", "https://cdn.hashnode.com/res/hashnode/image/upload/v1618303265402/nG-V048Yd.png?auto=compress,format&format=webp", "a", "cuzinho"));
            return View(listOfProjects);
        }

        [HttpPut]
        public async Task<IActionResult> CV(IFormFile file, string code)
        {

            if (!_codeRepository.GetAll().Any(c => c.Code == code)) return Unauthorized();
            try
            {
                
                using(var stream = new FileStream("./wwwroot/docs/CV - Gabriel Nunes Ribeiro.pdf", FileMode.OpenOrCreate))
                {
                    await file.CopyToAsync(stream);
                    stream.Close();
                }
            }
            catch (Exception err)
            {
                return BadRequest(err.Message);
            }
            return Ok();
        }

        [HttpPost]
        public IActionResult Project([FromBody] ProjectViewModel projectVM)
        {
            var isAuthorized = _codeRepository.GetAll().Any(_ => projectVM.checkCode(_.Code));
            if (isAuthorized)
            {
                _projectRepository.Add(projectVM);

                return Ok(projectVM);
            }
            return BadRequest();
        }

        [HttpDelete]
        public IActionResult Project([FromBody] ProjectDeletionViewModel projectDeletion)
        {
            try
            {
                var isAuthorized = _codeRepository.GetAll().Any(_ => _.Code == projectDeletion.Code);
                if (isAuthorized)
                {
                    var project = _projectRepository.GetById(projectDeletion.Id);
                    if (project == null) return NotFound();
                    _projectRepository.Delete(project);

                    return Ok();
                }
                return Unauthorized();
            }
            catch (Exception err)
            {
                return BadRequest(err.Message);
            }
        }


        [HttpPost]
        public IActionResult SendMessage(Message message)
        {
            if (message.Id == null) message.Id = Guid.NewGuid().ToString();
            if (message.Name != "" && message.Email != "" && message.Content != "")
            {
                _messageRepository.Add(message);
            }
            return RedirectToAction("Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}