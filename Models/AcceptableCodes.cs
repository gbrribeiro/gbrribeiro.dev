namespace Porfolio.Models
{
    public class AcceptableCodes
    {
        public AcceptableCodes(string code)
        {
            Id = Guid.NewGuid().ToString();
            Code = code;
        }

        public AcceptableCodes() { }

        public string Id { get; set; }
        public string Code { get; set; }
    }
}
