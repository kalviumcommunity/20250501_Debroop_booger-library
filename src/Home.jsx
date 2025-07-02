import React, { useState } from 'react';
import './Home.css';

const dummyBooks = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '9780743273565',
    location: 'Shelf A1',
    status: 'Available',
    dateIssued: '-',
    returnDate: '-',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '9780446310789',
    location: 'Shelf B2',
    status: 'Issued',
    dateIssued: '2024-01-15',
    returnDate: '2024-02-15',
  },
  {
    title: '1984',
    author: 'George Orwell',
    isbn: '9780451524935',
    location: 'Shelf C3',
    status: 'Available',
    dateIssued: '-',
    returnDate: '-',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    isbn: '9780141439518',
    location: 'Shelf D4',
    status: 'Overdue',
    dateIssued: '2024-01-20',
    returnDate: '2024-02-20',
  },
];

function StatusBadge({ status }) {
  let badgeClass = 'home-status-badge';
  if (status === 'Available') {
    badgeClass += ' home-status-available';
  } else if (status === 'Issued') {
    badgeClass += ' home-status-issued';
  } else if (status === 'Overdue' || status === 'Overdue') {
    badgeClass += ' home-status-overdue';
  }
  return (
    <span className={badgeClass}>{status}</span>
  );
}

function Home() {
  const [sortBy, setSortBy] = useState('Title');

  // Simple sort for demo
  const sortedBooks = [...dummyBooks].sort((a, b) => {
    if (sortBy === 'Title') return a.title.localeCompare(b.title);
    if (sortBy === 'Author') return a.author.localeCompare(b.author);
    return 0;
  });

  return (
    <div className="home-bg-fit">
      {/* Navbar */}
      <nav className="home-navbar">
        <div className="home-logo">
        
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
            	<defs>
            		<clipPath id="clipPath1355805773">
            			<path d="M0 0L24 0L24 24L0 24L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
            		</clipPath>
            	</defs>
            	<g clip-path="url(#clipPath1355805773)">
            		<path d="M0.0251263 0.0251263Q-1 1.05025 -1 2.5C-1 3.05228 -0.55228 3.5 0 3.5C0.55228 3.5 1 3.05228 1 2.5Q1 1.87868 1.43934 1.43934Q1.87868 1 2.5 1L16 1C16.5523 1 17 0.55228 17 0C17 -0.55228 16.5523 -1 16 -1L2.5 -1Q1.05025 -1 0.0251263 0.0251263Z" fill-rule="evenodd" transform="matrix(1 0 0 1 4 17)" fill="rgb(37, 99, 235)"/>
            		<path d="M2.5 -1L16 -1Q16.0985 -1 16.1951 -0.980785Q16.2917 -0.96157 16.3827 -0.923879Q16.4737 -0.886188 16.5556 -0.83147Q16.6375 -0.776751 16.7071 -0.707107Q16.7767 -0.637463 16.8315 -0.55557Q16.8862 -0.473678 16.9239 -0.382683Q16.9616 -0.291689 16.9808 -0.19509Q17 -0.0984914 17 0L17 20Q17 20.0985 16.9808 20.1951Q16.9616 20.2917 16.9239 20.3827Q16.8862 20.4737 16.8315 20.5556Q16.7767 20.6375 16.7071 20.7071Q16.6375 20.7767 16.5556 20.8315Q16.4737 20.8862 16.3827 20.9239Q16.2917 20.9616 16.1951 20.9808Q16.0985 21 16 21L2.5 21Q1.05025 21 0.0251263 19.9749Q-1 18.9497 -1 17.5L-1 2.5Q-1 1.05025 0.0251263 0.0251263Q1.05025 -1 2.5 -1ZM2.5 1Q1.87868 1 1.43934 1.43934Q1 1.87868 1 2.5L1 17.5Q1 18.1213 1.43934 18.5607Q1.87868 19 2.5 19L16 19L16 20L15 20L15 0L16 0L16 1L2.5 1Z" fill-rule="nonzero" transform="matrix(1 0 0 1 4 2)" fill="rgb(37, 99, 235)"/>
            	</g>
            </svg>

          BOOGER
        </div>
        <div style={{ flex: 1 }} />
        {/* <input type="text" placeholder="Search books..." className="home-search" /> */}
        <div className="home-factor-input-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="672"
            height="42"
            viewBox="0 0 672 42"
            style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
          >
            <rect width="672" height="42" rx="8" ry="8" fill="rgb(255, 255, 255)" />
            <path d="M-0 8C0 3.58172 3.58172 -0 8 -0L664 0C668.418 0 672 3.58172 672 8L672 34C672 38.4183 668.418 42 664 42L8 42C3.58172 42 -0 38.4183 -0 34L0 8ZM8 1C4.13401 1 1 4.13401 1 8L1 34C1 37.866 4.13401 41 8 41L664 41C667.866 41 671 37.866 671 34L671 8C671 4.13401 667.866 1 664 1L8 1Z" fillRule="nonzero" fill="rgb(209, 213, 219)" />
            <defs>
              <clipPath id="clipPath4089919545">
                <path d="M0 0L616 0L616 26L0 26L0 0Z" fillRule="nonzero" transform="matrix(1 0 0 1 40 8)" />
              </clipPath>
            </defs>
            <g clipPath="url(#clipPath4089919545)">
              {/* ... (SVG text paths omitted for brevity, keep as in original) ... */}
            </g>
            <defs>
              <clipPath id="clipPath8479620771">
                <path d="M0 0L16 0L16 16L0 16L0 0Z" fillRule="nonzero" transform="matrix(1 0 0 1 12 10)" />
              </clipPath>
            </defs>
            <g clipPath="url(#clipPath8479620771)">
              <circle cx="5.3333335" cy="5.3333335" r="5.3333335" strokeWidth="1.3333334" transform="matrix(1 0 0 1 14 12)" stroke="rgb(156, 163, 175)" fill="transparent" />
              <path d="M-0.471405 -0.471404C-0.731752 -0.211057 -0.731752 0.211057 -0.471404 0.471405L2.4286 3.3714C2.68894 3.63175 3.11106 3.63175 3.3714 3.3714C3.63175 3.11106 3.63175 2.68894 3.3714 2.4286L0.471405 -0.471405C0.211057 -0.731752 -0.211057 -0.731752 -0.471405 -0.471404Z" fillRule="evenodd" transform="matrix(1 0 0 1 23.1 21.1)" fill="rgb(156, 163, 175)" />
            </g>
          </svg>
          <input
            type="text"
            placeholder="Search books..."
            className="home-factor-input"
          />
        </div>
        <div style={{ flex: 1 }} />
        <button
          className="home-user-icon-btn"
          onClick={() => window.location.href = "/login"}
          title="Go to Login"
        >
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 40 40">
          	<defs>
          		<clipPath id="clipPath6842910336">
          			<path d="M0 0L24 0L24 24L0 24L0 0Z" fillRule="nonzero" transform="matrix(1 0 0 1 8 8)"/>
          		</clipPath>
          	</defs>
          	<g clipPath="url(#clipPath6842910336)">
          		<path d="M15 4L15 6C15 6.55228 15.4477 7 16 7C16.5523 7 17 6.55228 17 6L17 4Q17 1.92893 15.5355 0.464464Q14.0711 -1 12 -1L4 -1Q1.92893 -1 0.464466 0.464467Q-1 1.92893 -1 4L-1 6C-1 6.55228 -0.55228 7 0 7C0.55228 7 1 6.55228 1 6L1 4Q1 2.75736 1.87868 1.87868Q2.75736 1 4 1L12 1Q13.2426 1 14.1213 1.87868Q15 2.75736 15 4Z" fillRule="evenodd" transform="matrix(1 0 0 1 12 23)" fill="rgb(75, 85, 99)"/>
          		<circle cx="4" cy="4" r="4" strokeWidth="2" transform="matrix(1 0 0 1 16 11)" stroke="rgb(75, 85, 99)" fill="transparent"/>
          	</g>
          </svg>
        </button>
        
      </nav>

      {/* Main Content */}
      <div className="home-main">
        <div className="home-header-row">
          <button className="home-add-btn">+ Add New Book</button>
          <div style={{ flex: 1 }} />
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="home-sort-select">
            <option value="Title">Sort by: Title</option>
            <option value="Author">Sort by: Author</option>
          </select>
        </div>
        <div className="home-table-container">
          <table className="home-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Location</th>
                <th>Status</th>
                <th>Date Issued</th>
                <th>Return Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedBooks.map((book, idx) => (
                <tr key={book.isbn}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>{book.location}</td>
                  <td><StatusBadge status={book.status} /></td>
                  <td>{book.dateIssued}</td>
                  <td>{book.returnDate}</td>
                  <td className="home-actions">
                    <button className="home-action-btn" title="Edit">
                      <svg width="18" height="18" fill="none" stroke="#6b7280" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 1 1 2.828 2.828L11.828 15.828a4 4 0 0 1-1.414.828l-4.243 1.415 1.415-4.243a4 4 0 0 1 .828-1.414z"/></svg>
                    </button>
                    <button className="home-action-btn" title="Delete">
                      <svg width="18" height="18" fill="none" stroke="#6b7280" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="home-pagination">
          <span>Showing 1 to 4 of 4 entries</span>
          <div style={{ flex: 1 }} />
          <button className="home-pagination-btn" disabled>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="home-pagination-btn active">1</button>
          <button className="home-pagination-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home; 