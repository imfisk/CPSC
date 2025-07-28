// CPSC Navigation Component
function loadNavigation() {
  const navHTML = `
    <div class="logo">
      <a href="https://imfisk.github.io/CPSC/index.html">
        <img src="https://imfisk.github.io/CPSC/edge-computing.png" alt="CPSC Logo Placeholder" />
      </a>
    </div>
    <h2>CPSC Activities</h2>
    <ul>
      <li>
        <a href="https://imfisk.github.io/CPSC/members.html">Members</a>
        <div class="navicon">
          <a href="https://imfisk.github.io/CPSC/members.html">
            <img src="https://imfisk.github.io/CPSC/committee.png" alt="People" />
          </a>
        </div>
      </li>
      <li>
        <a href="https://imfisk.github.io/CPSC/news.html">News and Upcoming Events</a>
        <div class="navicon">
          <a href="https://imfisk.github.io/CPSC/news.html">
            <img src="https://imfisk.github.io/CPSC/daily.png" alt="News" />
          </a>
        </div>
      </li>
      <li>
        <a href="https://imfisk.github.io/CPSC/docs.html">Documents and Reports</a>
        <div class="navicon">
          <a href="https://imfisk.github.io/CPSC/docs.html">
            <img src="https://imfisk.github.io/CPSC/report.png" alt="Documents" />
          </a>
        </div>
      </li>
      <li>
        <a href="https://imfisk.github.io/CPSC/community.html">Community Engagement</a>
        <div class="navicon">
          <a href="https://imfisk.github.io/CPSC/community.html">
            <img src="https://imfisk.github.io/CPSC/community.png" alt="Community" />
          </a>
        </div>
      </li>
      <li>
        <a href="https://imfisk.github.io/CPSC/training.html">Training and Careers</a>
        <div class="navicon">
          <a href="https://imfisk.github.io/CPSC/training.html">
            <img src="https://imfisk.github.io/CPSC/presentation.png" alt="Training" />
          </a>
        </div>
      </li>
      <li>
        <a href="https://imfisk.github.io/CPSC/industry.html">Industry Collaboration</a>
        <div class="navicon">
          <a href="https://imfisk.github.io/CPSC/industry.html">
            <img src="https://imfisk.github.io/CPSC/production.png" alt="Industry" />
          </a>
        </div>
      </li>
      <li>
        <a href="https://imfisk.github.io/CPSC/prizes.html">Prizes and Awards</a>
        <div class="navicon">
          <a href="https://imfisk.github.io/CPSC/prizes.html">
            <img src="https://imfisk.github.io/CPSC/trophy.png" alt="Prizes" />
          </a>
        </div>
      </li>
    </ul>
  `;
  
  const navElement = document.querySelector('nav');
  if (navElement) {
    navElement.innerHTML = navHTML;
  }
}

// Load navigation when DOM is ready
document.addEventListener('DOMContentLoaded', loadNavigation);
