using System;
using System.Text.Json.Serialization;
using System.Xml.Linq;

namespace Porfolio.Models
{
    public class ProjectViewModel
    {
     
        [JsonConstructor]
        public ProjectViewModel(string code, string name,string description, string imageUrl, string gitHubUrl, string? url)
        {
            Id = Guid.NewGuid().ToString();
            Code = code;
            Name = name;
            Description = description;
            ImageUrl = imageUrl;
            GitHubUrl = gitHubUrl;
            Url = url;
        }

        public string Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string GitHubUrl { get; set; }
        public string? Url { get; set; }

        public bool checkCode(string code)
        {
            if(code == Code) return true;
            return false;
        }

    }
}
