using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendApi.Models
{
    [Table("BORROWER_STATUS_LOOKUP")]
    public class BorrowerStatusLookup
    {
        public BorrowerStatusLookup()
        {
            Borrowers = new List<Borrower>();
        }
        [Key]
        [Column("STATUS_ID")]
        public int Id { get; set; }

        [Required]
        [Column("STATUS_NAME")]
        [StringLength(250)]
        public string StatusName { get; set; } = string.Empty;

        [Column("DESCRIPTION")]
        [StringLength(255)]
        public string? Description { get; set; }

        [Column("CREATED_AT")]
        public DateTime? CreatedAt { get; set; }

        [Column("UPDATED_AT")]
        public DateTime? UpdatedAt { get; set; }

        // Navigation property
        public ICollection<Borrower> Borrowers { get; set; }
    }
}