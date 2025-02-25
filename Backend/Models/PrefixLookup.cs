using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using BackendApi.Models;

[Table("PREFIX_LOOKUP")]
public class PrefixLookup
{
    public PrefixLookup()
    {
        Borrowers = new List<Borrower>();
    }
    [Key]
    [Column("PREFIX_ID")]
    public int Id { get; set; }

    [Required]
    [Column("PREFIX_NAME")]
    [StringLength(20)]
    public string PrefixName { get; set; } = string.Empty;

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