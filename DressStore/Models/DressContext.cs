using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DressStore.Models
{
    public class DressContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
    }
}