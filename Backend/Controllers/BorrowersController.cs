using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendApi.Data;
using BackendApi.Models;

namespace BackendApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BorrowersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BorrowersController(ApplicationDbContext context)
        {
            _context = context;
        }
    
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Borrower>>> GetBorrowers()
        {
            var borrowers = await _context.Borrowers
                .Include(b => b.Employer)
                .Include(b => b.PrefixLookup)
                .Include(b => b.BorrowerStatusLookup)
                .Include(b => b.AccountStatusLookup)
                .Select(b => new
                {
                    Id = b.Id,
                    Username = b.Username,
                    AccountStatus = b.AccountStatusLookup.StatusName,
                    BorrowerStatus = b.BorrowerStatusLookup.StatusName,
                    Prefix = b.PrefixLookup.PrefixName,
                    PrefixId = b.PrefixLookup.Id,
                    Position = b.Position ?? "",
                    CitizenId = b.CitizenId,
                    FullName = b.FullName,
                    Email = b.Email,
                    PhoneNumber = b.PhoneNumber,
                    Address = b.Address,
                    OutstandingDebt = b.OutstandingDebt,
                    EmployerId = b.EmployerId,
                    CreatedAt = b.CreatedAt,
                    UpdatedAt = b.UpdatedAt,
                    Employer = b.Employer.OrganizationName
                })
                .ToListAsync();
    
            return Ok(borrowers);
        }
    
        [HttpGet("{id}")]
        public async Task<ActionResult<Borrower>> GetBorrower(int id)
        {
            var borrower = await _context.Borrowers
                .Include(b => b.Employer)
                .Include(b => b.PrefixLookup)
                .Include(b => b.BorrowerStatusLookup)
                .Include(b => b.AccountStatusLookup)
                .Select(b => new
                {
                    Id = b.Id,
                    Username = b.Username,
                    AccountStatus = b.AccountStatusLookup.StatusName,
                    AccountStatusId = b.AccountStatus,
                    BorrowerStatus = b.BorrowerStatusLookup.StatusName,
                    BorrowerStatusId = b.BorrowerStatus,
                    Prefix = b.PrefixLookup.PrefixName,
                    PrefixId = b.PrefixLookup.Id,
                    Position = b.Position ?? "",
                    CitizenId = b.CitizenId,
                    FullName = b.FullName,
                    Email = b.Email,
                    PhoneNumber = b.PhoneNumber,
                    Address = b.Address,
                    OutstandingDebt = b.OutstandingDebt,
                    EmployerId = b.EmployerId,
                    CreatedAt = b.CreatedAt,
                    UpdatedAt = b.UpdatedAt,
                    Employer = b.Employer
                })
                .FirstOrDefaultAsync(b => b.Id == id);

            if (borrower == null)
            {
                return NotFound();
            }

            return Ok(borrower);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutBorrower(int id, Borrower borrower)
        {
            if (id != borrower.Id)
            {
                return BadRequest();
            }

            _context.Entry(borrower).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();

                var updatedBorrower = await _context.Borrowers
                    .Include(b => b.Employer)
                    .Include(b => b.PrefixLookup)
                    .Include(b => b.BorrowerStatusLookup)
                    .Include(b => b.AccountStatusLookup)
                    .Select(b => new
                    {
                        Id = b.Id,
                        Username = b.Username,
                        AccountStatus = b.AccountStatusLookup.StatusName,
                        AccountStatusId = b.AccountStatus,
                        BorrowerStatus = b.BorrowerStatusLookup.StatusName,
                        BorrowerStatusId = b.BorrowerStatus,
                        Prefix = b.PrefixLookup.PrefixName,
                        PrefixId = b.PrefixLookup.Id,
                        Position = b.Position ?? "",
                        CitizenId = b.CitizenId,
                        FullName = b.FullName,
                        Email = b.Email,
                        PhoneNumber = b.PhoneNumber,
                        Address = b.Address,
                        OutstandingDebt = b.OutstandingDebt,
                        EmployerId = b.EmployerId,
                        CreatedAt = b.CreatedAt,
                        UpdatedAt = b.UpdatedAt,
                        Employer = b.Employer
                    })
                    .FirstOrDefaultAsync(b => b.Id == id);

                return Ok(updatedBorrower);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BorrowerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }

        [HttpPost]
        public async Task<ActionResult<Borrower>> PostBorrower(Borrower borrower)
        {
            _context.Borrowers.Add(borrower);
            await _context.SaveChangesAsync();

            var createdBorrower = await _context.Borrowers
                .Include(b => b.Employer)
                .Include(b => b.PrefixLookup)
                .Include(b => b.BorrowerStatusLookup)
                .Include(b => b.AccountStatusLookup)
                .Select(b => new
                {
                    Id = b.Id,
                    Username = b.Username,
                    AccountStatus = b.AccountStatusLookup.StatusName,
                    AccountStatusId = b.AccountStatus,
                    BorrowerStatus = b.BorrowerStatusLookup.StatusName,
                    BorrowerStatusId = b.BorrowerStatus,
                    Prefix = b.PrefixLookup.PrefixName,
                    PrefixId = b.PrefixLookup.Id,
                    Position = b.Position ?? "",
                    CitizenId = b.CitizenId,
                    FullName = b.FullName,
                    Email = b.Email,
                    PhoneNumber = b.PhoneNumber,
                    Address = b.Address,
                    OutstandingDebt = b.OutstandingDebt,
                    EmployerId = b.EmployerId,
                    CreatedAt = b.CreatedAt,
                    UpdatedAt = b.UpdatedAt,
                    Employer = b.Employer
                })
                .FirstOrDefaultAsync(b => b.Id == borrower.Id);

            return CreatedAtAction(nameof(GetBorrower), new { id = borrower.Id }, createdBorrower);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBorrower(int id)
        {
            var borrower = await _context.Borrowers.FindAsync(id);
            if (borrower == null)
            {
                return NotFound();
            }

            _context.Borrowers.Remove(borrower);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BorrowerExists(int id)
        {
            return _context.Borrowers.Any(e => e.Id == id);
        }
    }
}