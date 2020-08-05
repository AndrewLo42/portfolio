import React from 'react';

class SkillsInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          name: 'React.js',
          src: 'devicon-react-original'
        },
        {
          name: 'JavaScript',
          src: 'devicon-javascript-plain'
        },
        {
          name: 'HTML5',
          src: 'devicon-html5-plain'
        },
        {
          name: 'PostgreSQL',
          src: 'devicon-postgresql-plain'
        },
        {
          name: 'Node.JS',
          src: 'devicon-nodejs-plain'
        },
        {
          name: 'CSS3',
          src: 'devicon-css3-plain'
        },
        {
          name: 'GitHub',
          src: 'devicon-github-plain'
        },
        {
          name: 'npm',
          src: 'fab fa-npm'
        },
        {
          name: 'Docker',
          src: 'devicon-docker-plain'
        }
      ]
    };
  }

  renderSkillsList() {
    const skillsList = this.state.skills.map(tech =>
      <div className="text-center skills-item" key={tech.name} >
        <div>{tech.name}</div>
        <i className={tech.src}></i>
      </div>);
    return skillsList;
  }

  render() {
    return (
      <div className="container row home-skills-list">
        {this.renderSkillsList()}
      </div>
    );
  }
}

export default SkillsInner;
