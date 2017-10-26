using Lab_1116.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Lab_1116.Controllers
{
    public class HomeController : Controller
    {
        LabDB_1116Entities db = new LabDB_1116Entities(); 
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        

        public ActionResult FindPet()
        {
            //var query = from o in db.FindPets
            //            select o;
            //List<FindPet> viewData = query.ToList();
            //return View(viewData);
            return View();
        }
        public ActionResult MemberFindPet() {
            return View();
        }
        public ActionResult YCreateFindPet()
        {
            return View();
        }

        //[HttpPost]
        //public ActionResult YCreateFindPet(YMember data) {
        //    return RedirectToAction("Product", "Home");
        //}


        [HttpPost]
        public ActionResult YCreateFindPet(FormCollection frm) {
            HttpPostedFileBase file1 = Request.Files["PetPhoto"];
            
            string UploadedPathFileName = Server.MapPath("~/image") + "\\" + file1.FileName;
            file1.SaveAs(UploadedPathFileName);
            //Response.Cookies["uploadImg"].Value = file1.FileName;
            //TempData["PetPhoto"] = file1.FileName;
            return View();
            //return RedirectToAction("YCreateFindPet", "Home");
        }

    }
}