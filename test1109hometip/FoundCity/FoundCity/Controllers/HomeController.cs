using FoundCity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FoundCity.Controllers {
    public class HomeController : Controller {

        HomeModel homeModel = new HomeModel();

        CMemberService memberService = new CMemberService();
        public ActionResult Index() {
            //為對照isSameData而建
            /*驗證頁面資料是否經過驗證*/
            if (User.Identity.IsAuthenticated)
            {
                /*取得會員Id*/
                ViewData["MemberId"] = memberService.GetMemberId(User.Identity.Name);
            }
            return View();
        }

        [HttpGet]
        public ActionResult Data() {
            var data = homeModel.Data();
            return Json(data,JsonRequestBehavior.AllowGet);
        }

    }
}