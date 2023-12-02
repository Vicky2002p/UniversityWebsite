document.addEventListener('DOMContentLoaded', function() {
    // Simulated news data (would normally come from a server)
    const newsItems = [
        { title: "New AI Course Available", date: "2023-03-15" },
        { title: "Hackathon Winners Announced", date: "2023-03-10" },
        { title: "Summer Internship Opportunities", date: "2023-02-28" }
    ];

    let newsContent = document.getElementById('news');
    let newsHTML = "<h2>Latest News</h2>";

    newsItems.forEach(news => {
        newsHTML += `
            <div class="news-item">
                <h3>${news.title}</h3>
                <p>Date: ${news.date}</p>
            </div>
        `;
    });

    newsContent.innerHTML = newsHTML;
});
