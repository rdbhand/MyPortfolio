import '../../styles/Achievements.css';

function Achievements(){
const achievements = [
    
    {
      title: '2⭐ Coder at CodeChef',
      description: 'Achieved a 2-star rating by solving competitive problems.',
      year: '2025',
    },
    {
      title: '200+ Problem Solved on GFG',
      description: 'Solved various kinds of DSA problem on GFG.',
      year: '2025',
    }
  ];

  let codechef_badges=["diamondBadge.png", "silverBadge.png", "silverBadge2.png"];

  return (
    <div className="achievements-container">
      <h2>🏆Achievements🏆</h2>
      <hr/><br/>
      <h3>🧑🏻‍💻 CodeChef Badges 🧑🏻‍💻</h3>
      <div className="codechef-badges">
        {codechef_badges.map((i, index) => (
  <img key={index} src={`${process.env.PUBLIC_URL}/images/${i}`} alt={`badge-${index}`} />
))}

      </div>
      <div className="achievements-list">
        {achievements.map((ach, index) => (
          <div key={index} className="achievement-card">
            <h3>{ach.title}</h3>
            <p>{ach.description}</p>
            <span className="year">{ach.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;