using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DressStore.Models
{
    public class DressStoreDbInitializer: CreateDatabaseIfNotExists<DressContext>
    {
        protected override void Seed(DressContext context)
        {
            Product p1 = new Product {Id = 1, Name = "Джинсы", Price = 400};
            Product p2 = new Product {Id = 2, Name = "Юбка", Price = 213};

            context.Products.Add(p1);
            context.Products.Add(p2);

            base.Seed(context);
        }
    }
}