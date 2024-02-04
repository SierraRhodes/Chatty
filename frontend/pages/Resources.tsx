import React from 'react';
import './globals.css'; // Import your custom styles or use inline styles

interface ResourcePageProps {
  // Add any additional props you may need
}

const ResourcePage: React.FC<ResourcePageProps> = (props) => {
  const mentorshipImageLink = 'https://www.kevinmd.com/blog/wp-content/uploads/shutterstock_1095547628.jpg'; // Replace with your actual photo link

  return (
    <div className="resource-page-container">
      <div className="header-container">
        <img src={mentorshipImageLink} alt="Mentorship" className="header-image" />
        <h1 className="resource-page-heading">Student Resource Page</h1>
      </div>
      <p className="resource-page-description">
        Welcome to the resource page for students seeking guidance from mentors!
      </p>
      
      <section className="resource-section">
        <h2>Getting Started</h2>
        <p>
          To make the most out of your mentorship experience, follow these steps:
        </p>
        <ol>
          <li>Understand your goals and objectives.</li>
          <li>Identify areas where you need guidance.</li>
          <li>Research potential mentors based on their expertise.</li>
          <li>Initiate contact with a polite and concise message introducing yourself.</li>
          <li>Schedule regular check-ins with your mentor to discuss progress and challenges.</li>
        </ol>
      </section>

      <section className="resource-section">
        <h2>Effective Communication</h2>
        <p>
          Communication is key in mentorship. Here are some tips for effective communication with your mentor:
        </p>
        <ul>
          <li>Be clear and concise in your messages.</li>
          <li>Ask specific questions to get targeted guidance.</li>
          <li>Listen actively and show appreciation for your mentor's time.</li>
          <li>Provide updates on your progress and any challenges you're facing.</li>
        </ul>
      </section>

      <section className="resource-section">
        <h2>Utilizing Resources</h2>
        <p>
          Take advantage of available resources to enhance your learning experience:
        </p>
        <ul>
          <li>Explore online courses and tutorials related to your field of interest.</li>
          <li>Read books and articles recommended by your mentor.</li>
          <li>Attend relevant workshops, webinars, or conferences.</li>
          <li>Join online communities to connect with other learners and professionals.</li>
        </ul>
      </section>

      <section className="resource-section">
        <h2>Building a Relationship</h2>
        <p>
          Building a strong mentor-mentee relationship is crucial for success. Here's how you can foster a positive connection:
        </p>
        <ul>
          <li>Express gratitude for your mentor's guidance.</li>
          <li>Be open to feedback and constructive criticism.</li>
          <li>Share your achievements and celebrate successes together.</li>
          <li>Maintain professionalism and respect in all interactions.</li>
        </ul>
      </section>

      {/* Add more sections as needed */}

      <p className="resource-page-conclusion">
        Remember, mentorship is a two-way street. Take initiative, be proactive in your learning journey, and make the most out of the valuable guidance offered by your mentor.
      </p>
    </div>
  );
};

export default ResourcePage;