﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FoundCity.Controllers
{
    public class PetController : Controller
    {
        // GET: Pet
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult MemberFindPet() {
            return View();
        }

        public ActionResult YCreateFindPet() {
            return View();
        }

        [HttpPost]
        public ActionResult YCreateFindPet(FormCollection frm) {
            HttpPostedFileBase file1 = Request.Files["PetPhoto"];
            try {
                string UploadedPathFileName = Server.MapPath("~/images") + "\\" + file1.FileName;
                file1.SaveAs(UploadedPathFileName);
                return RedirectToAction("MemberFindPet", "Pet");

                //測試先導原頁
                //return View();

            } catch (System.IO.DirectoryNotFoundException) {
                return View();
            }
        }

        public ActionResult YTest()
        {
            return View();
        }

    }
}