using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DressStore.Models;

namespace DressStore.Controllers
{
    public class HomeController : Controller
    {
        private DressContext db = new DressContext();
        // GET: Home
        [HttpGet]
        public ActionResult Index()
        {
            return View(db.Products);
        }
        [HttpPost]
        public ActionResult Index(Product product)
        {
            //asdasd
            db.Products.Add(product);
            db.SaveChanges();
            return View();
        }
    }
}