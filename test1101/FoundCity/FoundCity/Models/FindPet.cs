//------------------------------------------------------------------------------
// <auto-generated>
//     這個程式碼是由範本產生。
//
//     對這個檔案進行手動變更可能導致您的應用程式產生未預期的行為。
//     如果重新產生程式碼，將會覆寫對這個檔案的手動變更。
// </auto-generated>
//------------------------------------------------------------------------------

namespace FoundCity.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class FindPet
    {
        public int PetId { get; set; }
        public int CreatorId { get; set; }
        public string PetPhoto { get; set; }
        public string Species { get; set; }
        public string Size { get; set; }
        public string Age { get; set; }
        public string HairColor { get; set; }
        public string Sex { get; set; }
        public string Characteristic { get; set; }
        public string CreateDate { get; set; }
        public string LostDate { get; set; }
        public string LostPlace1 { get; set; }
        public string LostPlace2 { get; set; }
        public string LostPlace3 { get; set; }
        public Nullable<int> PlaceId { get; set; }
        public int State { get; set; }
        public string ContactMan { get; set; }
        public string ContactSex { get; set; }
        public string ContactTel { get; set; }
    }
}
