using Microsoft.EntityFrameworkCore;

namespace Porfolio.Data
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private ApplicationDbContext _dbContext { get; set; }
        public Repository(ApplicationDbContext context)
        {
            _dbContext = context;
        }
        public void Add(T entity)
        {

            _dbContext.Add(entity);
            _dbContext.SaveChanges();

        }

        public void Delete(T entity)
        {

            _dbContext.Remove(entity);
            _dbContext.SaveChanges();
        }

        public List<T> GetAll()
        {

            return _dbContext.Set<T>().ToList();

        }

        public T? GetById(string id)
        {

            return _dbContext.Set<T>().Find(id);

        }

        public void Update(T entity)
        {

            _dbContext.Set<T>().Update(entity);
            _dbContext.SaveChanges();

        }
    }
}
