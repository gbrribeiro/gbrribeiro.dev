using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Porfolio.Models;

namespace Porfolio.Views.Partials
{
    public class _MessageModel : PageModel
    {
        public IActionResult OnGetPartial() => Partial("_Message", new Message("", "", ""));
        public async Task OnPostAsync()
        {

        }
    }
}
