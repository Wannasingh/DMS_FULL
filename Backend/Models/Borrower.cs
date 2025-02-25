using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendApi.Models
{
    [Table("BORROWERS")]
    public class Borrower
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }
    
        [Column("USERNAME")]
        [StringLength(255)]
        public string? Username { get; set; }
    
        [Column("ACCOUNT_STATUS")]
        public int? AccountStatus { get; set; }  // Changed to int from string
    
        [Column("BORROWER_STATUS")]
        public int? BorrowerStatus { get; set; }  // Changed to int from string
    
        [Column("PREFIX")]
        public int? Prefix { get; set; }  // Changed to int from string
    
        [Column("POSITION")]
        [StringLength(250)]  // Updated length to 250
        public string? Position { get; set; }
    
        [Required]
        [Column("CITIZEN_ID")]
        [StringLength(13)]
        public string CitizenId { get; set; } = string.Empty;
    
        [Required]
        [Column("FULL_NAME")]
        [StringLength(100)]
        public string FullName { get; set; } = string.Empty;
    
        [Column("EMAIL")]
        [StringLength(100)]
        [EmailAddress]
        public string? Email { get; set; }
    
        [Column("PHONE_NUMBER")]
        [StringLength(20)]
        public string? PhoneNumber { get; set; }
    
        [Column("ADDRESS")]
        [StringLength(500)]
        public string? Address { get; set; }
    
        [Column("OUTSTANDING_DEBT")]
        public decimal? OutstandingDebt { get; set; }
    
        [Column("EMPLOYER_ID")]
        public int? EmployerId { get; set; }
    
        [Column("CREATED_AT")]
        public DateTime? CreatedAt { get; set; }
    
        [Column("UPDATED_AT")]
        public DateTime? UpdatedAt { get; set; }
    
        [ForeignKey("EmployerId")]
        public virtual Employer? Employer { get; set; }
    
        public int? PrefixId { get; set; }
        public PrefixLookup? PrefixLookup { get; set; }  // Made nullable
    
        [ForeignKey("BorrowerStatus")]
        public virtual BorrowerStatusLookup? BorrowerStatusLookup { get; set; }
    
        [ForeignKey("AccountStatus")]
        public virtual AccountStatusLookup? AccountStatusLookup { get; set; }
    }
}