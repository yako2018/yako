using Lab_1116.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;

namespace Lab_1116.Controllers
{
    public class YMemberFindPetController : ApiController
    {
        private LabDB_1116Entities db = new LabDB_1116Entities();

        public List<FindPet> GetYMemberFindPet()
        {

            CookieHeaderValue cookie = Request.Headers.GetCookies("uid").FirstOrDefault();
            
            //if (cookie == null)
            //{
            //    var query = from o in db.FindPets
            //                orderby o.PetID descending
            //                select o;

            //    var viewData = query.ToList();
            //    return viewData;
            //}
            //else
            //{
                //CreatorId
                int uid = Convert.ToInt32(cookie["uid"].Value);
                var query = from o in db.FindPets
                            where o.CreatorId == uid
                            orderby o.PetID descending
                            select o;

                var viewData = query.ToList();
                return viewData;
            //}
            //}

        }
    }
}
