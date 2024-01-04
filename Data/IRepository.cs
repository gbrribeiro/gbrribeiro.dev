namespace Porfolio.Data
{
    public interface IRepository<T> where T : class
    {
        public List<T> GetAll();
        public T? GetById(string id);
        public void Add(T entity);
        public void Update(T entity);
        public void Delete(T entity);

    }
}
