using Porfolio.Data;

namespace Porfolio.Models
{
    public class Message
    {
        public Message(string name, string email, string content)
        {
            Id = Guid.NewGuid().ToString();
            Name = name;
            Email = email;
            Content = content;
        }
        public Message() { }
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Content { get; set; }

    }
}
