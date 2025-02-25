using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendApi.Models
{
    [Table("EMPLOYERS")]
    public class Employer
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }
        
        [Required]
        [Column("TAX_ID")]
        [StringLength(13)]
        public string TaxId { get; set; } = string.Empty;
        
        [Required]
        [Column("ORGANIZATION_NAME")]
        [StringLength(200)]
        public string OrganizationName { get; set; } = string.Empty;
        
        [Required]
        [Column("ADDRESS")]
        [StringLength(500)]
        public string Address { get; set; } = string.Empty;
        
        [Column("PHONE_NUMBER")]
        [StringLength(20)]
        public string? PhoneNumber { get; set; }
        
        [Column("EMAIL")]
        [StringLength(100)]
        [EmailAddress]
        public string? Email { get; set; }
        
        [Required]
        [Column("COMPANY_TYPE")]
        [StringLength(100)]
        public string CompanyType { get; set; } = string.Empty;
        
        [Required]
        [Column("DEDUCTION_STATUS")]
        [StringLength(20)]
        public string DeductionStatus { get; set; } = string.Empty;
        
        [Column("CREATED_AT")]
        public DateTime? CreatedAt { get; set; }
        
        [Column("UPDATED_AT")]
        public DateTime? UpdatedAt { get; set; }
    }
}