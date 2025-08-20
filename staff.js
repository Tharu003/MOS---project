
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll('#service-details-tabs button[data-bs-toggle="tab"]');

  tabLinks.forEach((tab) => {
    tab.addEventListener('shown.bs.tab', function (event) {
      const targetId = event.target.getAttribute('data-bs-target');
      const activeTab = document.querySelector(targetId);

      // Reset all previous cards (optional)
      document.querySelectorAll('.animate-wrapper').forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight; // force reflow
        el.style.animation = null;
      });

      // Animate only visible tab's cards
      const cards = activeTab.querySelectorAll('.animate-wrapper');
      cards.forEach((card, index) => {
        const delay = 0.2 + index * 0.2;
        card.style.animationDelay = `${delay}s`;
        card.style.animationName = 'fadeInUp';
      });
    });
  });

  // Trigger animation for the initially visible tab
  document.querySelector('#service-details-tab-1-tab').dispatchEvent(new Event('shown.bs.tab'));
});

