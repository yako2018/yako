﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Lab_1116.Models;
using System.Net.Http.Headers;

namespace Lab_1116.Controllers
{
    public class FindPetsController : ApiController
    {
        private LabDB_1116Entities db = new LabDB_1116Entities();

        //建cookie
        //public HttpResponseMessage Get() {
        //    var resp = new HttpResponseMessage();

        //    var cookie = new CookieHeaderValue("session-id", "12345");
        //    cookie.Expires = DateTimeOffset.Now.AddDays(1);
        //    cookie.Domain = Request.RequestUri.Host;
        //    cookie.Path = "/";

        //    resp.Headers.AddCookies(new CookieHeaderValue[] { cookie });
        //    return resp;
        //}


        public List<FindPet> GetFindPets()
        {
            var query = from o in db.FindPets
                        orderby o.PetID descending
                        select o;

            var viewData = query.ToList();
            return viewData;
        }

        // GET: api/FindPets
        //public IQueryable<FindPet> GetFindPets()
        //{
        //    return db.FindPets;
        //}

        // GET: api/FindPets/5
        [ResponseType(typeof(FindPet))]
        public IHttpActionResult GetFindPet(int id)
        {
            FindPet findPet = db.FindPets.Find(id);
            if (findPet == null)
            {
                return NotFound();
            }

            return Ok(findPet);
        }

        // PUT: api/FindPets/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutFindPet(int id, FindPet findPet)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != findPet.PetID)
            {
                return BadRequest();
            }

            db.Entry(findPet).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FindPetExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/FindPets
        [ResponseType(typeof(FindPet))]
        public IHttpActionResult PostFindPet(FindPet findPet)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.FindPets.Add(findPet);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = findPet.PetID }, findPet);
        }

        // DELETE: api/FindPets/5
        [ResponseType(typeof(FindPet))]
        public IHttpActionResult DeleteFindPet(int id)
        {
            FindPet findPet = db.FindPets.Find(id);
            if (findPet == null)
            {
                return NotFound();
            }

            db.FindPets.Remove(findPet);
            db.SaveChanges();

            return Ok(findPet);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FindPetExists(int id)
        {
            return db.FindPets.Count(e => e.PetID == id) > 0;
        }
    }
}